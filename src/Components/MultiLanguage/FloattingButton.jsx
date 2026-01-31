import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n/index.js";

function FloatingLangButton() {
  const loc = useLocation();
  const nav = useNavigate();

  function toggleLang() {
    const next = (localStorage.getItem("lng") || "vi") === "vi" ? "en" : "vi";

    // nếu bạn đang sync language theo query param
    const params = new URLSearchParams(loc.search);
    params.set("lang", next);

    nav(`${loc.pathname}?${params.toString()}`, { replace: true });
  }

  return (
    <button
      onClick={toggleLang}
      className="floating-lang-btn"
      aria-label="Toggle language"
      title="Language"
    >
      <span className="lang-main">{i18n.language === "vi" ? "EN" : "VI"}</span>
    </button>
  );
}

export default FloatingLangButton;
