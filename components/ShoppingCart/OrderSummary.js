const OrderSummary = () => {
  return (
    <div className="w-full max-w-screen-sm bg-slate-50 mx-auto mt-12 rounded-lg">
      <h1 className="text-center lg:text-right lg:mr-24 font-bold tracking-widest">
        ORDER SUMMARY
      </h1>
      <div className="flex justify-between mx-24 my-4">
        <span>Subtotal</span>
        <span>$120</span>
      </div>
      <div className="flex justify-between mx-24 my-4">
        <span>Estimated Shipping</span>
        <span>$120</span>
      </div>
      <div className="flex justify-between mx-24 mt-4">
        <span>Total</span>
        <span>$120</span>
      </div>
      <button className="bg-black w-44 h-12 mx-auto block text-white text-center font-bold tracking-widest rounded-lg">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
