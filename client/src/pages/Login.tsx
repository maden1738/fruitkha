import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import { setUser } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
import { API_URL } from "../constants/domain";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { toastSettings } from "../constants/settings";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`${API_URL}/login`, {
        email: (event.target as HTMLFormElement).email.value,
        password: (event.target as HTMLFormElement).password.value,
      })
      .then((res) => {
        toast.success("Logged in successfully", toastSettings);
        dispatch(setUser(res.data.user));
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data, toastSettings);
      });
  }

  function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`${API_URL}/signup`, {
        name: (event.target as HTMLFormElement).username.value,
        email: (event.target as HTMLFormElement).email.value,
        password: (event.target as HTMLFormElement).password.value,
      })
      .then((res) => {
        toast.success("Account Created Succesfully", toastSettings);
        toast.info("You can now login to your account", toastSettings);
      })
      .catch((err) => {
        toast.error("something went wrong", toastSettings);
      });
  }

  return (
    <>
      <Breadcrumb
        heading="Login"
        subHeading="Join us by creating your free account"
      />
      <div className="my-36">
        <div className="mx-auto w-fit text-center">
          <h3 className="font  p-7 font-poppins text-4xl font-semibold text-secondary">
            Login
          </h3>
          <form
            id="login"
            className="flex flex-col gap-2 font-open"
            onSubmit={(event) => {
              handleLogin(event);
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required={true}
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required={true}
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <button className="button1 mx-auto my-2 w-[100px]">Login</button>
          </form>
        </div>
        <div className="mx-auto mt-8 w-fit text-center">
          <h3 className="font  p-7 font-poppins text-4xl font-semibold text-secondary">
            Signup
          </h3>
          <form
            className="flex flex-col gap-2 font-open"
            id="signup"
            onSubmit={handleSignup}
          >
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <button className="button1 mx-auto my-2 w-[100px]">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}
