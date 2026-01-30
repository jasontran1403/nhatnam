import { useState, useEffect } from "react";
import Toast from "../Components/Toast/Toast";

const getAccessToken = () => localStorage.getItem("accessToken");

const isTokenValid = (token) => {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return Date.now() < payload.exp * 1000;
  } catch {
    return false;
  }
};

const ProtectedContent = ({ children, message = "Bạn cần đăng nhập để truy cập nội dung này" }) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const token = getAccessToken();
    const valid = isTokenValid(token);

    setIsAuthenticated(valid);
    setShowToast(!valid);
    setIsChecking(false);

    if (token && !valid) {
      localStorage.removeItem("accessToken");
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        {showToast && (
          <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 1050 }}>
            <Toast message={message} type="warning" duration={4500} onClose={() => setShowToast(false)} />
          </div>
        )}
      </>
    );
  }

  return children;
};

export default ProtectedContent;