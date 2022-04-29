import React from "react";

const createaccount = () => {
  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        CREATE AN ACCOUNT
      </h1>
      <div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col">
        <h2 className="text-border font-bold text-center">
          PERSONAL INFORMATION
        </h2>
        <label>
          <span className="text-customRed font-semibold">* </span>First Name
          <input className="w-full h-8 border" type="text" />
        </label>
        <label>
          <span className="text-customRed font-semibold">* </span>Last Name
          <input className="w-full h-8 border" type="text" />
        </label>
        <label>
          <span className="text-customRed font-semibold">* </span>Email Address
          <input className="w-full h-8 border" type="email" />
        </label>
      </div>
      <div className="border-2 px-8 mt-8 py-4 w-11/12 mx-auto flex flex-col">
        <h2 className="text-border font-bold text-center">LOGIN INFORMATION</h2>
        <label>
          <span className="text-customRed font-semibold">* </span>Password
          <input className="w-full h-8 border" type="password" />
        </label>
        <label>
          <span className="text-customRed font-semibold">* </span>Confirm
          Password
          <input className="w-full h-8 border" type="password" />
        </label>
        <button className="w-6/12 h-8 border mt-4 ml-auto">Submit</button>
      </div>
      <div className="mt-4 ml-4">
        <span className="text-customRed font-semibold text-sm">
          * Required Fields
        </span>
      </div>
    </div>
  );
};

export default createaccount;
