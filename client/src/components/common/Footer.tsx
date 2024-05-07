import { Link } from "react-router-dom";
import { FaPaperPlane, FaGreaterThan } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="wrapper grid grid-cols-4 bg-primary py-36 text-white">
      <div className="px-3">
        <h2 className="relative inline-block pb-5 font-poppins text-2xl font-normal">
          <div className="absolute bottom-0 left-0  mx-auto  h-[2px] w-[20px]  bg-accent content-none"></div>
          About Us
        </h2>
        <p className="pt-3 font-open text-sm opacity-70 ">
          Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae.
        </p>
      </div>
      <div className="px-3">
        <h2 className="relative inline-block pb-5 font-poppins text-2xl font-normal">
          <div className="absolute bottom-0 left-0  mx-auto  h-[2px] w-[20px]  bg-accent content-none"></div>
          Get in Touch
        </h2>
        <ul className="pt-3 font-open text-sm opacity-70 ">
          <li>221B Baker Street, London.</li>
          <li className="mt-5">support@fruitkha.com</li>
          <li className="mt-5">+00 111 222 3333</li>
        </ul>
      </div>
      <div className="px-3">
        <h2 className="relative inline-block pb-5 font-poppins text-2xl font-normal">
          <div className="absolute bottom-0 left-0  mx-auto  h-[2px] w-[20px]  bg-accent content-none"></div>
          Pages
        </h2>
        <ul className="pt-3 font-open text-sm opacity-70 ">
          <li className=" flex items-center gap-3 ">
            <span>
              <FaGreaterThan className="text-[10px] font-bold text-accent" />
            </span>
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li className="mt-4 flex  items-center gap-3 hover:text-accent">
            <span>
              <FaGreaterThan className="text-[10px] text-accent" />
            </span>
            <Link to="/about">About</Link>
          </li>
          <li className="mt-4 flex  items-center gap-3 hover:text-accent">
            <span>
              <FaGreaterThan className="text-[10px] text-accent" />
            </span>
            <Link to="/Shop">Shop</Link>
          </li>
          <li className="mt-4 flex  items-center gap-3 hover:text-accent">
            <span>
              <FaGreaterThan className="text-[10px] text-accent" />
            </span>
            <Link to="/news">News</Link>
          </li>
          <li className="mt-4 flex  items-center gap-3 hover:text-accent">
            <span>
              <FaGreaterThan className="text-[10px] text-accent" />
            </span>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="px-3">
        <h2 className="relative inline-block pb-5 font-poppins text-2xl font-normal">
          <div className="absolute bottom-0 left-0  mx-auto  h-[2px] w-[20px]  bg-accent content-none"></div>
          Subscribe
        </h2>
        <p className="pt-3 font-open text-sm opacity-70 ">
          Subscribe to our mailing list to get the latest updates.
        </p>
        <form className="mt-4 flex gap-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-secondary p-4 text-sm   "
          />
          <button className="flex aspect-square w-[51px] items-center justify-center bg-secondary text-accent hover:bg-accent hover:text-secondary">
            <FaPaperPlane className="" />
          </button>
        </form>
      </div>
    </div>
  );
}
