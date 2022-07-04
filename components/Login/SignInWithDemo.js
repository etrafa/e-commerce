import React from "react";

const SignInWithDemo = () => {
  return (
    <button className="border-2 flex w-11/12 lg:w-full h-12 items-center justify-center mx-auto mt-4 hover:bg-slate-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-slate-900 font-medium text-sm ml-2">
        Continue with Demo
      </span>
    </button>
  );
};

export default SignInWithDemo;
