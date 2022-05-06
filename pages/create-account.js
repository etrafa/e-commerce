import { useContext } from "react";
import { CurrencyContext } from "../Context/CurrencyContext";
import SignUpWithGoogle from "../components/Login/SignUpWithGoogle";

const createaccount = () => {
  //? STORE USER LOGIN INFORMATION
  const { registerNewUser, setRegisterNewUser } = useContext(CurrencyContext);

  //? SAVE USER LOGIN INFORMATION TO DATABASE

  const registerUserToDB = (e) => {
    let newUser = { [e.target.name]: e.target.value };
    setRegisterNewUser({ ...registerNewUser, ...newUser });
  };

  const handleRegistration = () => {
    console.log(registerNewUser);
  };

  return (
    <div className="mt-6 ">
      <h1 className="text-border text-2xl font-bold text-center">
        CREATE AN ACCOUNT
      </h1>
      <div className="w-full text-center mt-12 lg:w-2/12 lg:mx-auto">
        <SignUpWithGoogle />
        <figure className="border relative mt-6 w-11/12 mx-auto">
          <span className="text-searchBar font-semibold text-center absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2">
            OR
          </span>
        </figure>
      </div>
      <div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col md:w-8/12 lg:w-6/12 relative">
        <h2 className="text-black font-semibold text-center absolute -top-3 bg-white px-2">
          PERSONAL INFORMATION
        </h2>
        <div className="lg:flex lg:justify-between lg:mx-12 lg:mt-4">
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            First Name
            <input
              name="firstName"
              onChange={registerUserToDB}
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="text"
              required
            />
          </label>
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            Last Name
            <input
              name="lastName"
              onChange={registerUserToDB}
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="text"
              required
            />
          </label>
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            E-mail Address
            <input
              name="email"
              onChange={registerUserToDB}
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="email"
              required
            />
          </label>
        </div>
      </div>

      <div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col md:w-8/12 lg:w-6/12 relative">
        <h2 className="text-black font-semibold text-center absolute -top-3 bg-white px-2">
          LOGIN INFORMATION
        </h2>
        <div className="lg:flex lg:justify-between lg:mx-12 lg:mt-4">
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            Password
            <input
              name="password"
              onChange={registerUserToDB}
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="password"
              required
            />
          </label>
          <label className="text-searchBar">
            <span className="text-strongRed font-semibold">* </span>Confirm
            Password
            <input
              name="passwordAgain"
              onChange={registerUserToDB}
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="password"
              required
            />
          </label>
        </div>
        <button
          onClick={handleRegistration}
          className="block border w-44 h-10 mt-4 mx-auto bg-footer text-white font-bold hover:bg-white hover:text-footer"
        >
          Submit
        </button>
        <span className="text-strongRed font-semibold text-sm mt-3">
          * Required Fields
        </span>
      </div>
    </div>
  );
};

export default createaccount;
