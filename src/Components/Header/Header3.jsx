import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import AuthModal from './AuthModal';
import AuthService from '../../Utils/AuthService';
import "../../assets/UserDropdown.css";

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = AuthService.isLoggedIn();
      const user = AuthService.getCurrentUser();
      setIsLoggedIn(loggedIn);
      setCurrentUser(user);
    };

    checkLoginStatus();
    
    window.addEventListener('storage', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownOpen && !event.target.closest('.user-dropdown-container')) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setUserDropdownOpen(!userDropdownOpen);
    } else {
      setAuthModalOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      setIsLoggedIn(false);
      setCurrentUser(null);
      setUserDropdownOpen(false);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <header className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${variant ? variant : ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${isSticky ? isSticky : ''}`}>
        <div className="cs_main_header header-area-3">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding header-logo-3" to="/">
                  <img src="/assets/img/logo/logo3.svg" alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <button onClick={() => setSearchToggle(!searchToggle)} className="header-icon-btn search-icon-btn">
                    <i className="bi bi-search"></i>
                  </button>
                  <Link to="/cart" className="header-icon-btn cart-icon-btn">
                    <i className="bi bi-cart3"></i>
                    <span className="cart-badge">3</span>
                  </Link>

                  <Link to="/wishlist" className="header-icon-btn cart-icon-btn">
                    <i className="bi bi-heart"></i>
                    <span className="heart-badge">2</span>
                  </Link>
                  
                  {/* User Icon with Dropdown */}
                  <div className="user-dropdown-container">
                    <button onClick={handleUserIconClick} className={`header-icon-btn login-icon-btn ${isLoggedIn ? 'logged-in' : ''}`}>
                      <i className="bi bi-person-circle"></i>
                    </button>
                    
                    {isLoggedIn && userDropdownOpen && (
                      <div className="user-dropdown">
                        <div className="user-dropdown-header">
                          <div className="user-avatar">
                            <i className="bi bi-person-circle"></i>
                          </div>
                          <div className="user-info">
                            <p className="user-name">{currentUser?.fullName || 'User'}</p>
                          </div>
                        </div>
                        <div className="user-dropdown-divider"></div>
                        <Link to="/profile" className="user-dropdown-item" onClick={() => setUserDropdownOpen(false)}>
                          <i className="bi bi-person"></i>
                          <span>Profile</span>
                        </Link>
                        <button className="user-dropdown-item logout-item" onClick={handleLogout}>
                          <i className="bi bi-box-arrow-right"></i>
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
        <div className="search-inner">
          <i onClick={() => setSearchToggle(!searchToggle)} className="bi bi-x-lg search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search..." />
              </div>
            </form>
          </div>
        </div>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}