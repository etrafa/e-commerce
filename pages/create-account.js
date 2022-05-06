import React from "react";

const createaccount = () => {
  return (
    <div className="mt-6 ">
      <h1 className="text-border text-2xl font-bold text-center">
        CREATE AN ACCOUNT
      </h1>
      <div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col md:w-8/12 lg:w-6/12 relative">
        <h2 className="text-black font-semibold text-center absolute -top-3 bg-white px-2">
          PERSONAL INFORMATION
        </h2>
        <div className="lg:flex lg:justify-between lg:mx-12 lg:mt-4">
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            First Name
            <input
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="text"
            />
          </label>
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            Last Name
            <input
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="text"
            />
          </label>
          <label className="mt-4 lg:mt-0 text-searchBar">
            <span className="text-strongRed font-semibold">* </span>
            Email Address
            <input
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="email"
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
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="password"
            />
          </label>
          <label className="text-searchBar">
            <span className="text-strongRed font-semibold">* </span>Confirm
            Password
            <input
              className="w-full lg:w-11/12 h-8 border rounded-sm"
              type="password"
            />
          </label>
        </div>
        <button className="block border w-44 h-10 mt-4 mx-auto bg-footer text-white font-bold hover:bg-white hover:text-footer">
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

{
  /* <div className="mt-6 ">
<h1 className="text-border text-2xl font-bold text-center">
  CREATE AN ACCOUNT
</h1>
<div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col md:w-8/12 lg:w-6/12">
  <h2 className="text-border font-bold text-center">
    PERSONAL INFORMATION
  </h2>
  <label className="mt-4 text-center mx-auto inline">
    <span className="text-customRed font-semibold">* </span>First Name
    <input className="w-full h-8 border" type="text" />
  </label>
  <label className="text-center mx-auto">
    <span className="text-customRed font-semibold">* </span>Last Name
    <input className="w-full h-8 border" type="text" />
  </label>
  <label className="text-center mx-auto">
    <span className="text-customRed font-semibold">* </span>Email Address
    <input className="w-full h-8 border" type="email" />
  </label>
</div>

<div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col md:w-8/12 lg:w-6/12">
  <h2 className="text-border font-bold text-center">LOGIN INFORMATION</h2>
  <label className="mt-4">
    <span className="text-customRed font-semibold">* </span>Password
    <input className="w-full h-8 border" type="password" />
  </label>
  <label>
    <span className="text-customRed font-semibold">* </span>Confirm
    Password
    <input className="w-full h-8 border" type="password" />
  </label>
  <button className="block border w-44 h-10 mt-4 mx-auto mb-4 bg-footer text-white font-bold hover:bg-white hover:text-footer">
    Submit
  </button>
</div>
<div className="mt-4 ml-4">
  <span className="text-customRed font-semibold text-sm lg:text-center">
    * Required Fields
  </span>
</div>
</div> */
}
