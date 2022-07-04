//nextJs
import Link from "next/link";
import { useState } from "react";
import { useAuth, signInWithEmail } from "../firebase/firebaseConfig";

//components
import SignInWithGoogle from "../components/Login/SignInWithGoogle";
import SignInWithDemo from "../components/Login/SignInWithDemo";
import MyAccount from "../components/MyAccount/MyAccount";

const login = () => {
  const currentUser = useAuth();

  const [isLoginErrorOpen, setIsLoginErrorOpen] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState(
    "Email or password is incorrect."
  );
  const [loginInformation, setLoginInformation] = useState({
    email: "",
    password: "",
  });

  const loginInformationHandler = (e) => {
    let userInformation = { [e.target.name]: e.target.value };
    setLoginInformation({ ...loginInformation, ...userInformation });
    console.log(loginInformation);
    setIsLoginErrorOpen(false);
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <MyAccount />
      ) : (
        <div>
          <h1 className="text-border text-2xl font-bold text-center">LOGIN</h1>
          <div className="w-full text-center mt-12 lg:w-2/12 lg:mx-auto">
            <SignInWithDemo />
            <SignInWithGoogle />
            <figure className="border relative mt-6 w-11/12 mx-auto">
              <span className="text-searchBar font-semibold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2">
                OR
              </span>
            </figure>
          </div>
          <div className="mt-6 lg:w-4/12 lg:mx-auto text-center">
            {/* //! SHOW ERROR MESSAGE IF USER'S EMAIL OR PASSWORD IS WRONG */}

            {isLoginErrorOpen && (
              <p className="my-4 text-red-600 font-bold">{loginErrorMessage}</p>
            )}

            <label className=" text-neutral-400 font-semibold">
              E-mail address
              <input
                className="w-8/12 h-8 border rounded-md block mx-auto my-2"
                onChange={loginInformationHandler}
                name="email"
                type="email"
              ></input>
            </label>
            <label className="text-neutral-400 font-semibold">
              Password
              <input
                className="w-8/12 h-8 border rounded-md block mx-auto mt-2"
                onChange={loginInformationHandler}
                name="password"
                type="password"
              ></input>
            </label>
            <button
              onClick={() =>
                signInWithEmail(
                  loginInformation.email,
                  loginInformation.password,
                  setIsLoginErrorOpen
                )
              }
              className="block border w-44 h-10 mt-4 mx-auto mb-4 bg-footer text-white font-bold hover:bg-white hover:text-footer"
            >
              Login
            </button>
            <Link href="/forgot-password">
              <p className="mt-3 text-gray-400 text-sm hover:text-blue-500 font-bold cursor-pointer text-center">
                Forgot your password?
              </p>
            </Link>
            <Link href="/create-account">
              <p className="mt-3 text-gray-400 text-sm font-bold cursor-pointer text-center">
                Don't have an account?
                <span className="text-blue-500 hover:text-blue-400 underline ml-2">
                  Sign up here
                </span>
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default login;
