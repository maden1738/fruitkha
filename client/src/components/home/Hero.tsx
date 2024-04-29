import React from "react";
import { heroData } from "../../herodata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
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
    <>
      <Slider {...settings}>
        {heroData.map((hero, idx) => {
          return (
            <div
              key={idx}
              // className="relative h-screen bg-primary before:absolute before:inset-0 before:bg-hero1 before:bg-cover before:bg-center before:brightness-50 before:contrast-100 before:content-['']"
              className="relative h-screen bg-primary"
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0px",
                  backgroundImage: `url('${hero.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  filter: "brightness(.5) contrast(1)",
                  content: "''",
                }}
              >
                {/* equivalent to ::before pseudo class */}
              </div>
              <div
                className={`wrapper isolate flex h-screen flex-col justify-center gap-12 font-poppins ${hero.className}`}
              >
                <p className="font-bold capitalize leading-[1.8] tracking-[7px] text-accent">
                  {hero.subHeading}
                </p>
                <h1 className="text-6xl font-bold text-white">
                  {hero.heading}
                </h1>
                <div className="flex gap-8">
                  {hero.button.map((el, idx) => (
                    <button key={idx} className={el.style}>
                      {el.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
