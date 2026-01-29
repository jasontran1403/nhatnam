import { createContext, useContext, useState } from 'react';
import Toast from './Toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export default function ToastContainer({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 1800) => {
    console.log(`[Toast] Show: "${message}" (${type})`);
    const id = Date.now();
    setToasts(prev => [{ id, message, type, duration }, ...prev]); // ← Thêm mới vào đầu mảng → mới nhất ở trên
  };

  const removeToast = id => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          top: '20px', // Đặt ở trên cùng để dễ thấy (sau khi test OK thì đổi lại bottom: '20px')
          right: '20px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column', // ← Mới nhất ở trên, cũ đẩy xuống
          gap: '12px',
          maxHeight: '80vh',
          overflowY: 'auto',
          pointerEvents: 'none',
        }}
      >
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}