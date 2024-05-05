import { testimonialData } from "../../testimonialdata";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section className="my-36">
      <Slider {...settings}>
        {testimonialData.map((testimonial, idx) => (
          <div className="wrapper  items-center " key={idx}>
            <div className="mx-auto h-[100px] w-[100px] overflow-hidden rounded-full">
              <img src={testimonial.avatar} alt="" />
            </div>
            <h3 className="mt-4 text-center font-poppins text-xl font-semibold text-secondary">
              {testimonial.name}
            </h3>
            <p className="mt-4  text-center text-sm font-bold text-[#838d91]">
              {testimonial.designation}
            </p>
            <p className="mt-5  px-28 font-open text-lg italic leading-relaxed text-[#999999]">
              "{testimonial.review}"
            </p>
            <FaQuoteRight className="mx-auto mt-7 text-2xl font-bold text-[#b5bbbd]" />
          </div>
        ))}
      </Slider>
    </section>
  );
}
