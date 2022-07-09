import Link from "next/link";
import {
  deleteAddressFromDB,
  useAuth,
  useFetchData,
} from "../firebase/firebaseConfig";

const myaddress = () => {
  const { fetchedData } = useFetchData("addresses");

  return (
    <div>
      <h1 className="text-border text-2xl font-bold text-center mt-12">
        MY ADDRESSES
      </h1>
      <div className="border-dotted border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <Link href="add-new-address">
          <button className="border w-44 h-12 mb-8 bg-hoverText hover:bg-orange-300 text-white font-bold">
            Add New Address
          </button>
        </Link>

        {/* //show user's address on ui */}
        {fetchedData &&
          fetchedData.map((address) => (
            <div className="my-2 py-4 border">
              <h2 className="font-bold p-2">{address?.title}</h2>
              <div className="flex lg:flex-row lg:justify-between mx-2">
                <div>
                  <p className="text-gray-400">{address?.address}</p>
                  <p className="text-gray-400">{address?.fullName}</p>
                  <p className="text-gray-400">
                    {address?.stateOrCity},
                    <span className="pl-1">{address?.country}</span>
                  </p>
                </div>

                {/* //delete address from db */}
                <svg
                  onClick={() => deleteAddressFromDB(address)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer hover:stroke-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="gray"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default myaddress;
