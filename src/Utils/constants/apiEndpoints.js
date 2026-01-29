// Base URL
export const BASE_URL = 'https://ghoul-helpful-salmon.ngrok-free.app';

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH_TOKEN: '/api/auth/refresh-token',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE_PROFILE: '/api/user/update',
  },
  
  // Seller endpoints (public - for customers)
  SELLER: {
    // Products
    GET_PRODUCTS: '/api/seller/products', // GET with pagination: ?page=0&size=10&sortBy=name&sortDir=asc&category=hotdog
    GET_PRODUCT_DETAIL: (id) => `/api/seller/products/${id}`, // GET
    GET_PRODUCT_VARIANTS: (id) => `/api/seller/products/${id}/variants`, // GET
    GET_PRODUCT_PRICES: (id) => `/api/seller/products/${id}/prices`, // GET with optional: ?variantId=1
    
    // Orders
    CREATE_ORDER: '/api/seller/orders', // POST
    GET_ORDER: (id) => `/api/seller/orders/${id}`, // GET
    GET_ORDER_BY_CODE: (code) => `/api/seller/orders/code/${code}`, // GET
    GET_MY_ORDERS: '/api/seller/orders/my-orders', // GET
    CANCEL_ORDER: (id) => `/api/seller/orders/${id}/cancel`, // POST
    GET_INVOICE: (id) => `/api/seller/orders/${id}/invoice`, // GET - download PDF

    VALIDATE_CART_ITEMS: '/api/seller/cart/validate-items',
  },

  // Admin endpoints
  ADMIN: {
    // Products
    CREATE_PRODUCT: '/api/admin/products', // POST
    UPDATE_PRODUCT: (id) => `/api/admin/products/${id}`, // PUT
    DELETE_PRODUCT: (id) => `/api/admin/products/${id}`, // DELETE
    GET_PRODUCT: (id) => `/api/admin/products/${id}`, // GET
    
    // Variants
    ADD_VARIANT: '/api/admin/variants', // POST
    DELETE_VARIANT: (id) => `/api/admin/variants/${id}`, // DELETE
    
    // Prices
    ADD_PRICE: '/api/admin/prices', // POST
    DELETE_PRICE: (id) => `/api/admin/prices/${id}`, // DELETE
  },

  PRODUCT: {
    LIST: '/api/products',
    DETAIL: '/api/products',
    CREATE: '/api/products/create',
    UPDATE: '/api/products/update',
    DELETE: '/api/products/delete',
  },
  ORDER: {
    CREATE: '/api/orders/create',
    LIST: '/api/orders',
    DETAIL: '/api/orders',
    CANCEL: '/api/orders/cancel',
  },
  CART: {
    ADD: '/api/cart/add',
    LIST: '/api/cart',
    UPDATE: '/api/cart/update',
    REMOVE: '/api/cart/remove',
  },
};

// Status Codes
export const STATUS_CODE = {
  SUCCESS: 900,
  
  // Client Errors (901-920)
  UNAUTHORIZED: 901,
  FORBIDDEN: 902,
  BAD_REQUEST: 903,
  NOT_FOUND: 904,
  CONFLICT: 905,
  VALIDATION_ERROR: 906,
  TOO_MANY_REQUESTS: 907,
  
  // Server Errors (921-940)
  INTERNAL_SERVER_ERROR: 921,
  SERVICE_UNAVAILABLE: 922,
  DATABASE_ERROR: 923,
  
  // Business Logic Errors (941-999)
  WRONG_PASSWORD: 941,
  ACCOUNT_LOCKED: 942,
  EMAIL_ALREADY_EXISTS: 943,
  PHONE_ALREADY_EXISTS: 944,
  INSUFFICIENT_BALANCE: 945,
  TRANSACTION_FAILED: 946,
  OUT_OF_STOCK: 947,
  INVALID_OTP: 948,
  OTP_EXPIRED: 949,
};

// Helper function to check if response is successful
export const isSuccess = (code) => code === STATUS_CODE.SUCCESS;