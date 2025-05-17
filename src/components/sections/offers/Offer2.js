import Image from "next/image";
import aboutHrImage from "@/assets/img/about/about__hr.png";
import aboutEventImage from "@/assets/img/about/event__about.png";
import Link from "next/link";

const Offer2 = ({ type, isVideo, img, title, tag, id, pt }) => {
  return (
    <div
      className={`about ext-about position-relative sp_bottom_140  ${
        pt ? pt : isVideo ? "sp_top_140" : type === 2 ? "" : "sp_top_140"
      }`}
      id={id ? id : "tb_about"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={
                  isVideo && !img ? aboutEventImage : img ? img : aboutHrImage
                }
                placeholder="blur"
                alt="about__hr"
              />
              {isVideo ? (
                <div className="video__button">
                  <Link
                    className="video__card--link glightbox"
                    data-gallery="video_popup"
                    href="https://www.youtube.com/watch?v=gLb2Gbo_bbs"
                  >
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.5L0.250002 14.8612L0.250003 0.138783L13 7.5Z"
                        fill="#F8422E"
                      ></path>
                    </svg>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div
                className={`section__title section__title--2  sp_bottom_20 ${
                  type === 2 ? "section__title--3" : ""
                }`}
              >
                <div className="section__title__button">
                  <span className="text__gradient">
                    {tag ? tag : "Core Values"}
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    {title
                      ? title
                      : type === 2
                      ? "The Spirit of Mamma's Love"
                      : "The Spirit of Mamma's Love."}
                  </h3>
                </div>
              </div>
              <p className="sp_bottom_10">
              The Spirit of Mamma's Love, our motto, is the Spirit we approach everything in AndE Mamma with. The Spirit of Mamma's Love has built-in values of Empowerment, Caring, and Life-Giving which are unique to mammas and our dear mamma, the Planet Earth.
              </p>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>Empowerment
                  </li>
                  <li>
                    <i className="icofont-check"></i>Caring
                  </li>
                  <li>
                    <i className="icofont-check"></i>Life-Giving
                  </li>
                  <li>
                    <i className="icofont-check"></i>Sustainability
                  </li>
                  <li>
                    <i className="icofont-check"></i>Community
                  </li>
               
                </ul>
              </div>
              <div className="about__vision__wrapper">
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer2;
