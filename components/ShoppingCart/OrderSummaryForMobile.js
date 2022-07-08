import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const OrderSummaryForMobile = ({ subTotal, shippingAmount }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="md:hidden my-6">
      <h1 className="text-center font-bold text-xl">Order Summary</h1>
      <div className="flex justify-between mx-12 my-6">
        <span>Subtotal</span>
        {currency === "USD" && <span className="font-bold">${subTotal}</span>}
        {currency === "EUR" && <span className="font-bold">{subTotal}€</span>}
        {currency === "GBP" && <span className="font-bold">{subTotal}£</span>}
      </div>
      <div className="flex justify-between mx-12 my-6">
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
      <div className="flex justify-between mx-12 mt-6">
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

export default OrderSummaryForMobile;
