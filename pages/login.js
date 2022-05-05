import Link from "next/link";

const login = () => {
  return (
    <>
      <div className="mt-6">
        <h1 className="text-border text-2xl font-bold text-center">
          LOGIN OR CREATE AN ACCOUNT
        </h1>
      </div>
      <div className="border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <h4>NEW CUSTOMERS</h4>
        <p>
          By creating an account with our store, you will be able to move
          through the checkout process faster, store multiple shipping
          addresses, view and track your orders in your account and more.
        </p>
      </div>

      <div className="border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <h4>REGISTERED CUSTOMERS</h4>
        <p>If you have an account, please log in.</p>
        <div>
          <label>
            <span className="text-customRed font-semibold">* </span>E-mail
            address
            <input className="w-full h-8 bg-slate-600" type="email"></input>
          </label>

          <label>
            <span className="text-customRed font-semibold">* </span>Password
            <input className="w-full h-8 bg-slate-600" type="password"></input>
          </label>
          <button>Login</button>
          <span className="text-customRed">* Required Fields</span>
        </div>
      </div>
      <span>Forgot your password?</span>
      <button>Create an Account</button>
    </>
  );
};

export default login;
