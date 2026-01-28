import axios from 'axios';
import { BASE_URL, API_ENDPOINTS, STATUS_CODE } from './constants/apiEndpoints';

// Create axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor - thêm token vào header nếu có
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - xử lý response
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // Trả về data trực tiếp
  },
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      // Server trả về error
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request được gửi nhưng không nhận được response
      return Promise.reject({
        code: STATUS_CODE.SERVICE_UNAVAILABLE,
        message: 'Cannot connect to server. Please try again later.',
      });
    } else {
      // Lỗi khác
      return Promise.reject({
        code: STATUS_CODE.INTERNAL_SERVER_ERROR,
        message: 'An error occurred. Please try again.',
      });
    }
  }
);

// Auth Service
const AuthService = {
  /**
   * Login
   * @param {Object} loginData - { username, password }
   * @returns {Promise}
   */
  login: async (loginData) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, loginData);
      
      // Lưu token và user vào localStorage nếu thành công
      if (response.code === STATUS_CODE.SUCCESS && response.data) {
        // Lưu accessToken
        if (response.data.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
        }
        
        // Lưu user info
        const userInfo = {
          userId: response.data.userId,
          fullName: response.data.fullName,
          isLock: response.data.isLock
        };
        localStorage.setItem('user', JSON.stringify(userInfo));
        
        console.log('Login data saved to localStorage:', userInfo);
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Register
   * @param {Object} registerData - { fullName, username, email, phoneNumber, password }
   * @returns {Promise}
   */
  register: async (registerData) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, registerData);
      return response;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  },

  /**
   * Logout
   * @returns {Promise}
   */
  logout: async () => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
      
      // Xóa token và user khỏi localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      
      return response;
    } catch (error) {
      // Vẫn xóa localStorage ngay cả khi API call failed
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      throw error;
    }
  },

  /**
   * Get current user from localStorage
   * @returns {Object|null}
   */
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  /**
   * Get token from localStorage
   * @returns {string|null}
   */
  getToken: () => {
    return localStorage.getItem('accessToken');
  },

  /**
   * Check if user is logged in
   * @returns {boolean}
   */
  isLoggedIn: () => {
    return !!localStorage.getItem('accessToken');
  },
};

export default AuthService;
export { apiClient };