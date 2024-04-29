import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/domain";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
  interface Product {
    _id: string;
    name: string;
    price: number;
    image: string;
    [key: string]: any;
  }

  const [products, setProducts] = useState<Product[] | []>([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/fruit/?perPage=3`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper h-auto bg-white py-36">
      <section className="h-[73px] px-56 text-center">
        <h3 className=" font-poppins text-4xl font-bold">
          <span className="text-accent">Our</span> Products
        </h3>
        <p className="mt-5 text-text ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          obcaecati in, sunt fugit tenetur saepe laborum praesentium, commodi
          possimus esse ex.
        </p>
      </section>
      <section className="mt-28 grid grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center rounded-md pb-12 font-poppins shadow-lg hover:shadow-none"
          >
            <div className="px-8 pt-8 ">
              <img
                src={product.image}
                alt=""
                className="aspect-square h-[261px]"
              />
            </div>
            <h3 className=" text-center text-xl font-bold text-primary">
              {product.name}
            </h3>
            <div className="text-center">
              <p className="mt-3 text-sm text-primary">Per Kg</p>
              <p className="mt-3 text-2xl font-bold">Rs.{product.price}</p>
            </div>
            <button className=" button3 mt-5 ">
              <FaShoppingCart className="text-base" />
              <p>Add to Cart</p>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
