import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard from "@/components/shared/cards/BlogCard";
import getAllBlogs from "@/libs/getAllBlogs";

const Blogs = ({ blogsType }) => {
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <div
      className={`blog sp_bottom_140 sp_top_140  ${
        blogsType === 2 ? "" : "pink__bg__color"
      }`}
      id="blog__area"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row align-items-center sp_bottom_80">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="section__title section__title--2">
              <div className="section__title__heading">
                <h3 className="mb-0">
                Transforming Ethiopians’ and Africans’ Human Development Index  {" "}
                  <span className="text__gradient text__unerline">
                  To over 0.8 through sustainable
                  </span>{" "}
                  handcrafting and recycling initiatives.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        
          </div>
        </div>
        <div className="blog__main__wrapper">
          {blogs?.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
