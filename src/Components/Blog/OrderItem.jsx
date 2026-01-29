import { useState, useEffect } from "react";
import { STATUS_CODE } from "../../Utils/MainService";
import { BASE_URL } from "../../Utils/constants/apiEndpoints";

const getToken = () => localStorage.getItem('accessToken');

const OrderItem = () => {
  const [products, setProducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    imageUrl: '',
    prices: [{ priceName: '', price: 0, isDefault: true }],
    variants: [],
    ingredients: [{ ingredientId: null, quantity: 0 }]
  });

  const [ingredientForm, setIngredientForm] = useState({
    name: '',
    unit: '',
    stockQuantity: 0,
    imageUrl: ''
  });

  const [uploadingImages, setUploadingImages] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchIngredients();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/api/seller/products?size=100`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      const data = await res.json();
      if (data.code === STATUS_CODE.SUCCESS) {
        setProducts(data.data.content || []);
      }
    } catch (err) {
      showToast('Không tải được danh sách sản phẩm', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchIngredients = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/seller/ingredients`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      const data = await res.json();
      if (data.code === STATUS_CODE.SUCCESS) {
        setIngredients(data.data || []);
      }
    } catch (err) {
      showToast('Không tải được danh sách nguyên liệu', 'error');
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const uploadImage = async (file, type = 'product') => {
    const formData = new FormData();
    formData.append('image', file);

    const endpoint =
      type === 'product' ? '/api/upload/product-image' :
      type === 'variant' ? '/api/upload/variant-image' :
      '/api/upload/ingredient-image';

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${getToken()}` },
      body: formData
    });

    const data = await res.json();
    if (data.code === STATUS_CODE.SUCCESS) {
      return data.data.imageUrl;
    }
    throw new Error(data.message || 'Upload thất bại');
  };

  const handleProductImageSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast('Ảnh phải dưới 5MB', 'error');
      return;
    }

    setUploadingImages(prev => ({ ...prev, 'product': true }));
    try {
      const imageUrl = await uploadImage(file, 'product');
      setProductForm(prev => ({ ...prev, imageUrl }));
      showToast('Ảnh sản phẩm đã tải lên thành công', 'success');
    } catch {
      showToast('Tải ảnh sản phẩm thất bại', 'error');
    } finally {
      setUploadingImages(prev => ({ ...prev, 'product': false }));
    }
  };

  const handleVariantImageSelect = async (e, variantIndex) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast('Ảnh phải dưới 5MB', 'error');
      return;
    }

    setUploadingImages(prev => ({ ...prev, [`variant-${variantIndex}`]: true }));
    try {
      const imageUrl = await uploadImage(file, 'variant');
      setProductForm(prev => ({
        ...prev,
        variants: prev.variants.map((v, i) =>
          i === variantIndex ? { ...v, imageUrl } : v
        )
      }));
      showToast('Ảnh biến thể đã tải lên', 'success');
    } catch {
      showToast('Tải ảnh biến thể thất bại', 'error');
    } finally {
      setUploadingImages(prev => ({ ...prev, [`variant-${variantIndex}`]: false }));
    }
  };

  const handleIngredientImageSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast('Ảnh phải dưới 5MB', 'error');
      return;
    }

    setUploadingImages(prev => ({ ...prev, 'ingredient': true }));
    try {
      const imageUrl = await uploadImage(file, 'ingredient');
      setIngredientForm(prev => ({ ...prev, imageUrl }));
      showToast('Ảnh nguyên liệu đã tải lên', 'success');
    } catch {
      showToast('Tải ảnh nguyên liệu thất bại', 'error');
    } finally {
      setUploadingImages(prev => ({ ...prev, 'ingredient': false }));
    }
  };

  // Giá
  const addPrice = () => {
    setProductForm(prev => ({
      ...prev,
      prices: [...prev.prices, { priceName: '', price: 0, isDefault: false }]
    }));
  };

  const removePrice = (index) => {
    if (productForm.prices.length <= 1) {
      showToast('Phải có ít nhất 1 mức giá', 'error');
      return;
    }
    setProductForm(prev => ({
      ...prev,
      prices: prev.prices.filter((_, i) => i !== index)
    }));
  };

  const setDefaultPrice = (index) => {
    setProductForm(prev => ({
      ...prev,
      prices: prev.prices.map((p, i) => ({
        ...p,
        isDefault: i === index
      }))
    }));
  };

  // Biến thể
  const addVariant = () => {
    setProductForm(prev => ({
      ...prev,
      variants: [
        ...prev.variants,
        {
          variantName: '',
          imageUrl: null,
          isDefault: false,
          ingredients: [{ ingredientId: null, quantity: 0 }]
        }
      ]
    }));
  };

  const removeVariant = (index) => {
    setProductForm(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index)
    }));
  };

  const addIngredientToVariant = (variantIndex) => {
    setProductForm(prev => ({
      ...prev,
      variants: prev.variants.map((v, i) =>
        i === variantIndex
          ? { ...v, ingredients: [...v.ingredients, { ingredientId: null, quantity: 0 }] }
          : v
      )
    }));
  };

  const removeIngredientFromVariant = (variantIndex, ingredientIndex) => {
    setProductForm(prev => ({
      ...prev,
      variants: prev.variants.map((v, i) =>
        i === variantIndex
          ? { ...v, ingredients: v.ingredients.filter((_, j) => j !== ingredientIndex) }
          : v
      )
    }));
  };

  // Nguyên liệu sản phẩm (không variant)
  const addIngredientToProduct = () => {
    setProductForm(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { ingredientId: null, quantity: 0 }]
    }));
  };

  const removeIngredientFromProduct = (index) => {
    if (productForm.ingredients.length <= 1) {
      showToast('Phải có ít nhất 1 nguyên liệu', 'error');
      return;
    }
    setProductForm(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitProduct = async () => {
    // Validation cơ bản
    if (!productForm.name.trim()) return showToast('Tên sản phẩm là bắt buộc', 'error');
    if (!productForm.imageUrl) return showToast('Cần chọn ảnh sản phẩm', 'error');

    // Kiểm tra giá
    if (productForm.prices.length === 0) return showToast('Phải có ít nhất 1 mức giá', 'error');
    for (const p of productForm.prices) {
      if (!p.priceName.trim()) return showToast('Tên mức giá bắt buộc', 'error');
      if (p.price <= 0) return showToast('Giá phải lớn hơn 0', 'error');
    }

    // Kiểm tra biến thể hoặc nguyên liệu
    if (productForm.variants.length > 0) {
      for (const v of productForm.variants) {
        if (!v.variantName.trim()) return showToast('Tên biến thể bắt buộc', 'error');
        if (v.ingredients.length === 0) return showToast(`Biến thể "${v.variantName}" cần ít nhất 1 nguyên liệu`, 'error');
        for (const ing of v.ingredients) {
          if (!ing.ingredientId) return showToast('Chọn nguyên liệu cho biến thể', 'error');
          if (ing.quantity <= 0) return showToast('Số lượng nguyên liệu > 0', 'error');
        }
      }
    } else {
      if (productForm.ingredients.length === 0) return showToast('Sản phẩm cần ít nhất 1 nguyên liệu', 'error');
      for (const ing of productForm.ingredients) {
        if (!ing.ingredientId) return showToast('Chọn nguyên liệu', 'error');
        if (ing.quantity <= 0) return showToast('Số lượng > 0', 'error');
      }
    }

    setSubmitting(true);
    try {
      const payload = {
        name: productForm.name.trim(),
        description: productForm.description.trim(),
        imageUrl: productForm.imageUrl,
        prices: productForm.prices,
        variants: productForm.variants.length > 0 ? productForm.variants : null,
        ingredients: productForm.variants.length === 0 ? productForm.ingredients : null
      };

      const res = await fetch(`${BASE_URL}/api/seller/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.code === STATUS_CODE.SUCCESS) {
        showToast('Tạo sản phẩm thành công!', 'success');
        setShowProductModal(false);
        resetProductForm();
        fetchProducts();
      } else {
        showToast(data.message || 'Tạo sản phẩm thất bại', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối server', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitIngredient = async () => {
    if (!ingredientForm.name.trim()) return showToast('Tên nguyên liệu bắt buộc', 'error');
    if (!ingredientForm.unit.trim()) return showToast('Đơn vị bắt buộc', 'error');
    if (ingredientForm.stockQuantity < 0) return showToast('Tồn kho không được âm', 'error');
    if (!ingredientForm.imageUrl) return showToast('Ảnh nguyên liệu bắt buộc', 'error');

    setSubmitting(true);
    try {
      const res = await fetch(`${BASE_URL}/api/seller/ingredients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(ingredientForm)
      });

      const data = await res.json();
      if (data.code === STATUS_CODE.SUCCESS) {
        showToast('Tạo nguyên liệu thành công!', 'success');
        setShowIngredientModal(false);
        resetIngredientForm();
        fetchIngredients();
      } else {
        showToast(data.message || 'Tạo nguyên liệu thất bại', 'error');
      }
    } catch {
      showToast('Lỗi hệ thống', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      imageUrl: '',
      prices: [{ priceName: '', price: 0, isDefault: true }],
      variants: [],
      ingredients: [{ ingredientId: null, quantity: 0 }]
    });
  };

  const resetIngredientForm = () => {
    setIngredientForm({
      name: '',
      unit: '',
      stockQuantity: 0,
      imageUrl: ''
    });
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '2rem' }}>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0f172a' }}>
              Quản lý sản phẩm
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
              Quản lý sản phẩm và nguyên liệu
            </p>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <button
              className="btn w-100 py-3 fw-bold text-white"
              onClick={() => setShowProductModal(true)}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(102,126,234,0.3)'
              }}
            >
              <i className="bi bi-plus-circle me-2"></i> Thêm sản phẩm mới
            </button>
          </div>
          <div className="col-md-6">
            <button
              className="btn w-100 py-3 fw-bold text-white"
              onClick={() => setShowIngredientModal(true)}
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(245,87,108,0.3)'
              }}
            >
              <i className="bi bi-plus-circle me-2"></i> Thêm nguyên liệu mới
            </button>
          </div>
        </div>

        {/* Bảng sản phẩm */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body">
                <h4 className="mb-4 fw-semibold">Danh sách sản phẩm</h4>
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary"></div>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Ảnh</th>
                          <th>Tên</th>
                          <th>Giá mặc định</th>
                          <th>Biến thể</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((p) => (
                          <tr key={p.id}>
                            <td>
                              {p.imageUrl && (
                                <img
                                  src={`${BASE_URL}/api/auth${p.imageUrl}`}
                                  alt={p.name}
                                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                              )}
                            </td>
                            <td className="fw-medium">{p.name}</td>
                            <td>{p.defaultPrice ? formatPrice(p.defaultPrice) : '-'}</td>
                            <td>{p.variants?.length || 0}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                        {products.length === 0 && (
                          <tr>
                            <td colSpan={5} className="text-center text-muted py-4">
                              Chưa có sản phẩm nào
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bảng nguyên liệu */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body">
                <h4 className="mb-4 fw-semibold">Danh sách nguyên liệu</h4>
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Đơn vị</th>
                        <th>Tồn kho</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {ingredients.map((ing) => (
                        <tr key={ing.id}>
                          <td>
                            {ing.imageUrl && (
                              <img
                                src={`${API_BASE}/api/auth${ing.imageUrl}`}
                                alt={ing.name}
                                style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                              />
                            )}
                          </td>
                          <td className="fw-medium">{ing.name}</td>
                          <td>{ing.unit}</td>
                          <td>{ing.stockQuantity}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {ingredients.length === 0 && (
                        <tr>
                          <td colSpan={5} className="text-center text-muted py-4">
                            Chưa có nguyên liệu nào
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL THÊM NGUYÊN LIỆU */}
      {showIngredientModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold">Thêm nguyên liệu mới</h5>
                <button className="btn-close" onClick={() => setShowIngredientModal(false)} disabled={submitting}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-medium">Tên nguyên liệu *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={ingredientForm.name}
                    onChange={(e) => setIngredientForm({ ...ingredientForm, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Đơn vị (kg, cái, lít,...) *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={ingredientForm.unit}
                    onChange={(e) => setIngredientForm({ ...ingredientForm, unit: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Số lượng tồn kho *</label>
                  <input
                    type="number"
                    className="form-control"
                    value={ingredientForm.stockQuantity}
                    onChange={(e) => setIngredientForm({ ...ingredientForm, stockQuantity: parseFloat(e.target.value) || 0 })}
                    min="0"
                    step="0.01"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Ảnh nguyên liệu *</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleIngredientImageSelect}
                    disabled={uploadingImages['ingredient']}
                  />
                  {uploadingImages['ingredient'] && <div className="mt-2 text-primary small">Đang tải ảnh...</div>}
                  {ingredientForm.imageUrl && (
                    <img
                      src={`${API_BASE}/api/auth${ingredientForm.imageUrl}`}
                      alt="preview"
                      className="mt-3 rounded shadow-sm"
                      style={{ maxHeight: '180px', objectFit: 'contain' }}
                    />
                  )}
                </div>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-outline-secondary px-4" onClick={() => setShowIngredientModal(false)} disabled={submitting}>
                  Hủy
                </button>
                <button className="btn btn-primary px-4" onClick={handleSubmitIngredient} disabled={submitting}>
                  {submitting ? 'Đang lưu...' : 'Lưu nguyên liệu'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL THÊM SẢN PHẨM */}
      {showProductModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold">Thêm sản phẩm mới</h5>
                <button className="btn-close" onClick={() => setShowProductModal(false)} disabled={submitting}></button>
              </div>

              <div className="modal-body" style={{ maxHeight: '78vh', overflowY: 'auto' }}>
                {/* Tên & Mô tả */}
                <div className="mb-4">
                  <label className="form-label fw-medium">Tên sản phẩm *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-medium">Mô tả</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  />
                </div>

                {/* Ảnh sản phẩm */}
                <div className="mb-5">
                  <label className="form-label fw-medium">Ảnh sản phẩm *</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleProductImageSelect}
                    disabled={uploadingImages['product']}
                  />
                  {uploadingImages['product'] && <div className="mt-2 text-primary small">Đang tải ảnh...</div>}
                  {productForm.imageUrl && (
                    <div className="mt-3 text-center">
                      <img
                        src={`${API_BASE}/api/auth${productForm.imageUrl}`}
                        alt="Ảnh sản phẩm"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '280px', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </div>

                {/* Mức giá */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="form-label fw-medium mb-0">Mức giá *</label>
                    <button className="btn btn-sm btn-outline-primary" onClick={addPrice}>
                      + Thêm mức giá
                    </button>
                  </div>

                  {productForm.prices.map((price, idx) => (
                    <div key={idx} className="input-group mb-3 align-items-center">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tên mức giá (VD: Size M, Combo...)"
                        value={price.priceName}
                        onChange={(e) => {
                          const prices = [...productForm.prices];
                          prices[idx].priceName = e.target.value;
                          setProductForm({ ...productForm, prices });
                        }}
                      />
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Giá"
                        min="0"
                        step="1000"
                        value={price.price}
                        onChange={(e) => {
                          const prices = [...productForm.prices];
                          prices[idx].price = parseInt(e.target.value) || 0;
                          setProductForm({ ...productForm, prices });
                        }}
                      />
                      <div className="input-group-text">
                        <input
                          type="checkbox"
                          checked={price.isDefault}
                          onChange={() => setDefaultPrice(idx)}
                        />
                        <label className="ms-2 mb-0">Mặc định</label>
                      </div>
                      {productForm.prices.length > 1 && (
                        <button className="btn btn-outline-danger ms-2" onClick={() => removePrice(idx)}>
                          Xóa
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Biến thể */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <label className="form-label fw-medium mb-0">Biến thể (tùy chọn)</label>
                    <button className="btn btn-sm btn-outline-success" onClick={addVariant}>
                      + Thêm biến thể
                    </button>
                  </div>

                  {productForm.variants.map((variant, vIdx) => (
                    <div key={vIdx} className="card mb-3 shadow-sm">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <strong>{variant.variantName.trim() || `Biến thể ${vIdx + 1}`}</strong>
                        <div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeVariant(vIdx)}
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">Tên biến thể *</label>
                            <input
                              type="text"
                              className="form-control"
                              value={variant.variantName}
                              onChange={(e) => {
                                const variants = [...productForm.variants];
                                variants[vIdx].variantName = e.target.value;
                                setProductForm({ ...productForm, variants });
                              }}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label">Ảnh biến thể (tùy chọn)</label>
                            <input
                              type="file"
                              className="form-control"
                              accept="image/*"
                              onChange={(e) => handleVariantImageSelect(e, vIdx)}
                              disabled={uploadingImages[`variant-${vIdx}`]}
                            />
                            {uploadingImages[`variant-${vIdx}`] && <small className="text-primary">Đang tải...</small>}
                            {variant.imageUrl && (
                              <img
                                src={`${API_BASE}/api/auth${variant.imageUrl}`}
                                alt="variant"
                                className="mt-2 rounded"
                                style={{ maxWidth: '180px', objectFit: 'contain' }}
                              />
                            )}
                          </div>

                          <div className="col-12">
                            <div className="d-flex justify-content-between mb-2">
                              <label className="form-label fw-medium">Nguyên liệu của biến thể</label>
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => addIngredientToVariant(vIdx)}
                              >
                                + Thêm nguyên liệu
                              </button>
                            </div>

                            {variant.ingredients.map((ing, iIdx) => (
                              <div key={iIdx} className="input-group mb-2">
                                <select
                                  className="form-select"
                                  value={ing.ingredientId || ''}
                                  onChange={(e) => {
                                    const variants = [...productForm.variants];
                                    variants[vIdx].ingredients[iIdx].ingredientId = e.target.value ? Number(e.target.value) : null;
                                    setProductForm({ ...productForm, variants });
                                  }}
                                >
                                  <option value="">Chọn nguyên liệu...</option>
                                  {ingredients.map(ingOpt => (
                                    <option key={ingOpt.id} value={ingOpt.id}>
                                      {ingOpt.name} ({ingOpt.unit})
                                    </option>
                                  ))}
                                </select>
                                <input
                                  type="number"
                                  className="form-control"
                                  style={{ maxWidth: '140px' }}
                                  placeholder="Số lượng"
                                  min="0.01"
                                  step="0.01"
                                  value={ing.quantity}
                                  onChange={(e) => {
                                    const variants = [...productForm.variants];
                                    variants[vIdx].ingredients[iIdx].quantity = parseFloat(e.target.value) || 0;
                                    setProductForm({ ...productForm, variants });
                                  }}
                                />
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => removeIngredientFromVariant(vIdx, iIdx)}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {productForm.variants.length === 0 && (
                    <div className="alert alert-info text-center py-3">
                      Chưa có biến thể. Sản phẩm sẽ sử dụng nguyên liệu chung bên dưới.
                    </div>
                  )}
                </div>

                {/* Nguyên liệu chung - chỉ hiện khi KHÔNG có biến thể */}
                {productForm.variants.length === 0 && (
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <label className="form-label fw-medium">Nguyên liệu sản phẩm *</label>
                      <button className="btn btn-sm btn-outline-primary" onClick={addIngredientToProduct}>
                        + Thêm nguyên liệu
                      </button>
                    </div>

                    {productForm.ingredients.map((ing, idx) => (
                      <div key={idx} className="input-group mb-2">
                        <select
                          className="form-select"
                          value={ing.ingredientId || ''}
                          onChange={(e) => {
                            const ings = [...productForm.ingredients];
                            ings[idx].ingredientId = e.target.value ? Number(e.target.value) : null;
                            setProductForm({ ...productForm, ingredients: ings });
                          }}
                        >
                          <option value="">Chọn nguyên liệu...</option>
                          {ingredients.map(ingOpt => (
                            <option key={ingOpt.id} value={ingOpt.id}>
                              {ingOpt.name} ({ingOpt.unit})
                            </option>
                          ))}
                        </select>
                        <input
                          type="number"
                          className="form-control"
                          style={{ maxWidth: '140px' }}
                          placeholder="Số lượng"
                          min="0.01"
                          step="0.01"
                          value={ing.quantity}
                          onChange={(e) => {
                            const ings = [...productForm.ingredients];
                            ings[idx].quantity = parseFloat(e.target.value) || 0;
                            setProductForm({ ...productForm, ingredients: ings });
                          }}
                        />
                        {productForm.ingredients.length > 1 && (
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => removeIngredientFromProduct(idx)}
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}

                    {productForm.ingredients.length === 0 && (
                      <div className="alert alert-warning small text-center">
                        Vui lòng thêm ít nhất 1 nguyên liệu cho sản phẩm
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="modal-footer border-0">
                <button
                  className="btn btn-outline-secondary px-5"
                  onClick={() => {
                    setShowProductModal(false);
                    resetProductForm();
                  }}
                  disabled={submitting}
                >
                  Hủy
                </button>
                <button
                  className="btn btn-primary px-5"
                  onClick={handleSubmitProduct}
                  disabled={submitting}
                >
                  {submitting ? 'Đang lưu...' : 'Lưu sản phẩm'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          className={`position-fixed top-0 end-0 m-4 toast align-items-center text-white bg-${toast.type === 'error' ? 'danger' : 'success'} border-0 show`}
          role="alert"
          style={{ zIndex: 9999, minWidth: '320px' }}
        >
          <div className="d-flex">
            <div className="toast-body fw-medium">{toast.message}</div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setToast(null)}></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderItem;