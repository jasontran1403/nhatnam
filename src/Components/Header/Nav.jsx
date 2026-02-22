import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2';

export default function Nav({
  setMobileToggle,
  mobileToggle,
  cartCount,
  wishlistCount,
  toggleLang,
  currentLang,
  setSearchToggle,
  isLoggedIn,
  currentUser,
  userDropdownOpen,
  setUserDropdownOpen,
  handleUserIconClick,
  handleLogout,
}) {
  const { t } = useTranslation(["common"]);

  const handleMobileUserClick = (e) => {
    e.stopPropagation();
    handleUserIconClick();
  };

  const handleMobileLogout = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const result = await Swal.fire({
    title: 'Đăng xuất?',
    text: "Bạn có chắc chắn muốn đăng xuất khỏi tài khoản không?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Có, đăng xuất',
    cancelButtonText: 'Hủy'
  });

  if (result.isConfirmed) {
    handleLogout();
    setMobileToggle(false);
  }
};

  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/" onClick={() => setMobileToggle(false)}>
          {t("header.home")}
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/management" onClick={() => setMobileToggle(false)}>
          {t("header.management")}
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/warehouse" onClick={() => setMobileToggle(false)}>
          {t("header.warehouse")}
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/orders" onClick={() => setMobileToggle(false)}>
          {t("header.orders")}
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/menu" onClick={() => setMobileToggle(false)}>
          {t("header.menu")}
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="#">{t("header.pages")}</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                {t("pages.about")}
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={() => setMobileToggle(false)}>
                {t("pages.testimonial")}
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
                {t("pages.faq")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
                {t("pages.contact")}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {mobileToggle && (
        <>
          <li className="menu-item">
            <Link
              to="#"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => {
                setSearchToggle(true);
                setMobileToggle(false);
              }}
            >
              Tìm kiếm
            </Link>
          </li>

          <li className="menu-item">
            <Link
              to="/cart"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setMobileToggle(false)}
            >
              Giỏ hàng
              {cartCount > 0 && (
                <span className="badge bg-danger ms-2">{cartCount}</span>
              )}
            </Link>
          </li>

          <li className="menu-item">
            <Link
              to="/wishlist"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setMobileToggle(false)}
            >
              Yêu thích
              {wishlistCount > 0 && (
                <span className="badge bg-danger ms-2">{wishlistCount}</span>
              )}
            </Link>
          </li>

          <li className="menu-item">
            <Link
              to="#"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => {
                toggleLang();
                setMobileToggle(false);
              }}
            >
              Đổi ngôn ngữ ({currentLang === "vi" ? "English" : "Tiếng Việt"})
            </Link>
          </li>

          <li className="menu-item">
            <Link
              to="#"
              className={`d-flex align-items-center ${isLoggedIn ? "text-info" : "text-white"}`}
              onClick={handleMobileUserClick}
            >
              {isLoggedIn ? (
                <span>
                  <i className="bi bi-person me-2"></i> {currentUser?.fullName || "Tài khoản"}
                </span>
              ) : (
                "Đăng nhập / Đăng ký"
              )}
            </Link>
          </li>

          {isLoggedIn && (
            <li className="menu-item">
              <Link
                to="#"
                className="text-danger d-flex align-items-center"
                onClick={handleMobileLogout}
              >
                <i className="bi bi-box-arrow-right me-2"></i> Đăng xuất
              </Link>
            </li>
          )}
        </>
      )}
    </ul>
  );
}