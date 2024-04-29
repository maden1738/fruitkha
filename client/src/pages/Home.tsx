import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  interface Buttons {
    name: string;
    link: string;
    style: string;
  }

  interface Hero {
    className: string;
    image: string;
    subHeading: string;
    heading: string;
    button: Buttons[];
  }

  const heroData: Hero[] = [
    {
      image: "/hero-bg.jpg",
      subHeading: "fresh & organic",
      heading: "Delicious Seasonal Fruits",
      button: [
        { name: "Fruit Collection", link: "/shop", style: "button1" },
        { name: "Contact Us", link: "/contact", style: "button2" },
      ],
      className: "items-start",
    },
    {
      image: "/hero-bg-2.jpg",
      subHeading: "Fresh everyday",
      heading: "100% Organic Collection",
      button: [
        { name: "Visit Shop", link: "/shop", style: "button1" },
        { name: "Contact Us", link: "/contact", style: "button2" },
      ],
      className: "items-center",
    },
    {
      image: "bg-hero3",
      subHeading: "Mega Sale Going On",
      heading: "Get December Discount",
      button: [
        { name: "Visit Shop", link: "/shop", style: "button1" },
        { name: "Contact Us", link: "/contact", style: "button2" },
      ],
      className: "items-end",
    },
  ];

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
          // let style = {
          //   "--image-url": `url(${hero.image})`,
          // } as React.CSSProperties;
          return (
            <div
              key={idx}
              className="relative h-screen bg-primary before:absolute before:inset-0 before:bg-hero1 before:bg-cover before:bg-center before:brightness-50 before:contrast-100 before:content-['']"
            >
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
      <div className="h-screen">Home</div>;
    </>
  );
}
