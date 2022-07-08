//context
import { CurrencyContext } from "../../Context/CurrencyContext";

import { useContext } from "react";

const OrderSummary = ({ subTotal, shippingAmount }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="hidden md:block md:w-4/12 max-w-screen-sm bg-gray-50 mx-auto mt-12 rounded-lg">
      <h1 className="text-center text-xl lg:text-right lg:mr-24 font-black tracking-widest my-4">
        ORDER SUMMARY
      </h1>
      <div className="flex justify-between mx-24 my-6 border-b">
        <span>Subtotal</span>
        {currency === "USD" && <span className="font-bold">${subTotal}</span>}
        {currency === "EUR" && <span className="font-bold">{subTotal}€</span>}
        {currency === "GBP" && <span className="font-bold">{subTotal}£</span>}
      </div>
      <div className="flex justify-between mx-24 my-6 border-b">
        <span>Estimated Shipping</span>
        {currency === "USD" && (
          <span className="font-bold">${shippingAmount}</span>
        )}
        {currency === "EUR" && (
          <span className="font-bold">{shippingAmount}€</span>
        )}
        {currency === "GBP" && (
          <span className="font-bold">{shippingAmount}£</span>
        )}
      </div>
      <div className="flex justify-between mx-24 mt-6 border-b">
        <span>Total</span>
        {currency === "USD" && (
          <span className="font-bold">${subTotal + shippingAmount}</span>
        )}
        {currency === "EUR" && (
          <span className="font-bold">{subTotal + shippingAmount}€</span>
        )}
        {currency === "GBP" && (
          <span className="font-bold">{subTotal + shippingAmount}£</span>
        )}
      </div>
      <button className="bg-black w-44 h-12 mx-auto block text-white text-center font-bold tracking-widest rounded-lg my-12 hover:bg-gray-800">
        Buy
      </button>
    </div>
  );
};

export default OrderSummary;
