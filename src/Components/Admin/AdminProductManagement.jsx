import { useState, useEffect } from "react";
import { ProductService, AdminService, STATUS_CODE } from "../../services/MainService";

const AdminProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showVariantModal, setShowVariantModal] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [selectedProductForVariant, setSelectedProductForVariant] = useState(null);
    const [selectedProductForPrice, setSelectedProductForPrice] = useState(null);

    const [productForm, setProductForm] = useState({
        name: '', description: '', imageUrl: '', category: 'hotdog',
    });

    const [variantForm, setVariantForm] = useState({
        productId: null, variantName: '', variantCode: '', isDefault: false, displayOrder: 0, ingredients: [],
    });

    const [priceForm, setPriceForm] = useState({
        productId: null, variantId: null, priceName: '', price: 0, isDefault: false, validFrom: null, validTo: null,
    });

    const categories = ['hotdog', 'burger', 'pizza', 'drink', 'dessert'];

    useEffect(() => { fetchProducts(); }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await ProductService.getProducts({ size: 100 });
            if (response.code === STATUS_CODE.SUCCESS) {
                setProducts(response.data.content || []);
            }
        } catch (err) {
            setError('Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    const showSuccess = (msg) => { setSuccess(msg); setTimeout(() => setSuccess(null), 3000); };
    const showError = (msg) => { setError(msg); setTimeout(() => setError(null), 3000); };

    const handleOpenProductModal = (product = null) => {
        if (product) {
            setEditingProduct(product);
            setProductForm({ name: product.name, description: product.description || '', imageUrl: product.imageUrl || '', category: product.category || 'hotdog' });
        } else {
            setEditingProduct(null);
            setProductForm({ name: '', description: '', imageUrl: '', category: 'hotdog' });
        }
        setShowProductModal(true);
    };

    const handleSaveProduct = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = editingProduct 
                ? await AdminService.updateProduct(editingProduct.id, productForm)
                : await AdminService.createProduct(productForm);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess(editingProduct ? 'Product updated!' : 'Product created!');
                setShowProductModal(false);
                fetchProducts();
            } else {
                showError(response.message || 'Operation failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to save product');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProduct = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            setLoading(true);
            const response = await AdminService.deleteProduct(id);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess('Product deleted!');
                fetchProducts();
            } else {
                showError(response.message || 'Delete failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to delete');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenVariantModal = (product) => {
        setSelectedProductForVariant(product);
        setVariantForm({ productId: product.id, variantName: '', variantCode: '', isDefault: false, displayOrder: 0, ingredients: [] });
        setShowVariantModal(true);
    };

    const handleSaveVariant = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await AdminService.addVariant(variantForm);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess('Variant added!');
                setShowVariantModal(false);
                fetchProducts();
            } else {
                showError(response.message || 'Operation failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to save variant');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteVariant = async (variantId) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            setLoading(true);
            const response = await AdminService.deleteVariant(variantId);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess('Variant deleted!');
                fetchProducts();
            } else {
                showError(response.message || 'Delete failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to delete');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenPriceModal = (product, variantId = null) => {
        setSelectedProductForPrice(product);
        setPriceForm({ productId: product.id, variantId, priceName: '', price: 0, isDefault: false, validFrom: null, validTo: null });
        setShowPriceModal(true);
    };

    const handleSavePrice = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await AdminService.addPrice(priceForm);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess('Price added!');
                setShowPriceModal(false);
                fetchProducts();
            } else {
                showError(response.message || 'Operation failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to save price');
        } finally {
            setLoading(false);
        }
    };

    const handleDeletePrice = async (priceId) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            setLoading(true);
            const response = await AdminService.deletePrice(priceId);
            if (response.code === STATUS_CODE.SUCCESS) {
                showSuccess('Price deleted!');
                fetchProducts();
            } else {
                showError(response.message || 'Delete failed');
            }
        } catch (err) {
            showError(err.message || 'Failed to delete');
        } finally {
            setLoading(false);
        }
    };

    const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

    return (
        <div className="admin-product-management section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2>Product Management</h2>
                            <button className="theme-btn" onClick={() => handleOpenProductModal()}>
                                <i className="bi bi-plus-circle me-2"></i>Add New Product
                            </button>
                        </div>

                        {success && <div className="alert alert-success"><i className="bi bi-check-circle me-2"></i>{success}</div>}
                        {error && <div className="alert alert-danger"><i className="bi bi-exclamation-triangle me-2"></i>{error}</div>}

                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th><th>Image</th><th>Name</th><th>Category</th><th>Default Price</th>
                                        <th>Variants</th><th>Prices</th><th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan="8" className="text-center py-5">
                                            <div className="spinner-border text-primary"></div>
                                        </td></tr>
                                    ) : products.length === 0 ? (
                                        <tr><td colSpan="8" className="text-center py-5">No products found</td></tr>
                                    ) : (
                                        products.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td><img src={product.imageUrl || '/assets/img/dishes/default.png'} alt={product.name} style={{width:'50px',height:'50px',objectFit:'cover'}}/></td>
                                                <td><strong>{product.name}</strong><br/><small className="text-muted">{product.description}</small></td>
                                                <td><span className="badge bg-info">{product.category}</span></td>
                                                <td>{formatPrice(product.defaultPrice || 0)}</td>
                                                <td>
                                                    <span className="badge bg-secondary me-1">{product.variants?.length || 0}</span>
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleOpenVariantModal(product)}>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <span className="badge bg-secondary me-1">{product.prices?.length || 0}</span>
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleOpenPriceModal(product)}>
                                                        <i className="bi bi-plus"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm btn-warning" onClick={() => handleOpenProductModal(product)}>
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteProduct(product.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Modal */}
            {showProductModal && (
                <div className="modal show d-block" tabIndex="-1" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{editingProduct ? 'Edit Product' : 'Add New Product'}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowProductModal(false)}></button>
                            </div>
                            <form onSubmit={handleSaveProduct}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Product Name *</label>
                                        <input type="text" className="form-control" value={productForm.name} 
                                            onChange={(e) => setProductForm({...productForm, name: e.target.value})} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control" rows="3" value={productForm.description}
                                            onChange={(e) => setProductForm({...productForm, description: e.target.value})}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input type="text" className="form-control" value={productForm.imageUrl}
                                            onChange={(e) => setProductForm({...productForm, imageUrl: e.target.value})}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category *</label>
                                        <select className="form-select" value={productForm.category}
                                            onChange={(e) => setProductForm({...productForm, category: e.target.value})} required>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowProductModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Saving...' : 'Save Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Variant Modal */}
            {showVariantModal && (
                <div className="modal show d-block" tabIndex="-1" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Variant to: {selectedProductForVariant?.name}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowVariantModal(false)}></button>
                            </div>
                            <form onSubmit={handleSaveVariant}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Variant Name *</label>
                                        <input type="text" className="form-control" placeholder="e.g., 3 Cheddar Cheese Sausages"
                                            value={variantForm.variantName}
                                            onChange={(e) => setVariantForm({...variantForm, variantName: e.target.value})} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Variant Code *</label>
                                        <input type="text" className="form-control" placeholder="e.g., 3CCS"
                                            value={variantForm.variantCode}
                                            onChange={(e) => setVariantForm({...variantForm, variantCode: e.target.value})} required/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="isDefault"
                                                checked={variantForm.isDefault}
                                                onChange={(e) => setVariantForm({...variantForm, isDefault: e.target.checked})}/>
                                            <label className="form-check-label" htmlFor="isDefault">Set as default variant</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Display Order</label>
                                        <input type="number" className="form-control" value={variantForm.displayOrder}
                                            onChange={(e) => setVariantForm({...variantForm, displayOrder: parseInt(e.target.value)})}/>
                                    </div>
                                    <div className="alert alert-info">
                                        <i className="bi bi-info-circle me-2"></i>
                                        <strong>Note:</strong> Ingredients need to be added separately via API
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowVariantModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Saving...' : 'Save Variant'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Price Modal */}
            {showPriceModal && (
                <div className="modal show d-block" tabIndex="-1" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Price to: {selectedProductForPrice?.name}</h5>
                                <button type="button" className="btn-close" onClick={() => setShowPriceModal(false)}></button>
                            </div>
                            <form onSubmit={handleSavePrice}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Variant (Optional)</label>
                                        <select className="form-select" value={priceForm.variantId || ''}
                                            onChange={(e) => setPriceForm({...priceForm, variantId: e.target.value ? parseInt(e.target.value) : null})}>
                                            <option value="">No specific variant</option>
                                            {selectedProductForPrice?.variants?.map(variant => (
                                                <option key={variant.id} value={variant.id}>{variant.variantName}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price Name *</label>
                                        <input type="text" className="form-control" placeholder="e.g., Regular, Large, XL"
                                            value={priceForm.priceName}
                                            onChange={(e) => setPriceForm({...priceForm, priceName: e.target.value})} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price (VND) *</label>
                                        <input type="number" className="form-control" value={priceForm.price}
                                            onChange={(e) => setPriceForm({...priceForm, price: parseFloat(e.target.value)})} required/>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="isPriceDefault"
                                                checked={priceForm.isDefault}
                                                onChange={(e) => setPriceForm({...priceForm, isDefault: e.target.checked})}/>
                                            <label className="form-check-label" htmlFor="isPriceDefault">Set as default price</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowPriceModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Saving...' : 'Save Price'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminProductManagement;