import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import {
  FaShippingFast,
  FaPhoneVolume,
  FaSync,
  FaShoppingCart,
  FaPlay,
} from "react-icons/fa";
import hero1 from "../assets/a.jpg";
import Testimonials from "../components/home/Testimonials";
import abtImage from "../assets/abt.jpg";
import discountImage from "../assets/1.jpg";
import News from "../components/home/News";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="wrapper flex justify-between bg-background py-24">
        <div className="flex gap-4">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border-2 border-dotted border-accent">
            <FaShippingFast className="text-3xl text-accent" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-poppins text-lg font-bold text-secondary">
              Free Shipping
            </h3>
            <p className="font-open text-sm text-secondary">
              When order over Rs.500
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border-2 border-dotted border-accent">
            <FaPhoneVolume className="text-3xl text-accent" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-poppins text-lg font-bold text-secondary">
              24/7 Support
            </h3>
            <p className="font-open text-sm text-secondary">
              Get support all day
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] border-2 border-dotted border-accent">
            <FaSync className="text-3xl text-accent" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-poppins text-lg font-bold text-secondary">
              Refund
            </h3>
            <p className="font-open text-sm text-secondary">
              Get refund within 3 days!
            </p>
          </div>
        </div>
      </section>
      <Products />
      <section className=" wrapper grid grid-cols-2 bg-background py-24">
        <div className="relative px-4 pt-8">
          <img src={hero1} alt="" className="max-w-full" />
          <div className="absolute left-14 top-0 flex  aspect-square h-[98px]  flex-col justify-center rounded-[50%] bg-accent text-center font-open text-secondary">
            <p className="text-2xl font-bold">30%</p>
            <p className="text-sm">off per kg</p>
          </div>
        </div>
        <div className="px-4 pt-6 text-secondary">
          <h3 className=" font-poppins text-4xl font-bold">
            <span className="text-accent">Deal</span> of the month
          </h3>
          <h4 className="mt-4 text-xl font-light uppercase">
            hikan strawberry
          </h4>
          <p className="my-6 font-open">
            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
            ullam similique! Beatae, minima quisquam molestias facere ea.
            Perspiciatis unde omnis iste natus error sit voluptatem accusant
          </p>
          <div className="flex gap-1 font-open">
            <div className=" border-2 border-accent px-5 py-2  text-center">
              <p className="text-3xl font-bold text-accent ">00</p>
              <p className="text-sm">Days</p>
            </div>
            <div className=" border-2 border-accent px-5 py-2  text-center">
              <p className="text-3xl font-bold text-accent ">00</p>
              <p className="text-sm">Hours</p>
            </div>
            <div className=" border-2 border-accent px-5 py-2  text-center">
              <p className="text-3xl font-bold text-accent ">00</p>
              <p className="text-sm">Mins</p>
            </div>
            <div className=" border-2 border-accent px-5 py-2  text-center">
              <p className="text-3xl font-bold text-accent ">00</p>
              <p className="text-sm">Secs</p>
            </div>
          </div>
          <button className="button3 mt-10">
            <FaShoppingCart className="text-base" />
            <p>Add to Cart</p>
          </button>
        </div>
      </section>
      <Testimonials />
      <section className="wrapper grid grid-cols-2">
        <div className=" relative flex h-[450px] w-[540px] items-center justify-center overflow-hidden rounded-lg px-3">
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url('${abtImage}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "brightness(.6)",
              content: "''",
            }}
          ></div>
          <a
            href="https://www.youtube.com/watch?v=8ZjFAhQjGzY&t=3170s"
            target="_blank"
            rel="noreferrer noopener"
            className="isolate flex aspect-square h-[85px] cursor-pointer items-center justify-center rounded-full bg-accent text-black hover:bg-secondary hover:text-accent"
          >
            <FaPlay className="text-lg " />
          </a>
        </div>
        <div className="my-auto px-8 font-open text-secondary">
          <p className="">Since year 1999</p>
          <h2 className="mt-3 font-poppins text-4xl font-bold">
            We are <span className="text-accent "> Fruitkha</span>{" "}
          </h2>
          <p className="mt-4">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem.
          </p>
          <p className="mt-3  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            facilis illo repellat veritatis minus, et labore minima mollitia qui
            ducimus.
          </p>
          <button className="button1 mt-5">know more</button>
        </div>
      </section>
      <section
        className="h mt-24 h-[490px] w-screen bg-cover py-28"
        style={{ backgroundImage: `url('${discountImage}')` }}
      >
        <div className="wrapper text-secondary">
          <h3 className=" font-poppins text-5xl font-bold ">
            December sale is on
          </h3>
          <h3 className=" mt-1 font-poppins text-5xl font-bold ">
            with big <span className="text-accent">Discount...</span>
          </h3>
          <div className="mt-6 flex gap-3 font-open ">
            <div>
              <p className="text-2xl ">Sale!</p>
              <p className="text-2xl ">Upto</p>
            </div>
            <p>
              <span className="text-6xl font-bold text-accent">50%</span>
            </p>
            <p className="mt-auto text-2xl">off</p>
          </div>
          <button className="button1 mt-5">Shop now</button>
        </div>
      </section>
      <News />
    </>
  );
}
