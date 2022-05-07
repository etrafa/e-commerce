//nextJs
import Link from "next/link";

//components
import SignUpWithGoogle from "../components/Login/SignUpWithGoogle";

//context
import { useContext } from "react";
import { CurrencyContext } from "../Context/CurrencyContext";

const login = () => {
  const { isUserLogedIn } = useContext(CurrencyContext);

  return (
    <div className="mt-6">
      {isUserLogedIn ? (
        <div>
          <h1 className="text-border text-2xl font-bold text-center">LOGIN</h1>
          <h3 className="mt-12 text-xl font-bold text-center">
            You already loged in.
          </h3>
        </div>
      ) : (
        <div>
          <h1 className="text-border text-2xl font-bold text-center">LOGIN</h1>
          <div className="w-full text-center mt-12 lg:w-2/12 lg:mx-auto">
            <SignUpWithGoogle />
            <figure className="border relative mt-6 w-11/12 mx-auto">
              <span className="text-searchBar font-semibold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2">
                OR
              </span>
            </figure>
          </div>
          <div className="mt-6 lg:w-4/12 lg:mx-auto text-center">
            <label className=" text-neutral-400 font-semibold">
              E-mail address
              <input
                className="w-8/12 h-8 border rounded-md block mx-auto my-2"
                type="email"
              ></input>
            </label>
            <label className="text-neutral-400 font-semibold">
              Password
              <input
                className="w-8/12 h-8 border rounded-md block mx-auto mt-2"
                type="password"
              ></input>
            </label>
            <button className="block border w-44 h-10 mt-4 mx-auto mb-4 bg-footer text-white font-bold hover:bg-white hover:text-footer">
              Login
            </button>
            <Link href="/forgot-password">
              <p className="mt-3 text-blue-500 font-bold cursor-pointer text-center">
                Forgot your password?
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default login;
