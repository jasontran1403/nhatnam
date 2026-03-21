import { useTranslation } from "react-i18next";

const Blog2 = () => {
  const { t } = useTranslation("home");

  // Ảnh local
  const blogImages = [
    "/assets/img/blog/blogThumb4_1.jpg",
    "/assets/img/blog/blogThumb4_2.jpg",
    "/assets/img/blog/blogThumb4_3.jpg",
  ];

  // Lấy data từ i18n
  const itemsRaw = t("blog.items", { returnObjects: true });
  const blogItems = Array.isArray(itemsRaw) ? itemsRaw : [];

  const commentCount = 5;

  return (
    <section className="blog-section section-padding fix">
      <div className="blog-wrapper style2">
        <div className="shape1">
          <img src="/assets/img/shape/blogShape3_1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="blog-card-wrap style2">
            {/* TITLE */}
            <div className="title-area">
              <div
                className="sub-title text-center wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <img
                  className="me-1"
                  src="/assets/img/icon/titleIcon.svg"
                  alt="icon"
                />
                {t("blog.subtitle")}
                <img
                  className="ms-1"
                  src="/assets/img/icon/titleIcon.svg"
                  alt="icon"
                />
              </div>

              <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                {t("blog.title")}
              </h2>
            </div>

            {/* LIST */}
            <div className="row">
              {blogItems.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div
                    className="blog-card style2 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {/* IMAGE */}
                    <div className="blog-thumb">
                      <img
                        src={blogImages[i] || blogImages[0]}
                        alt="thumb"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="blog-content">
                      <div className="blog-meta">
                        <div className="item1">
                          <h6>22</h6>
                          <p>{t("blog.meta.month_august")}</p>
                        </div>

                        <div className="items-wrap">
                          <div className="item2">
                            <div className="icon">
                              <i className="bi bi-person"></i>
                              <span>{t("blog.meta.by_admin")}</span>
                            </div>
                          </div>

                          <div className="item3">
                            <div className="icon">
                              <i className="bi bi-chat"></i>
                              <span>
                                {t("blog.meta.comments", {
                                  count: commentCount,
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TITLE */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>{item.title}</h3>
                      </a>

                      {/* CONTENT */}
                      <p className="blog-desc">{item.content}</p>

                      {/* BUTTON */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn"
                      >
                        <span>{t("blog.read_more")}</span>
                        <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* END LIST */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog2;