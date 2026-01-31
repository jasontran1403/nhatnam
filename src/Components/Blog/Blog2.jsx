import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog2 = () => {
  const { t } = useTranslation("home");

  // Ảnh giữ local
  const blogImages = [
    "/assets/img/blog/blogThumb4_1.jpg",
    "/assets/img/blog/blogThumb4_2.jpg",
    "/assets/img/blog/blogThumb4_3.jpg"
  ];

  // Text lấy từ i18n
  const itemsRaw = t("blog.items", { returnObjects: true });
  const blogItems = Array.isArray(itemsRaw) ? itemsRaw : [];

  const commentCount = 5; // demo (giữ như template)

  return (
    <section className="blog-section section-padding fix">
      <div className="blog-wrapper style2">
        <div className="shape1">
          <img src="/assets/img/shape/blogShape3_1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="blog-card-wrap style2">
            <div className="title-area">
              <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                {t("blog.subtitle")}
                <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
              </div>

              <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                {t("blog.title")}
              </h2>
            </div>

            <div className="row">
              {blogImages.map((img, i) => (
                <div key={i} className="col-lg-4">
                  <div className="blog-card style2 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="blog-thumb">
                      <img src={img} alt="thumb" />
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta">
                        <div className="item1">
                          <h6>15</h6>
                          <p>{t("blog.meta.month_august")}</p>
                        </div>

                        <div className="items-wrap">
                          <div className="item2">
                            <div className="icon">
                              <i className="bi bi-person"></i>{" "}
                              <span>{t("blog.meta.by_admin")}</span>
                            </div>
                          </div>

                          <div className="item3">
                            <div className="icon">
                              <i className="bi bi-chat"></i>
                              <span>{t("blog.meta.comments", { count: commentCount })}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Link to="/blog/blog-details">
                        <h3>{blogItems[i]?.title}</h3>
                      </Link>

                      <p>{blogItems[i]?.content}</p>

                      <Link to="/blog/blog-details" className="link-btn">
                        <span>{t("blog.read_more")}</span> <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog2;
