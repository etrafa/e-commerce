import { CurrencyContext } from "../../../Context/CurrencyContext";
import { useContext } from "react";

const Currency = () => {
  //currency state
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <div className="flex items-center cursor-pointer relative group">
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
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <p className="pl-2">{currency}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {/* //dropdown items */}
      <div className=" w-24 absolute top-6 bg-white text-border hidden group-hover:block z-50">
        <ul className="mt-2 text-border">
          <li className="border-2 border-hoverText"></li>
          <li
            onClick={() => {
              setCurrency("USD");
            }}
            className="h-8 mt-1 hover:text-hoverText"
          >
            USD
          </li>
          <hr />
          <li
            onClick={() => {
              setCurrency("EUR");
            }}
            className="h-8 mt-2 hover:text-hoverText"
          >
            EUR
          </li>
          <hr />
          <li
            onClick={() => {
              setCurrency("GBP");
            }}
            className="h-8 mt-2 hover:text-hoverText"
          >
            GBP
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Currency;
