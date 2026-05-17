import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhyChoose1 = () => {
  const { t } = useTranslation("home");
  const [status, setStatus] = useState("idle"); // idle | playing | paused | ended
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const itemsRaw = t("why_choose.items", { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleThumbnailClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    setStatus("playing");
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (status === "ended") {
      video.currentTime = 0;
      video.play();
      setStatus("playing");
    } else if (status === "playing") {
      video.pause();
      setStatus("paused");
    } else if (status === "paused") {
      video.play();
      setStatus("playing");
    }
  };

  const handleEnded = () => setStatus("ended");

  const isActive = status !== "idle"; // video đã được kích hoạt ít nhất 1 lần

  return (
    <section
      ref={sectionRef}
      className="whychoose-modern fix"
      style={{ position: "relative", overflow: "hidden", background: "#0C0D0F" }}
    >
      {/* Ambient background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "55%", height: "70%", background: "radial-gradient(ellipse, rgba(201,100,30,.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-5%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(201,100,30,.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <style>{`
        .whychoose-modern { padding: 100px 0; }

        /* ── Video wrap ── */
        .wc-video-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,.6);
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .wc-thumb {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s cubic-bezier(.25,.46,.45,.94), opacity .35s;
        }
        .wc-thumb.hide { opacity: 0; pointer-events: none; }
        .wc-video-wrap:hover .wc-thumb:not(.hide) { transform: scale(1.04); }

        .wc-video {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition: opacity .35s;
          cursor: pointer;
        }
        .wc-video.show { opacity: 1; }

        /* Play button (idle state) */
        .wc-play-btn {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: transparent; border: none;
          cursor: pointer; padding: 0;
        }
        .wc-play-ring {
          width: 88px; height: 88px; border-radius: 50%;
          background: rgba(201,100,30,.9);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 0 rgba(201,100,30,.4);
          animation: wc-ring-pulse 2.2s ease-out infinite;
          transition: transform .3s, background .3s;
          position: relative;
        }
        .wc-play-btn:hover .wc-play-ring { transform: scale(1.1); background: rgba(230,120,40,.95); }
        .wc-play-ring::before {
          content: ''; position: absolute; inset: -14px; border-radius: 50%;
          border: 1px solid rgba(201,100,30,.35);
          animation: wc-ring-expand 2.2s ease-out infinite;
        }
        .wc-play-ring::after {
          content: ''; position: absolute; inset: -28px; border-radius: 50%;
          border: 1px solid rgba(201,100,30,.15);
          animation: wc-ring-expand 2.2s ease-out .4s infinite;
        }
        @keyframes wc-ring-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(201,100,30,.5); }
          70%  { box-shadow: 0 0 0 28px rgba(201,100,30,0); }
          100% { box-shadow: 0 0 0 0 rgba(201,100,30,0); }
        }
        @keyframes wc-ring-expand {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .wc-tri {
          width: 0; height: 0; border-style: solid;
          border-width: 13px 0 13px 22px;
          border-color: transparent transparent transparent #fff;
          margin-left: 5px;
        }

        /* Hover hint overlay (pause/replay) */
        .wc-hover-hint {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,0,0,.22);
          opacity: 0;
          transition: opacity .25s;
          pointer-events: none;
        }
        .wc-video-wrap:hover .wc-hover-hint { opacity: 1; }

        .wc-hint-ring {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(201,100,30,.82);
          display: flex; align-items: center; justify-content: center;
          transition: transform .25s;
        }
        .wc-video-wrap:hover .wc-hint-ring { transform: scale(1.08); }

        .wc-pause-bars { display: flex; gap: 5px; }
        .wc-pause-bars span { display: block; width: 4px; height: 20px; background: #fff; border-radius: 2px; }

        .wc-replay-svg { width: 26px; height: 26px; fill: none; stroke: #fff; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }

        /* Floating stat badge */
        .wc-stat-badge {
          position: absolute; bottom: 32px; right: -20px;
          background: rgba(12,13,15,.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(201,100,30,.3);
          border-radius: 16px; padding: 16px 22px;
          display: flex; align-items: center; gap: 14px;
          box-shadow: 0 20px 50px rgba(0,0,0,.4);
          transition: opacity .3s, transform .3s;
        }
        .wc-stat-badge.hide { opacity: 0; transform: translateY(6px); pointer-events: none; }
        .wc-stat-num { font-size: 32px; font-weight: 900; color: #E8640E; line-height: 1; font-family: 'Georgia', serif; letter-spacing: -1px; }
        .wc-stat-label { font-size: 12px; color: rgba(255,255,255,.55); font-weight: 500; max-width: 70px; line-height: 1.4; text-transform: uppercase; letter-spacing: .5px; }

        /* Eyebrow */
        .wc-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,100,30,.12); border: 1px solid rgba(201,100,30,.3);
          border-radius: 99px; padding: 5px 16px 5px 8px; margin-bottom: 24px;
        }
        .wc-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #E8640E; box-shadow: 0 0 8px rgba(232,100,14,.8);
          animation: wc-blink 2s ease infinite;
        }
        @keyframes wc-blink { 0%,100% { opacity:1; } 50% { opacity:.3; } }
        .wc-eyebrow span { font-size: 11px; font-weight: 700; color: #E8A460; text-transform: uppercase; letter-spacing: 1.5px; }

        .wc-title { font-size: clamp(36px,4vw,54px); font-weight: 900; line-height: 1.08; color: #fff; margin: 0 0 20px; font-family: 'Georgia', serif; letter-spacing: -1.5px; }
        .wc-title em { font-style: italic; color: #E8640E; }
        .wc-desc { font-size: 16px; line-height: 1.8; color: rgba(255,255,255,.55); margin-bottom: 40px; max-width: 460px; }

        /* Feature cards */
        .wc-features { display: flex; flex-direction: column; gap: 16px; margin-bottom: 44px; }
        .wc-feature-card {
          display: flex; gap: 18px; align-items: flex-start;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
          border-radius: 16px; padding: 20px 22px;
          transition: all .35s cubic-bezier(.25,.46,.45,.94);
          position: relative; overflow: hidden;
        }
        .wc-feature-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg,rgba(201,100,30,.08),transparent); opacity: 0; transition: opacity .35s; }
        .wc-feature-card:hover { border-color: rgba(201,100,30,.35); transform: translateX(6px); background: rgba(201,100,30,.06); }
        .wc-feature-card:hover::before { opacity: 1; }
        .wc-feature-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(201,100,30,.15); border: 1px solid rgba(201,100,30,.25); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .35s; }
        .wc-feature-card:hover .wc-feature-icon { background: rgba(201,100,30,.25); }
        .wc-feature-icon img { width: 26px; height: 26px; object-fit: contain; }
        .wc-feature-title { font-size: 15px; font-weight: 700; color: #fff; margin: 0 0 5px; letter-spacing: -.2px; }
        .wc-feature-desc { font-size: 13.5px; color: rgba(255,255,255,.5); margin: 0; line-height: 1.65; }

        /* CTA */
        .wc-cta { display: inline-flex; align-items: center; gap: 12px; background: linear-gradient(135deg,#E8640E,#C9400A); color: #fff; font-size: 14px; font-weight: 700; padding: 14px 28px; border-radius: 12px; text-decoration: none; letter-spacing: .3px; box-shadow: 0 8px 28px rgba(232,100,14,.4); transition: all .3s; position: relative; overflow: hidden; }
        .wc-cta::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg,rgba(255,255,255,.15),transparent); opacity: 0; transition: opacity .3s; }
        .wc-cta:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(232,100,14,.5); color: #fff; }
        .wc-cta:hover::before { opacity: 1; }
        .wc-cta-arrow { width: 30px; height: 30px; background: rgba(255,255,255,.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: transform .3s; }
        .wc-cta:hover .wc-cta-arrow { transform: translateX(4px); }

        /* Scroll animations */
        .wc-fade { opacity: 0; transform: translateY(30px); transition: opacity .7s cubic-bezier(.25,.46,.45,.94), transform .7s cubic-bezier(.25,.46,.45,.94); }
        .wc-fade.visible { opacity: 1; transform: none; }
        .wc-fade-left { opacity: 0; transform: translateX(-40px); transition: opacity .8s cubic-bezier(.25,.46,.45,.94), transform .8s cubic-bezier(.25,.46,.45,.94); }
        .wc-fade-left.visible { opacity: 1; transform: none; }

        @media (max-width: 992px) {
          .wc-stat-badge { right: 10px; bottom: 20px; }
          .whychoose-modern { padding: 70px 0; }
        }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row gx-5 gy-5 align-items-center">

          {/* ── Left: Video ── */}
          <div className="col-lg-6">
            <div className={`wc-fade-left ${visible ? "visible" : ""}`} style={{ position: "relative" }}>

              <div className="wc-video-wrap">

                {/* Thumbnail */}
                <img
                  className={`wc-thumb ${isActive ? "hide" : ""}`}
                  src="/assets/img/history/historyThumb1_1.jpg"
                  alt="thumb"
                />

                {/* Native video */}
                <video
                  ref={videoRef}
                  className={`wc-video ${isActive ? "show" : ""}`}
                  src="https://res.cloudinary.com/dflodky4j/video/upload/c737bc8c-a6b4-46ec-8c7c-88489d0f9336_y7cfr5.mp4"
                  preload="metadata"
                  playsInline
                  onClick={handleVideoClick}
                  onEnded={handleEnded}
                />

                {/* Play button — chỉ khi idle */}
                {status === "idle" && (
                  <button
                    type="button"
                    className="wc-play-btn"
                    onClick={handleThumbnailClick}
                    aria-label="Xem video"
                  >
                    <div className="wc-play-ring">
                      <div className="wc-tri" />
                    </div>
                  </button>
                )}

                {/* Hover hint khi đang active */}
                {isActive && (
                  <div className="wc-hover-hint" style={{ pointerEvents: "none" }}>
                    <div className="wc-hint-ring">
                      {status === "ended" ? (
                        /* Replay icon */
                        <svg className="wc-replay-svg" viewBox="0 0 24 24">
                          <polyline points="1 4 1 10 7 10" />
                          <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
                        </svg>
                      ) : status === "playing" ? (
                        /* Pause icon */
                        <div className="wc-pause-bars">
                          <span /><span />
                        </div>
                      ) : (
                        /* Play icon (paused state) */
                        <div className="wc-tri" />
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Floating badge — ẩn khi đang phát */}
              <div className={`wc-stat-badge ${status === "playing" ? "hide" : ""}`}>
                <div className="wc-stat-num">27+</div>
                <div className="wc-stat-label">Năm kinh nghiệm</div>
              </div>

            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="col-lg-6">
            <div className={`wc-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: ".15s" }}>

              <div className="wc-eyebrow">
                <div className="wc-eyebrow-dot" />
                <span>{t("why_choose.subtitle")}</span>
              </div>

              <h2 className="wc-title">
                {t("why_choose.title").split(" ").map((word, i, arr) =>
                  i === Math.floor(arr.length / 2)
                    ? <em key={i}>{word} </em>
                    : <span key={i}>{word} </span>
                )}
              </h2>

              <p className="wc-desc">{t("why_choose.desc")}</p>

              <div className="wc-features">
                {items.slice(0, 2).map((item, i) => (
                  <div
                    key={i}
                    className={`wc-feature-card wc-fade ${visible ? "visible" : ""}`}
                    style={{ transitionDelay: `${.3 + i * .12}s` }}
                  >
                    <div className="wc-feature-icon">
                      <img src={`/assets/img/icon/wcuIcon2_${i + 1}.png`} alt="icon" />
                    </div>
                    <div>
                      <p className="wc-feature-title">{item.title}</p>
                      <p className="wc-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`wc-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: ".55s" }}>
                <Link to="/about" className="wc-cta">
                  {t("why_choose.order_now")}
                  <span className="wc-cta-arrow">
                    <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default WhyChoose1;