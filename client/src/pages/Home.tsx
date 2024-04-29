import React from "react";

import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import {
  FaShippingFast,
  FaPhoneVolume,
  FaSync,
  FaShoppingCart,
} from "react-icons/fa";
import hero1 from "../assets/a.jpg";

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
    </>
  );
}
