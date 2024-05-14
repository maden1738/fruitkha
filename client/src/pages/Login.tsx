import React, { useState } from "react";
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

  const [isPwdMatch, setIsPwdMatch] = useState(true);

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    axios
      .post(`${API_URL}/login`, {
        email: target.email.value,
        password: target.password.value,
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
    const target = event.target as HTMLFormElement;

    if (target.password.value != target.confirm_password.value) {
      setIsPwdMatch(false);
      return;
    }
    axios
      .post(`${API_URL}/signup`, {
        name: (event.target as HTMLFormElement).username.value,
        email: (event.target as HTMLFormElement).email.value,
        password: (event.target as HTMLFormElement).password.value,
      })
      .then(() => {
        toast.success("Account Created Succesfully", toastSettings);
        toast.info("You can now login to your account", toastSettings);
      })
      .catch((err) => {
        let errorMsg = err.response.data.errors[0].message;
        toast.error(errorMsg, toastSettings);
      });
  }

  return (
    <>
      <Breadcrumb
        heading="Login"
        subHeading="Join us by creating your free account"
      />
      <div className="py-36">
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
              required={true}
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
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

            <input
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              required={true}
              className={` w-[400px] rounded-sm  p-3 text-sm text-primary ${isPwdMatch ? "border border-[#ddd]" : "border-2 border-red-700"}`}
              onChange={() => {
                setIsPwdMatch(true);
              }}
            />
            {!isPwdMatch && (
              <span className="pl-3  text-left text-sm text-red-700">
                Password doesn't match
              </span>
            )}
            <button className="button1 mx-auto my-2 w-[100px]">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}
