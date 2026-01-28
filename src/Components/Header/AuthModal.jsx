import { useState } from 'react';
import AuthService from '../../Utils/AuthService';
import { STATUS_CODE } from '../../Utils/constants/apiEndpoints';
import Toast from '../../Components/Toast/Toast';
import '../../assets/AuthModal.css';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState(null);
  
  // Password visibility states
  const [showPassword, setShowPassword] = useState({
    login: false,
    register: false,
    confirm: false
  });
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  // Format phone number
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    let numbers = value.replace(/\D/g, '');
    
    // If starts with 0, replace with +84
    if (numbers.startsWith('0')) {
      numbers = '84' + numbers.substring(1);
    }
    
    // If doesn't start with 84, add it
    if (!numbers.startsWith('84') && numbers.length > 0) {
      numbers = '84' + numbers;
    }
    
    // Format: +84 xxx xxx xxx
    let formatted = '';
    if (numbers.length > 0) {
      formatted = '+84';
      const remaining = numbers.substring(2);
      
      if (remaining.length > 0) {
        formatted += ' ' + remaining.substring(0, 3);
      }
      if (remaining.length > 3) {
        formatted += ' ' + remaining.substring(3, 6);
      }
      if (remaining.length > 6) {
        formatted += ' ' + remaining.substring(6, 9);
      }
    }
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setRegisterData({ ...registerData, phoneNumber: formatted });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await AuthService.login(loginData);

      if (result.code === STATUS_CODE.SUCCESS) {
        setToast({ message: result.message || 'Login successfully', type: 'success' });
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 1500);
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate password length
    if (registerData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    // Validate password match
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Remove spaces from phone number before sending
      const phoneNumberClean = registerData.phoneNumber.replace(/\s/g, '');
      
      const result = await AuthService.register({
        fullName: registerData.fullName,
        username: registerData.username,
        email: registerData.email,
        phoneNumber: phoneNumberClean,
        password: registerData.password,
      });

      if (result.code === STATUS_CODE.SUCCESS) {
        setToast({ message: result.message || 'Register successfully', type: 'success' });
        
        // Clear form
        setRegisterData({
          fullName: '',
          username: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: ''
        });

        // Switch to login after 1.5s
        setTimeout(() => {
          setIsLogin(true);
        }, 1500);
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className={`auth-modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
        <div className={`auth-modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
          <button className="auth-modal-close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>

          <div className="auth-modal-content">
            <div className="auth-tabs">
              <button className={`auth-tab ${isLogin ? 'active' : ''}`} onClick={() => { setIsLogin(true); setError(''); }}>
                Login
              </button>
              <button className={`auth-tab ${!isLogin ? 'active' : ''}`} onClick={() => { setIsLogin(false); setError(''); }}>
                Register
              </button>
            </div>

            {error && (
              <div className="auth-error">
                <i className="bi bi-exclamation-circle"></i> {error}
              </div>
            )}

            {isLogin ? (
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                <div className="auth-form-group">
                  <label>Username</label>
                  <div className="input-with-icon">
                    <i className="bi bi-person"></i>
                    <input 
                      type="text" 
                      placeholder="Enter your username" 
                      value={loginData.username} 
                      onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} 
                      required 
                    />
                  </div>
                </div>

                <div className="auth-form-group">
                  <label>Password</label>
                  <div className="input-with-icon password-input">
                    <i className="bi bi-lock"></i>
                    <input 
                      type={showPassword.login ? "text" : "password"}
                      placeholder="Enter your password" 
                      value={loginData.password} 
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} 
                      required 
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword({ ...showPassword, login: !showPassword.login })}
                    >
                      <i className={showPassword.login ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>

                <div className="auth-form-footer">
                  <label className="remember-me">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="auth-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner"></span> Logging in...
                    </>
                  ) : (
                    <>
                      Login <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleRegisterSubmit}>
                <div className="auth-form-group">
                  <label>Full Name</label>
                  <div className="input-with-icon">
                    <i className="bi bi-person"></i>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={registerData.fullName} 
                      onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })} 
                      required 
                    />
                  </div>
                </div>

                <div className="auth-form-group">
                  <label>Username</label>
                  <div className="input-with-icon">
                    <i className="bi bi-person-badge"></i>
                    <input 
                      type="text" 
                      placeholder="Choose a username" 
                      value={registerData.username} 
                      onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} 
                      required 
                    />
                  </div>
                </div>

                <div className="auth-form-group">
                  <label>Email</label>
                  <div className="input-with-icon">
                    <i className="bi bi-envelope"></i>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={registerData.email} 
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} 
                      required 
                    />
                  </div>
                </div>

                <div className="auth-form-group">
                  <label>Phone Number</label>
                  <div className="input-with-icon">
                    <i className="bi bi-telephone"></i>
                    <input 
                      type="tel" 
                      placeholder="+84 938 121 001" 
                      value={registerData.phoneNumber} 
                      onChange={handlePhoneChange}
                      maxLength={16}
                      required 
                    />
                  </div>
                  <small className="input-hint">Start with 0 or +84</small>
                </div>

                <div className="auth-form-group">
                  <label>Password</label>
                  <div className="input-with-icon password-input">
                    <i className="bi bi-lock"></i>
                    <input 
                      type={showPassword.register ? "text" : "password"}
                      placeholder="Create a password (min 6 characters)" 
                      value={registerData.password} 
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} 
                      minLength={6}
                      required 
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword({ ...showPassword, register: !showPassword.register })}
                    >
                      <i className={showPassword.register ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>

                <div className="auth-form-group">
                  <label>Confirm Password</label>
                  <div className="input-with-icon password-input">
                    <i className="bi bi-lock-fill"></i>
                    <input 
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="Confirm your password" 
                      value={registerData.confirmPassword} 
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })} 
                      minLength={6}
                      required 
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                    >
                      <i className={showPassword.confirm ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>

                <button type="submit" className="auth-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner"></span> Creating account...
                    </>
                  ) : (
                    <>
                      Create Account <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}