import React from "react";

import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import { FaShippingFast, FaPhoneVolume, FaSync } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-background wrapper flex justify-between py-24">
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
    </>
  );
}
