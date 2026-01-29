import { useEffect, useRef } from 'react';

export default function Toast({ message, type = 'success', duration = 1800, onClose }) {
  const toastRef = useRef(null);

  useEffect(() => {
    console.log(`Toast mounted: "${message}" (${type})`);

    // Animation fade-in
    if (toastRef.current) {
      toastRef.current.style.opacity = '0';
      toastRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        toastRef.current.style.transition = 'all 0.4s ease';
        toastRef.current.style.opacity = '1';
        toastRef.current.style.transform = 'translateY(0)';
      }, 10);
    }

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success' ? '#28a745' :
                  type === 'error'   ? '#dc3545' :
                  '#17a2b8';

  const borderColor = type === 'success' ? '#1e7e34' :
                      type === 'error'   ? '#bd2130' :
                      '#117a8b';

  return (
    <div
      ref={toastRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        minWidth: '320px',
        maxWidth: '420px',
        padding: '14px 18px',
        borderRadius: '10px',
        backgroundColor: bgColor,
        color: 'white',
        boxShadow: '0 6px 16px rgba(0,0,0,0.18)',
        border: `1px solid ${borderColor}`,
        marginBottom: '12px',
        opacity: 0, // Bắt đầu ẩn để fade-in
        transform: 'translateY(20px)',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ fontSize: '1.6rem', marginRight: '14px', flexShrink: 0 }}>
        {type === 'success' && <i className="bi bi-check-circle-fill"></i>}
        {type === 'error' && <i className="bi bi-x-circle-fill"></i>}
        {type === 'info' && <i className="bi bi-info-circle-fill"></i>}
      </div>
      <span style={{ flex: 1, fontSize: '1rem', lineHeight: '1.4' }}>
        {message}
      </span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: '0 8px',
          opacity: 0.8,
        }}
      >
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}