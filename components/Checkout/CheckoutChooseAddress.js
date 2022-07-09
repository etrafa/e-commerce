import { useFetchData } from "../../firebase/firebaseConfig";

const CheckoutChooseAddress = ({ setStepCounter }) => {
  const { fetchedData } = useFetchData("addresses");

  return (
    <div className="mt-32 lg:mt-16">
      <h2 className="text-center font-bold text-2xl">Choose your address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {fetchedData &&
          fetchedData.map((address) => (
            <div className="mx-auto mt-12 w-60 h-60 border flex flex-col justify-between">
              <h2 className="text-center font-bold pt-2">{address?.title}</h2>
              <p className="p-4">{address?.address}</p>
              <p className="p-4">
                {address?.stateOrCity}, {address?.country}
              </p>
              <button
                onClick={() => setStepCounter((prev) => prev + 1)}
                className="border w-6/12 mx-auto h-8 mt-6 block mb-4 hover:bg-gray-50 rounded-md"
              >
                Choose
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckoutChooseAddress;
