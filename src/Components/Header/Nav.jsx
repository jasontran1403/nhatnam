import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Nav({ setMobileToggle }) {
  const { t } = useTranslation(["common"]);

  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">{t("header.home")}</Link>
      </li>


      <li className="menu-item">
        <Link to="/management" onClick={() => setMobileToggle(false)}>
            {t("header.management")}
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
            {/* <li>
              <Link to="/gallery" onClick={() => setMobileToggle(false)}>
                {t("pages.gallery")}
              </Link>
            </li> */}
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
    </ul>
  );
}
