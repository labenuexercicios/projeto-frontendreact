import { useState, useContext } from "react";
import { CheckoutContext } from "../contexts/CheckoutContext";

const Login = () => {
  const { setFormPage } = useContext(CheckoutContext);

  const [login, setLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(false);
  };

  const inputs = [
    {
      type: "email",
      placeholder: "Email",
    },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div className=" flex flex-col gap-5 justify-center py-8 px-4 mb-32">
      <div>
        <h1 className="py-2 font-semibold text-3xl">Login</h1>
        <div className="flex gap-1 text-sm flex-wrap">
          <p className="">Don't have an account?</p>
          <p
            onClick={() => setFormPage(1)}
            className="font-semibold cursor-pointer"
          >
            Create account
          </p>
        </div>
      </div>
      <form>
        {inputs.map((input, index) => {
          return (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              className="px-2 py-2 focus:ouline-none w-full border border-gray-400 mb-2"
            />
          );
        })}

        <p className="cursor-pointer font-light text-sm pb-4">
          Forgot your password?
        </p>
        <button
          onClick={handleLogin}
          className="uppercase bg-black py-3 w-full  text-white"
        >
          Sign in
        </button>
        {login ? (
          ""
        ) : (
          <p className="pt-2 text-sm text-red-500">You don't have an account</p>
        )}
      </form>
    </div>
  );
};

export default Login;
