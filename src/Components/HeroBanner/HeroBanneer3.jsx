import Slider from "react-slick";
import parse from "html-react-parser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const heroContent = [
  { img: "/assets/img/shape/766 × 478.png" },
  { img: "/assets/img/shape/766 × 478_1.png" },
  { img: "/assets/img/shape/766 × 478_3.png" },
];

// Slide index indicator dots
function Dots({ total, active, onDot }) {
  return (
    <div className="hb3-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} className={`hb3-dot${i === active ? " active" : ""}`} onClick={() => onDot(i)} aria-label={`Slide ${i + 1}`} />
      ))}
    </div>
  );
}

const HeroBanneer3 = () => {
  const { t } = useTranslation("home");
  const heroText = t("hero", { returnObjects: true });
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "cubic-bezier(.77,0,.18,1)",
    beforeChange: (_, next) => setActiveSlide(next),
  };

  const next     = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  const goTo     = (i) => sliderRef.current?.slickGoTo(i);

  return (
    <section className="hb3-section fix">
      <style>{`
        /* ── Reset & base ── */
        .hb3-section {
          position: relative;
          overflow: hidden;
          background: #080A0C;
        }

        /* ── Slide ── */
        .hb3-slide {
          position: relative;
          min-height: 100vh;
          display: flex !important;
          align-items: center;
        }

        /* Full bleed bg image with gradient overlay */
        .hb3-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hb3-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .hb3-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(105deg, rgba(8,10,12,.92) 0%, rgba(8,10,12,.65) 55%, rgba(8,10,12,.20) 100%),
            linear-gradient(to top, rgba(8,10,12,.8) 0%, transparent 40%);
        }

        /* Noise texture layer */
        .hb3-noise {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* Ambient glow */
        .hb3-glow {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .hb3-glow::before {
          content: '';
          position: absolute;
          top: 10%; left: 5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(201,100,30,.14) 0%, transparent 65%);
          filter: blur(30px);
        }

        /* Content */
        .hb3-content {
          position: relative;
          z-index: 2;
          padding: 120px 0 100px;
        }

        /* Eyebrow */
        .hb3-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(201,100,30,.12);
          border: 1px solid rgba(201,100,30,.28);
          border-radius: 99px;
          padding: 6px 18px 6px 10px;
          margin-bottom: 28px;
          animation: hb3-fade-up .7s .2s both;
        }
        .hb3-eyebrow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #E8640E;
          box-shadow: 0 0 10px rgba(232,100,14,.9);
          flex-shrink: 0;
          animation: hb3-blink 2s ease infinite;
        }
        .hb3-eyebrow span {
          font-size: 11px;
          font-weight: 700;
          color: #E8A460;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        @keyframes hb3-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: .25; }
        }

        /* Title */
        .hb3-title {
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 900;
          line-height: 1.04;
          color: #fff;
          letter-spacing: -2px;
          margin: 0 0 24px;
          font-family: 'Georgia', serif;
          animation: hb3-fade-up .75s .35s both;
        }
        .hb3-title span, .hb3-title strong {
          color: #E8640E;
          font-style: italic;
        }

        /* Description */
        .hb3-desc {
          font-size: 17px;
          line-height: 1.75;
          color: rgba(255,255,255,.55);
          max-width: 520px;
          margin-bottom: 44px;
          animation: hb3-fade-up .75s .5s both;
        }

        /* CTA row */
        .hb3-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          animation: hb3-fade-up .75s .65s both;
        }

        .hb3-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #E8640E 0%, #C9400A 100%);
          color: #fff !important;
          font-size: 14px;
          font-weight: 700;
          padding: 15px 30px;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: .3px;
          box-shadow: 0 10px 30px rgba(232,100,14,.38);
          transition: all .3s;
          position: relative;
          overflow: hidden;
        }
        .hb3-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.18), transparent);
          opacity: 0;
          transition: opacity .3s;
        }
        .hb3-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 44px rgba(232,100,14,.5);
          color: #fff !important;
        }
        .hb3-btn-primary:hover::before { opacity: 1; }
        .hb3-btn-arrow {
          width: 28px; height: 28px;
          background: rgba(255,255,255,.2);
          border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          transition: transform .3s;
          font-size: 14px;
        }
        .hb3-btn-primary:hover .hb3-btn-arrow { transform: translateX(4px); }

        .hb3-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,.7);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 15px 24px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 12px;
          transition: all .3s;
        }
        .hb3-btn-ghost:hover {
          border-color: rgba(255,255,255,.35);
          color: #fff;
          background: rgba(255,255,255,.06);
        }

        /* Stats strip */
        .hb3-stats {
          display: flex;
          gap: 36px;
          margin-top: 56px;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,.08);
          animation: hb3-fade-up .75s .8s both;
        }
        .hb3-stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #fff;
          font-family: 'Georgia', serif;
          line-height: 1;
          letter-spacing: -1px;
        }
        .hb3-stat-num sup {
          font-size: 16px;
          color: #E8640E;
          vertical-align: super;
        }
        .hb3-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,.4);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          font-weight: 500;
        }

        /* Product image panel */
        .hb3-img-panel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: hb3-img-in .9s .3s both;
        }
        @keyframes hb3-img-in {
          from { opacity: 0; transform: translateX(40px) scale(.96); }
          to   { opacity: 1; transform: none; }
        }

        .hb3-product-frame {
          position: relative;
          z-index: 1;
        }
        .hb3-product-frame img {
          width: 100%;
          max-width: 540px;
          display: block;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,.5));
          transition: transform .8s cubic-bezier(.25,.46,.45,.94);
        }
        .hb3-slide:hover .hb3-product-frame img {
          transform: translateY(-8px) scale(1.02);
        }

        /* Decorative ring behind product */
        .hb3-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 500px; height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(201,100,30,.12);
          pointer-events: none;
        }
        .hb3-ring::before {
          content: '';
          position: absolute;
          inset: 40px;
          border-radius: 50%;
          border: 1px solid rgba(201,100,30,.08);
        }

        /* Nav arrows */
        .hb3-nav {
          position: absolute;
          bottom: 48px;
          right: 5%;
          z-index: 10;
          display: flex;
          gap: 12px;
        }
        .hb3-nav-btn {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all .25s;
          color: rgba(255,255,255,.7);
          font-size: 18px;
          line-height: 1;
        }
        .hb3-nav-btn:hover {
          background: rgba(201,100,30,.25);
          border-color: rgba(201,100,30,.4);
          color: #fff;
        }
        .hb3-nav-btn img { width: 20px; opacity: .7; transition: opacity .25s; }
        .hb3-nav-btn:hover img { opacity: 1; }

        /* Dots */
        .hb3-dots {
          position: absolute;
          bottom: 58px;
          left: 5%;
          z-index: 10;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .hb3-dot {
          width: 6px; height: 6px;
          border-radius: 99px;
          background: rgba(255,255,255,.25);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all .35s;
        }
        .hb3-dot.active {
          width: 32px;
          background: #E8640E;
        }

        /* Slide number */
        .hb3-counter {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          font-size: 12px;
          color: rgba(255,255,255,.3);
          font-weight: 600;
          letter-spacing: 2px;
        }
        .hb3-counter span { color: rgba(255,255,255,.7); }

        /* Animations */
        @keyframes hb3-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: none; }
        }

        /* slick overrides */
        .hb3-section .slick-list,
        .hb3-section .slick-track,
        .hb3-section .slick-slide > div { height: 100%; }
        .hb3-section .slick-slide { pointer-events: none; }
        .hb3-section .slick-slide.slick-active { pointer-events: auto; }

        @media (max-width: 991px) {
          .hb3-content { padding: 100px 0 160px; }
          .hb3-img-panel { display: none; }
          .hb3-title { font-size: clamp(38px, 8vw, 56px); }
          .hb3-stats { gap: 24px; }
          .hb3-bg::after {
            background: linear-gradient(to bottom, rgba(8,10,12,.85) 0%, rgba(8,10,12,.7) 100%);
          }
        }
        @media (max-width: 575px) {
          .hb3-stats { flex-direction: column; gap: 16px; }
          .hb3-cta-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {heroContent.map((item, i) => {
          const text = Array.isArray(heroText) ? heroText[i] : {};
          return (
            <div key={i}>
              <div className="hb3-slide">

                {/* Background */}
                <div className="hb3-bg">
                  <img src={item.img} alt="" />
                </div>
                <div className="hb3-noise" />
                <div className="hb3-glow" />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                  <div className="row align-items-center">

                    {/* ── Content ── */}
                    <div className="col-lg-6">
                      <div className="hb3-content">

                        {/* Eyebrow */}
                        <div className="hb3-eyebrow">
                          <div className="hb3-eyebrow-dot" />
                          <span>{text?.subtitle || "Nhất Nam Fine Foods"}</span>
                        </div>

                        {/* Title */}
                        <h1 className="hb3-title">
                          {text?.title ? parse(text.title) : ""}
                        </h1>

                        {/* Desc */}
                        {text?.content && (
                          <p className="hb3-desc">{text.content}</p>
                        )}

                        {/* CTA */}
                        <div className="hb3-cta-row">
                          <a href="/products" className="hb3-btn-primary">
                            Khám phá sản phẩm
                            <span className="hb3-btn-arrow">
                              <i className="bi bi-arrow-right" />
                            </span>
                          </a>
                          <a href="/about" className="hb3-btn-ghost">
                            <i className="bi bi-play-circle" style={{ fontSize: 16 }} />
                            Về chúng tôi
                          </a>
                        </div>

                        {/* Stats */}
                        <div className="hb3-stats">
                          {[
                            { num: "27", sup: "+", label: "Năm kinh nghiệm" },
                            { num: "500", sup: "+", label: "Sản phẩm cao cấp" },
                            { num: "1K",  sup: "+", label: "Khách hàng tin dùng" },
                          ].map((s, si) => (
                            <div key={si}>
                              <div className="hb3-stat-num">
                                {s.num}<sup>{s.sup}</sup>
                              </div>
                              <div className="hb3-stat-label">{s.label}</div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* ── Product image ── */}
                    <div className="col-lg-6">
                      <div className="hb3-img-panel">
                        <div className="hb3-ring" />
                        <div className="hb3-product-frame">
                          <img src={item.img} alt={text?.subtitle || "product"} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </Slider>

      {/* Dots */}
      <Dots total={heroContent.length} active={activeSlide} onDot={goTo} />

      {/* Slide counter */}
      <div className="hb3-counter">
        <span>{String(activeSlide + 1).padStart(2, "0")}</span>
        {" / "}
        {String(heroContent.length).padStart(2, "0")}
      </div>

      {/* Nav arrows */}
      <div className="hb3-nav">
        <button type="button" className="hb3-nav-btn" onClick={previous} aria-label="Previous">
          <img src="/assets/img/icon/arrowPrev.svg" alt="prev" />
        </button>
        <button type="button" className="hb3-nav-btn" onClick={next} aria-label="Next">
          <img src="/assets/img/icon/arrowNext.svg" alt="next" />
        </button>
      </div>

    </section>
  );
};

export default HeroBanneer3;