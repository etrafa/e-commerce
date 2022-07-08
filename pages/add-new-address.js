import { useRouter } from "next/router";
import { useState } from "react";
import { countryList } from "../components/MyAccount/MyAddress/dropdowncountries";
import { addAddressToDB, useAuth } from "../firebase/firebaseConfig";
import Link from "next/link";

const addnewaddress = () => {
  const [newAddress, setNewAddress] = useState({
    title: "",
    fullName: "",
    country: "",
    stateOrCity: "",
    address: "",
    id: new Date().getTime().toString(),
  });

  const addressHandler = (e) => {
    let addressInputs = { [e.target.name]: e.target.value };
    setNewAddress({ ...newAddress, ...addressInputs });
  };

  const currentUser = useAuth();

  const router = useRouter();

  //basic form validation
  const [titleError, setTitleError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [stateCityError, setStateCityError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  //show message on ui when successfuly saved
  const [isSavedSuccess, setIsSavedSuccess] = useState(false);

  const sendAddressToDB = () => {
    //set errors
    if (newAddress.title.length < 5) setTitleError(true);
    if (newAddress.fullName.length < 1) setFullNameError(true);
    if (newAddress.country === "") setCountryError(true);
    if (newAddress.stateOrCity.length < 5) setStateCityError(true);
    if (newAddress.address.length < 20) setAddressError(true);

    //if there is no error let user save the address to the database.
    if (
      newAddress.title.length >= 5 &&
      newAddress.fullName.length >= 2 &&
      newAddress.country !== "" &&
      newAddress.stateOrCity.length >= 5 &&
      newAddress.address.length >= 20
    ) {
      addAddressToDB(newAddress, currentUser);
      setIsSavedSuccess(true);
      setTimeout(() => {
        router.push("/my-address");
      }, 2000);
    }
  };

  return (
    <div>
      <h1 className="text-border text-2xl font-bold text-center mt-12">
        ADD NEW ADDRESS
      </h1>
      <div className="border-dotted border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12 max-w-screen-xl">
        <Link href="/my-address">
          <span className="underline text-blue-500 cursor-pointer hover:text-blue-400">
            &lt; My Address
          </span>
        </Link>
        <form className="flex flex-col max-w-screen-lg justify-center items-center gap-y-5 mt-8">
          <label className="block text-sm font-medium text-gray-700 w-full lg:w-6/12">
            Address Title <span className="text-strongRed">*</span>
            <input
              required
              onChange={(e) => {
                addressHandler(e);
                setTitleError(false);
              }}
              type="text"
              name="title"
              className={
                titleError
                  ? "mt-1 block w-full h-9 shadow-sm sm:text-sm border border-strongRed rounded-md pl-2"
                  : "mt-1 block w-full h-9 shadow-sm sm:text-sm border rounded-md pl-2"
              }
            />
            {titleError ? (
              <p className="pt-2 text-strongRed">
                Title must be at least 5 characters.
              </p>
            ) : null}
          </label>
          <label className="block text-sm font-medium text-gray-700 w-full lg:w-6/12">
            Full Name <span className="text-strongRed">*</span>
            <input
              required
              onChange={(e) => {
                addressHandler(e);
                setFullNameError(false);
              }}
              type="text"
              name="fullName"
              className={
                fullNameError
                  ? "mt-1 block w-full h-9 shadow-sm sm:text-sm border border-strongRed rounded-md pl-2"
                  : "mt-1 block w-full h-9 shadow-sm sm:text-sm border rounded-md pl-2"
              }
            />
            {fullNameError ? (
              <p className="pt-2 text-strongRed">
                Full name must be at least 5 characters.
              </p>
            ) : null}
          </label>
          <label className="block text-sm font-medium text-gray-700 w-full lg:w-6/12">
            Country <span className="text-strongRed">*</span>
            <select
              required
              onChange={(e) => {
                addressHandler(e);
                setCountryError(false);
              }}
              className="mt-1 block w-full h-9 shadow-sm sm:text-sm border rounded-md pl-2"
              name="country"
              id="country"
            >
              <option defaultValue={"Please select"} disabled selected>
                Please select
              </option>
              {countryList.map((country) => (
                <option
                  key={country}
                  className={
                    countryError
                      ? "mt-1 block w-full h-9 shadow-sm sm:text-sm border border-strongRed rounded-md pl-2"
                      : "mt-1 block w-full h-9 shadow-sm sm:text-sm border rounded-md pl-2"
                  }
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>
            {countryError ? (
              <p className="pt-2 text-strongRed">Please choose your country.</p>
            ) : null}
          </label>
          <label className="block text-sm font-medium text-gray-700 w-full lg:w-6/12">
            State/City <span className="text-strongRed">*</span>
            <input
              required
              onChange={(e) => {
                addressHandler(e);
                setStateCityError(false);
              }}
              type="text"
              name="stateOrCity"
              className={
                stateCityError
                  ? "mt-1 block w-full h-9 shadow-sm sm:text-sm border border-strongRed rounded-md pl-2"
                  : "mt-1 block w-full h-9 shadow-sm sm:text-sm border rounded-md pl-2"
              }
            />
            {stateCityError ? (
              <p className="pt-2 text-strongRed">
                State or city name must be at least 5 characters.
              </p>
            ) : null}
          </label>
          <label className="block text-sm font-medium text-gray-700 w-full lg:w-6/12">
            Address <span className="text-strongRed">*</span>
            <textarea
              required
              onChange={(e) => {
                addressHandler(e);
                setAddressError(false);
              }}
              type="text"
              name="address"
              className={
                addressError
                  ? "mt-1 block w-full h-16 shadow-sm sm:text-sm border border-strongRed rounded-md pl-2"
                  : "mt-1 block w-full h-16 shadow-sm sm:text-sm border rounded-md p-4"
              }
            />
            {addressError ? (
              <p className="pt-2 text-strongRed">
                Please describe your address with at least 20 characters.
              </p>
            ) : null}
          </label>
          <div className="block text-sm font-medium text-gray-700 w-full lg:w-6/12 h-12">
            {isSavedSuccess && (
              <p className="text-green-500 ml-auto">
                Your address has ben saved succesfully!
              </p>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                // addAddressToDB(newAddress, currentUser);
                sendAddressToDB();
              }}
              className="block text-sm font-medium text-gray-700 border w-24 h-10 ml-auto hover:bg-slate-50"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addnewaddress;
