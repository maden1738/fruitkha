import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { logout } from "../../app/slice/userSlice";
import { toast } from "react-toastify";
import { toastSettings } from "../../constants/settings";
import { clearCart } from "../../app/slice/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((store: RootState) => store.user.value);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  function logOut() {
    dispatch(logout());
    dispatch(clearCart());
    toast.info("Logged out successfully", toastSettings);
    // window.location.reload();
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`wrapper fixed top-0 z-10 flex justify-between py-5 font-open text-white ${navbar ? "bg-primary " : " bg-transparent "} font-open  transition-colors duration-500 ease-in-out`}
    >
      <div>
        <img src={logo} alt="" className=" w-[150px]" />{" "}
      </div>
      <nav className="my-auto font-bold">
        <ul className="flex items-center gap-7">
          <li className="hover:text-accent">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/about">About</Link>
          </li>
          <li className="group relative ">
            <div className="cursor-pointer hover:text-accent">Pages</div>
            <div className="absolute  left-[-10px] top-6 hidden w-[190px] rounded-md bg-white p-4 text-sm font-semibold text-[#555]  group-hover:inline-block ">
              <ul className="capitalize">
                <li className="p-2  hover:text-accent">
                  <Link to="/about">About</Link>
                </li>
                <li className="p-2 hover:text-accent">
                  <Link to="/cart ">Cart</Link>
                </li>
                <li className="p-2 hover:text-accent">
                  <Link to="/checkout ">Checkout</Link>
                </li>
                <li className="p-2 hover:text-accent">
                  <Link to="/contact ">contact</Link>
                </li>
                <li className="p-2 hover:text-accent">
                  <Link to="/news  ">news </Link>
                </li>
                <li className="p-2 hover:text-accent">
                  <Link to="/shop ">shop</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="hover:text-accent">
            <Link to="/news">News</Link>
          </li>
          <li className="hover:text-accent">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="group relative p-2">
            <div className=" block cursor-pointer hover:text-accent ">Shop</div>
            <ul className="absolute  left-[-10px] top-8 hidden w-[190px] rounded-md bg-white p-4 text-sm font-semibold  text-[#555] transition-opacity duration-[5s] group-hover:inline-block ">
              <li className="p-2  hover:text-accent">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="p-2 hover:text-accent">
                <Link to="/checkout ">checkout</Link>
              </li>
              <li className="p-2 hover:text-accent">
                <Link to="/cart ">cart</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5  ">
        <FaShoppingCart
          className="cursor-pointer hover:text-accent"
          onClick={() => {
            navigate("/cart");
          }}
        />
        <FaSearch className="cursor-pointer hover:text-accent " />
        <div className="group relative py-2  ">
          <CgProfile className="block cursor-pointer  font-bold hover:text-accent " />
          <div className="absolute left-[-70px] top-8 hidden  w-[120px]  rounded-md  bg-white  p-4 font-open text-sm font-semibold text-[#555] group-hover:inline-block">
            {user ? (
              <>
                <ul className="">
                  <li className="p-1 text-end">
                    hi,{" "}
                    <span className="text-base  uppercase text-accent">
                      {user.name.split(" ")[0]}
                    </span>
                  </li>
                  <li
                    className="cursor-pointer p-1 text-end hover:text-accent"
                    onClick={logOut}
                  >
                    Logout
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="capitalize">
                  <li className="p-1  text-end hover:text-accent">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="p-1 text-end hover:text-accent">
                    <Link to="/login">Signup</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
