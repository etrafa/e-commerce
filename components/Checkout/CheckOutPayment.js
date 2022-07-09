const CheckOutPayment = ({ setStepCounter }) => {
  const cardExpirationYear = [
    2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032,
  ];

  return (
    <div className="mt-32 lg:mt-16 max-w-screen-xl mx-auto">
      <h2 className="text-center font-bold text-2xl">Payment details</h2>
      <form className="flex flex-col w-11/12 mx-auto">
        <div className="max-w-screen-sm mt-6 mx-auto w-full">
          <label className="text-sm font-bold mx-9 md:mx-14">
            Name on the card
          </label>
          <input
            className="border w-10/12 h-10 rounded-md mx-auto mt-2 block p-4"
            type="text"
            placeholder="Name Surname"
          />
        </div>
        <div className="max-w-screen-sm mt-6 mx-auto w-full">
          <label className="text-sm font-bold mx-9 md:mx-14">Card number</label>
          <input
            className="border w-10/12 h-10 rounded-md mx-auto mt-2 block p-4"
            type="tel"
            maxLength={16}
            placeholder="1111-2222-3333-4444"
          />
        </div>
        <div className="max-w-screen-sm mt-6 mx-auto w-full">
          <label className="text-sm font-bold mx-9 md:mx-14">
            Expiration date
          </label>
          <div className="flex gap-6 mx-12 mt-4">
            <div className="w-full h-20 flex flex-col">
              <span>Month</span>
              <select className="border w-full h-10 rounded-md">
                {[...Array(12)].map((x, i) => (
                  <option>{i + 1}</option>
                ))}
              </select>
            </div>
            <div className="w-full h-20 flex flex-col">
              <span>Year</span>
              <select className="border w-full h-10 rounded-md">
                {cardExpirationYear.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
            <div className="w-full h-20 flex flex-col">
              <span>CVC</span>
              <input
                className="border w-full h-10 rounded-md pl-2"
                type={"tel"}
                maxLength={3}
              ></input>
            </div>
          </div>
        </div>
        <button
          onClick={() => setStepCounter((prev) => prev + 1)}
          className="bg-black w-44 h-12 mx-auto block text-white text-center font-bold tracking-widest rounded-lg my-12 hover:bg-gray-800"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutPayment;
