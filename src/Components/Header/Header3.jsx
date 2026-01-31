import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FloatingLangButton from "../MultiLanguage/FloattingButton.jsx";
import Nav from "./Nav";
import AuthModal from "./AuthModal";
import AuthService from "../../Utils/AuthService";
import "../../assets/UserDropdown.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/index.js";

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [langToast, setLangToast] = useState(null); // { text: string } | null

  // State cho badge
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  const loc = useLocation();
  const nav = useNavigate();

  function toggleLang() {
    const next = (localStorage.getItem("lng") || "vi") === "vi" ? "en" : "vi";

    localStorage.setItem("lng", next);

    // đổi i18n ngay để UI phản hồi lập tức
    i18n.changeLanguage(next);

    // update query param nếu bạn cần
    const params = new URLSearchParams(loc.search);
    params.set("lang", next);
    nav(`${loc.pathname}?${params.toString()}`, { replace: true });

    showLangToast(next);
  }

  function showLangToast(next) {
    const text =
      next === "vi" ? "Đã chuyển sang Tiếng Việt 🇻🇳" : "Switched to English EN";
    setLangToast({ text });
    window.clearTimeout(window.__langToastTimer);
    window.__langToastTimer = window.setTimeout(() => setLangToast(null), 1200);
  }

  // Kiểm tra login
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = AuthService.isLoggedIn();
      const user = AuthService.getCurrentUser();
      setIsLoggedIn(loggedIn);
      setCurrentUser(user);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  // Cập nhật số lượng cart & wishlist
  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    updateCounts();

    // Lắng nghe thay đổi từ tab khác
    const handleStorage = (e) => {
      if (e.key === "cart" || e.key === "wishlist") {
        updateCounts();
      }
    };

    window.addEventListener("storage", handleStorage);

    // Poll mỗi 1s để bắt thay đổi trong cùng tab
    const interval = setInterval(updateCounts, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos || currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky");
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Click ngoài đóng dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownOpen &&
        !event.target.closest(".user-dropdown-container")
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [userDropdownOpen]);

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
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_main_header header-area-3">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding header-logo-3" to="/">
                  <img src="/assets/img/logo/logo.png" alt="Logo" />
                </Link>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>

              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  {/* Search */}
                  <button
                    onClick={() => setSearchToggle(!searchToggle)}
                    className="header-icon-btn search-icon-btn"
                  >
                    <i className="bi bi-search"></i>
                  </button>

                  {/* Cart */}
                  <Link
                    to="/cart"
                    className="header-icon-btn cart-icon-btn position-relative"
                  >
                    <i className="bi bi-cart3"></i>
                    {cartCount > 0 && (
                      <span
                        className="cart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center"
                        style={{
                          fontSize: "10px",
                          minWidth: "24px",
                          height: "24px",
                          padding: "0 6px",
                          lineHeight: "1",
                        }}
                      >
                        {cartCount}
                      </span>
                    )}
                  </Link>

                  {/* Wishlist */}
                  <Link
                    to="/wishlist"
                    className="header-icon-btn cart-icon-btn position-relative"
                  >
                    <i className="bi bi-heart"></i>
                    {wishlistCount > 0 && (
                      <span
                        className="heart-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center"
                        style={{
                          fontSize: "10px",
                          minWidth: "24px",
                          height: "24px",
                          padding: "0 6px",
                          lineHeight: "1",
                        }}
                      >
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                  <button onClick={toggleLang} className="header-icon-btn">
                    {i18n.language === "vi" ? "EN" : "VI"}
                  </button>

                  {/* User Icon with Dropdown */}
                  <div className="user-dropdown-container position-relative">
                    <button
                      onClick={handleUserIconClick}
                      className={`header-icon-btn login-icon-btn ${isLoggedIn ? "logged-in" : ""}`}
                    >
                      <i className="bi bi-person-circle"></i>
                    </button>

                    {isLoggedIn && userDropdownOpen && (
                      <div
                        className="user-dropdown position-absolute end-0 mt-2 bg-white shadow rounded p-3"
                        style={{ minWidth: "200px", zIndex: 1000 }}
                      >
                        <div className="user-dropdown-header d-flex align-items-center mb-3">
                          <div className="user-avatar me-3">
                            <i className="bi bi-person-circle fs-3"></i>
                          </div>
                          <div className="user-info">
                            <p className="user-name mb-0 fw-bold">
                              {currentUser?.fullName || "User"}
                            </p>
                          </div>
                        </div>
                        <div className="user-dropdown-divider border-top my-2"></div>
                        <Link
                          to="/profile"
                          className="user-dropdown-item d-flex align-items-center py-2 text-decoration-none text-dark"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          <i className="bi bi-person me-3"></i>
                          <span>Profile</span>
                        </Link>
                        <button
                          className="user-dropdown-item logout-item d-flex align-items-center py-2 text-danger border-0 bg-transparent w-100 text-start"
                          onClick={handleLogout}
                        >
                          <i className="bi bi-box-arrow-right me-3"></i>
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

      {/* Search Wrap */}
      <div className={`search-wrap ${searchToggle ? "active" : ""}`}>
        <div className="search-inner">
          <i
            onClick={() => setSearchToggle(!searchToggle)}
            className="bi bi-x-lg search-close"
            id="search-close"
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Seach..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
      {/* Floating button for mobile */}
      <FloatingLangButton />
      {langToast && <div className="lang-toast">{langToast.text}</div>}
    </div>
  );
}
