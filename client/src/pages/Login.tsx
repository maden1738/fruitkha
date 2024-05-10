import Breadcrumb from "../components/common/Breadcrumb";
export default function Login() {
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
          <form className="flex flex-col gap-2 font-open">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <button type="submit" className="button1 mx-auto my-2 w-[100px]">
              Login
            </button>
          </form>
        </div>
        <div className="mx-auto mt-8 w-fit text-center">
          <h3 className="font  p-7 font-poppins text-4xl font-semibold text-secondary">
            Signup
          </h3>
          <form className="flex flex-col gap-2 font-open">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-[400px] rounded-sm border border-[#ddd] p-3 text-sm text-primary"
            />
            <button type="submit" className="button1 mx-auto my-2 w-[100px]">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
