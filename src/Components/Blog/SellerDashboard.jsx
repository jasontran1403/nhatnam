import { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import IngredientTable from "./IngredientTable";
import ProductFormModal from "./ProductFormModal";
import IngredientFormModal from "./IngredientFormModal";
import Toast from "./Toast";
import BASE_URL from "../../Utils/constants/apiEndpoints";
import { ProductService, STATUS_CODE } from "../../Utils/MainService";

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [showIngredientModal, setShowIngredientModal] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        fetchProducts();
        fetchIngredients();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await ProductService.getProducts({ size: 100 });
            if (response.code === STATUS_CODE.SUCCESS) {
                setProducts(response.data.content || []);
            }
        } catch (err) {
            showToast('Failed to load products', 'error');
        } finally {
            setLoading(false);
        }
    };

    const fetchIngredients = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/seller/ingredients`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
            });
            const data = await response.json();
            if (data.code === STATUS_CODE.SUCCESS) {
                setIngredients(data.data || []);
            }
        } catch (err) {
            showToast('Failed to load ingredients', 'error');
        }
    };

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#f5f5f5',
            padding: '2rem'
        }}>
            <div className="container-fluid">
                {/* Header */}
                <div className="row mb-4">
                    <div className="col-12">
                        <h1 style={{ 
                            fontSize: '2.5rem', 
                            fontWeight: '700', 
                            marginBottom: '0.5rem',
                            color: '#1a1a1a'
                        }}>
                            Product Management
                        </h1>
                        <p style={{ color: '#666', fontSize: '1.1rem' }}>
                            Manage products, variants, prices, and ingredients
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <button 
                            className="btn w-100"
                            onClick={() => setShowProductModal(true)}
                            style={{
                                padding: '1.2rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                backgroundColor: '#2563eb',
                                border: 'none',
                                color: 'white',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Add New Product
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button 
                            className="btn w-100"
                            onClick={() => setShowIngredientModal(true)}
                            style={{
                                padding: '1.2rem',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                backgroundColor: '#10b981',
                                border: 'none',
                                color: 'white',
                                borderRadius: '12px',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
                        >
                            <i className="bi bi-plus-circle me-2"></i>
                            Add New Ingredient
                        </button>
                    </div>
                </div>

                {/* Tables */}
                <div className="row g-4">
                    <div className="col-12">
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ 
                                fontSize: '1.5rem', 
                                fontWeight: '600', 
                                marginBottom: '1.5rem',
                                color: '#1a1a1a'
                            }}>
                                <i className="bi bi-bag me-2" style={{ color: '#2563eb' }}></i>
                                Products
                            </h3>
                            <ProductTable 
                                products={products}
                                loading={loading}
                                onRefresh={fetchProducts}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '1.5rem',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ 
                                fontSize: '1.5rem', 
                                fontWeight: '600', 
                                marginBottom: '1.5rem',
                                color: '#1a1a1a'
                            }}>
                                <i className="bi bi-basket me-2" style={{ color: '#10b981' }}></i>
                                Ingredients
                            </h3>
                            <IngredientTable 
                                ingredients={ingredients}
                                loading={loading}
                                onRefresh={fetchIngredients}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showProductModal && (
                <ProductFormModal
                    ingredients={ingredients}
                    onClose={() => setShowProductModal(false)}
                    onSuccess={() => {
                        setShowProductModal(false);
                        fetchProducts();
                        showToast('Product created successfully!');
                    }}
                    onError={(msg) => showToast(msg, 'error')}
                />
            )}

            {showIngredientModal && (
                <IngredientFormModal
                    onClose={() => setShowIngredientModal(false)}
                    onSuccess={() => {
                        setShowIngredientModal(false);
                        fetchIngredients();
                        showToast('Ingredient created successfully!');
                    }}
                    onError={(msg) => showToast(msg, 'error')}
                />
            )}

            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        </div>
    );
};

export default SellerDashboard;