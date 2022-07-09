import CheckoutTickSvg from "./CheckoutTickSvg";

const Checkout = ({ stepCounter }) => {
  console.log(stepCounter);

  return (
    <div className="w-11/12 relative h-1 bg-gray-200 max-w-screen-lg mx-auto flex justify-between px-4 mt-12">
      <div
        className="bg-checkoutBlue"
        style={
          stepCounter === 1 || stepCounter === 2
            ? { width: "50%" }
            : { width: "0%" }
        }
      >
        <div
          className={
            stepCounter === 1 || stepCounter === 2
              ? "w-8 h-8 rounded-full absolute -top-3.5 left-2 bg-checkoutBlue border border-checkoutBlue"
              : "w-8 h-8 rounded-full absolute -top-3.5 left-2 bg-white border"
          }
        >
          <CheckoutTickSvg />
          <span className="absolute top-10 -left-3 text-gray-400">
            Shipping
          </span>
        </div>
      </div>
      <div
        className="bg-checkoutBlue"
        style={
          stepCounter === 2 || stepCounter === 3
            ? { width: "100%" }
            : { width: "0%" }
        }
      >
        <div
          className={
            stepCounter === 2 || stepCounter === 3
              ? "w-8 h-8 rounded-full absolute bg-checkoutBlue border-checkoutBlue left-1/2 -top-3.5 transform -translate-x-1/2  border"
              : "w-8 h-8 rounded-full absolute left-1/2 -top-3.5 transform -translate-x-1/2 bg-white border"
          }
        >
          <CheckoutTickSvg />
          <span className="absolute top-10 -left-3 text-gray-400 ">
            Payment
          </span>
        </div>
      </div>
      <div
        className="bg-checkoutBlue"
        style={
          stepCounter === 2 || stepCounter === 3
            ? { width: "100%" }
            : { width: "0%" }
        }
      >
        <div
          className={
            stepCounter === 2 || stepCounter === 3
              ? "w-8 h-8 rounded-full absolute right-2 -top-3.5 bg-checkoutBlue border-checkoutBlue border"
              : "w-8 h-8 rounded-full absolute right-2 -top-3.5 bg-white border"
          }
        >
          <CheckoutTickSvg />
          <span className="absolute top-10 -left-2 text-gray-400">Review</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
