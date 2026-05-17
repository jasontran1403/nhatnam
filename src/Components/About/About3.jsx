// src/components/About/About3.jsx
// Bento grid layout — ảnh lấy từ API /api/auth/landingpage/events (random 9)
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const API_BASE = "https://api.nhatnamfinefoods.com";

function imgSrc(path) {
  if (!path) return "/assets/img/about/aboutThumb1_1.png";
  return path.startsWith("http") ? path : `${API_BASE}/api/auth${path}`;
}

// Fallback images khi chưa có event nào trong DB
const FALLBACK = Array.from({ length: 9 }, (_, i) => ({
  id: `fallback-${i}`,
  eventImgPath: `/assets/img/about/bentoFallback_${i + 1}.jpg`,
  eventLabel: "",
}));

export default function About3() {
  const { t } = useTranslation("home");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/auth/landingpage/events`)
      .then((r) => r.json())
      .then((j) => {
        const list = j?.data || [];
        setEvents(list.length >= 1 ? list : FALLBACK);
      })
      .catch(() => setEvents(FALLBACK));
  }, []);

  // Đảm bảo đủ 9 ảnh để grid không bị trống
  const items = events.length >= 9
    ? events.slice(0, 9)
    : [...events, ...FALLBACK.slice(events.length, 9)];

  const featuresRaw = t("about.features", { returnObjects: true });
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];

  return (
    <div className="about-section fix">
      <div className="about-wrapper section-padding style3">
        {/* Shapes */}
        <div className="shape1">
          <img className="float-bob-y" src="/assets/img/shape/aboutShape3_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img className="float-bob-x" src="/assets/img/shape/aboutShape3_2.png" alt="shape" />
        </div>
        <div className="orange-shape">
          <img src="/assets/img/about/orange-shape.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row gx-60 gy-5 align-items-center">

            {/* ── Bento Grid ── */}
            <div className="col-xl-6">
              <div className="bento-about-grid">
                {items.map((img, i) => (
                  <div
                    key={img.id}
                    className={`bento-about-card${i === 0 ? " large" : ""}`}
                  >
                    <img src={imgSrc(img.eventImgPath)} alt={img.eventLabel || ""} />
                    {img.eventLabel && (
                      <div className="bento-about-overlay">{img.eventLabel}</div>
                    )}
                  </div>
                ))}
              </div>

              <style>{`
                .bento-about-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  grid-auto-rows: 160px;
                  gap: 12px;
                }
                .bento-about-card {
                  overflow: hidden;
                  border-radius: 16px;
                  position: relative;
                  box-shadow: 0 6px 24px rgba(0,0,0,.10);
                }
                .bento-about-card.large {
                  grid-column: span 2;
                  grid-row: span 2;
                }
                .bento-about-card img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                  transition: transform .5s ease;
                }
                .bento-about-card:hover img {
                  transform: scale(1.06);
                }
                .bento-about-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(to top, rgba(0,0,0,.65), transparent);
                  display: flex;
                  align-items: flex-end;
                  padding: 14px;
                  color: #fff;
                  font-size: 13px;
                  font-weight: 600;
                  opacity: 0;
                  transition: opacity .35s;
                }
                .bento-about-card:hover .bento-about-overlay {
                  opacity: 1;
                }
                @media (max-width: 768px) {
                  .bento-about-grid {
                    grid-template-columns: repeat(2, 1fr);
                    grid-auto-rows: 130px;
                    gap: 8px;
                  }
                  .bento-about-card.large {
                    grid-column: span 2;
                    grid-row: span 2;
                  }
                }
              `}</style>
            </div>

            {/* ── About content (giữ nguyên) ── */}
            <div className="col-xl-6">
              <div className="about-content">
                <div className="title-area">
                  <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                    {" "}{t("about.subtitle")}{" "}
                    <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                  </div>
                  <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                    {t("about.title")}
                  </h2>
                  <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">
                    {t("about.description")}
                  </div>
                </div>

                <div className="fancy-box-wrapper">
                  {features.map((f, i) => (
                    <div key={i} className="fancy-box">
                      <div className="item">
                        <img src={`/assets/img/icon/aboutIcon2_${i + 1}.svg`} alt="icon" />
                      </div>
                      <div className="item">
                        <h6>{f.title}</h6>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="theme-btn style4">
                  {t("about.button")} <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}