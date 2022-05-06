import Link from "next/link";
import SignUpWithGoogle from "../components/Login/SignUpWithGoogle";

const login = () => {
  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        LOGIN OR CREATE AN ACCOUNT
      </h1>
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
  );
};

export default login;

{
  /* <div className="lg:flex lg:w-8/12 mx-auto gap-8">
        <div className="border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
          <h4 className="font-bold">REGISTERED CUSTOMERS</h4>
          <p>If you have an account, please log in.</p>
          <div className="mt-4">
            <label>
              <span className="text-strongRed font-semibold">* </span>E-mail
              address
              <input className="w-full h-8 border" type="email"></input>
            </label>

            <label>
              <span className="text-strongRed font-semibold">* </span>Password
              <input className="w-full h-8 border" type="password"></input>
            </label>
            <span className="text-strongRed">* Required Fields</span>
            
           
          </div>
        </div>
        <div className="border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12 lg:py-14">
          <h4 className="font-bold">DON'T HAVE AN ACCOUNT?</h4>
          <p>
            By creating an account with our store, you will be able to move
            through the checkout process faster, store multiple shipping
            addresses, view and track your orders in your account and more.
          </p>
          <Link href={"/create-account"}>
            <button className="border mt-4 w-44 h-12 bg-hoverText text-white font-bold hover:bg-white hover:text-hoverText">
              Create an Account
            </button>
          </Link>
        </div>
      </div> */
}
