import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../../i18n/index.js"


const SUPPORTED = ["vi", "en"];

export default function LanguageSync() {
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const qLang = params.get("lang"); // ?lang=en

    let next = qLang || localStorage.getItem("lng") || i18n.language || "vi";
    if (!SUPPORTED.includes(next)) next = "vi";

    if (i18n.language !== next) i18n.changeLanguage(next);
    localStorage.setItem("lng", next);
  }, [search]);

  return null;
}
