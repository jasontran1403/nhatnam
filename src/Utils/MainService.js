import axios from 'axios';
import { BASE_URL, API_ENDPOINTS, STATUS_CODE, isSuccess } from '../Utils/constants/apiEndpoints';

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject({
        code: STATUS_CODE.SERVICE_UNAVAILABLE,
        message: 'Cannot connect to server.',
      });
    } else {
      return Promise.reject({
        code: STATUS_CODE.INTERNAL_SERVER_ERROR,
        message: 'An error occurred.',
      });
    }
  }
);

// AUTH SERVICE
const AuthService = {
  login: async (loginData) => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, loginData);
    if (response.code === STATUS_CODE.SUCCESS && response.data) {
      if (response.data.accessToken) {
        localStorage.setItem('accessToken', response.data.accessToken);
      }
      const userInfo = {
        userId: response.data.userId,
        fullName: response.data.fullName,
        isLock: response.data.isLock,
        role: response.data.role,
      };
      localStorage.setItem('user', JSON.stringify(userInfo));
    }
    return response;
  },

  register: async (registerData) => apiClient.post(API_ENDPOINTS.AUTH.REGISTER, registerData),

  logout: async () => {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  getToken: () => localStorage.getItem('accessToken'),
  isLoggedIn: () => !!localStorage.getItem('accessToken'),
  isAdmin: () => {
    const user = AuthService.getCurrentUser();
    return user && user.role === 'ADMIN';
  },
};

const ProductService = {
  // Danh sách sản phẩm (đã có)
  getProducts: async (params = {}) => {
    const queryParams = new URLSearchParams({
      page: params.page || 0,
      size: params.size || 12,
      sortBy: params.sortBy || 'name',
      sortDir: params.sortDir || 'asc',
      ...(params.category && { category: params.category }),
    });
    return apiClient.get(`${API_ENDPOINTS.SELLER.GET_PRODUCTS}?${queryParams}`);
  },

  // === THÊM MỚI: Lấy chi tiết sản phẩm ===
  getProductDetail: async (id) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.SELLER.GET_PRODUCT_DETAIL(id));
      return response; // { code, data: ProductResponse, message }
    } catch (error) {
      console.error("Lỗi lấy chi tiết sản phẩm:", error);
      throw error.response?.data || { code: STATUS_CODE.INTERNAL_SERVER_ERROR, message: "Lỗi server" };
    }
  },

  // === THÊM MỚI: Lấy danh sách variants ===
  getProductVariants: async (id) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.SELLER.GET_PRODUCT_VARIANTS(id));
      return response; // { code, data: List<VariantResponse>, message }
    } catch (error) {
      console.error("Lỗi lấy variants:", error);
      throw error.response?.data || { code: STATUS_CODE.INTERNAL_SERVER_ERROR, message: "Lỗi server" };
    }
  },

  // === THÊM MỚI: Lấy prices (có thể filter theo variantId) ===
  getProductPrices: async (id, variantId = null) => {
    try {
      let url = API_ENDPOINTS.SELLER.GET_PRODUCT_PRICES(id);
      if (variantId) {
        url += `?variantId=${variantId}`;
      }
      const response = await apiClient.get(url);
      return response; // { code, data: List<PriceResponse>, message }
    } catch (error) {
      console.error("Lỗi lấy prices:", error);
      throw error.response?.data || { code: STATUS_CODE.INTERNAL_SERVER_ERROR, message: "Lỗi server" };
    }
  },
};

// ORDER SERVICE
const OrderService = {
  createOrder: async (orderData) => apiClient.post(API_ENDPOINTS.SELLER.CREATE_ORDER, orderData),
  getOrder: async (id) => apiClient.get(API_ENDPOINTS.SELLER.GET_ORDER(id)),
  getOrderByCode: async (code) => apiClient.get(API_ENDPOINTS.SELLER.GET_ORDER_BY_CODE(code)),
  getMyOrders: async () => apiClient.get(API_ENDPOINTS.SELLER.GET_MY_ORDERS),
  cancelOrder: async (id) => apiClient.post(API_ENDPOINTS.SELLER.CANCEL_ORDER(id)),
  
  downloadInvoice: async (id) => {
    const response = await axios({
      url: `${BASE_URL}${API_ENDPOINTS.SELLER.GET_INVOICE(id)}`,
      method: 'GET',
      responseType: 'blob',
      headers: { Authorization: `Bearer ${AuthService.getToken()}` },
    });
    
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    
    return { success: true };
  },
};

// ADMIN SERVICE
const AdminService = {
  createProduct: async (productData) => apiClient.post(API_ENDPOINTS.ADMIN.CREATE_PRODUCT, productData),
  updateProduct: async (id, productData) => apiClient.put(API_ENDPOINTS.ADMIN.UPDATE_PRODUCT(id), productData),
  deleteProduct: async (id) => apiClient.delete(API_ENDPOINTS.ADMIN.DELETE_PRODUCT(id)),
  addVariant: async (variantData) => apiClient.post(API_ENDPOINTS.ADMIN.ADD_VARIANT, variantData),
  deleteVariant: async (id) => apiClient.delete(API_ENDPOINTS.ADMIN.DELETE_VARIANT(id)),
  addPrice: async (priceData) => apiClient.post(API_ENDPOINTS.ADMIN.ADD_PRICE, priceData),
  deletePrice: async (id) => apiClient.delete(API_ENDPOINTS.ADMIN.DELETE_PRICE(id)),
};

export default AuthService;
export { apiClient, ProductService, OrderService, AdminService, STATUS_CODE, isSuccess };