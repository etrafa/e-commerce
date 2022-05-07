import { useContext, useState } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";
import SizeSelectionError from "../Error-Success/SizeSelectionError";

const ProductUserEvents = ({ tshirtName, price, frontSmall, id }) => {
  //track currency
  const {
    currency,
    shoppingCartItems,
    setShoppingCartItems,
    isProductSizeEmpty,
    setIsProductSizeEmpty,
  } = useContext(CurrencyContext);

  //PRODUCT SIZE OPTIONS
  const [productSize, setProductSize] = useState("");
  const [buttonText, setButtonText] = useState("Add to Cart");

  //ADD TO CART FUNCTION
  const addToCart = () => {
    // ? IF SIZE IS NOT SELECTED FORCE USER TO SELECT ONE //
    if (productSize === "--Please Select--" || productSize === "") {
      setIsProductSizeEmpty(true);
      console.log("select size");
    } else {
      setIsProductSizeEmpty(false);
      setButtonText("✔ Added");
      setShoppingCartItems((prev) => [
        ...prev,
        {
          id: id,
          tshirtName: tshirtName,
          price: price,
          frontSmall: frontSmall,
          productSize,
        },
      ]);
    }
  };

  return (
    <div className="relative">
      <form className="flex flex-col w-11/12  mx-auto mt-4 bg-neutral-100">
        <label className="flex flex-col ml-4 mt-4">
          <span className="text-red-400 text-sm">* Size</span>
          <select
            value={productSize}
            onChange={(e) => setProductSize(e.target.value)}
            className="border h-8 w-10/12 mt-1 text-neutral-600"
          >
            <option selected>--Please Select--</option>
            <option>XS (34-36)</option>
            <option>S (36-38)</option>
            <option>M (38-40)</option>
            <option>L (40-42)</option>
            <option>XL (42-44)</option>
            <option>XXL (44-46)</option>
          </select>
        </label>
        <label className="flex flex-col ml-4 text-sm mt-4 text-searchBar">
          {/* If user choose a name, charge extra money depending on the currency */}
          {currency === "USD" && (
            <p>
              Name <span className="text-black font-bold">$4.00</span>
            </p>
          )}
          {currency === "EUR" && (
            <p>
              Name
              <span className="text-black font-bold pl-2">{4 * 0.95}€</span>
            </p>
          )}
          {currency === "GBP" && (
            <p>
              Name
              <span className="text-black font-bold pl-2">{4 * 0.8}£</span>
            </p>
          )}
          <input className="border h-8 w-10/12 mt-1" type="text" />
        </label>
        <label className="flex flex-col ml-4 text-sm mt-4 text-searchBar">
          {/* If user choose a number, charge extra money depending on the currency */}
          {currency === "USD" && (
            <p>
              Number <span className="text-black font-bold">$3.00</span>
            </p>
          )}
          {currency === "EUR" && (
            <p>
              Number
              <span className="text-black font-bold pl-2">
                {Math.ceil(3 * 0.95)}€
              </span>
            </p>
          )}
          {currency === "GBP" && (
            <p>
              Number
              <span className="text-black font-bold pl-2">
                {Math.round(3 * 0.8)}£
              </span>
            </p>
          )}

          <input className="border h-8 w-10/12 mt-1" type="text" />
        </label>
        <span className="text-sm text-red-400 ml-4 mt-3 mb-6">
          * Required Fields
        </span>
      </form>
      {isProductSizeEmpty && (
        <div className="absolute top-0 left-0 w-full">
          <SizeSelectionError />
        </div>
      )}
      <div
        onClick={addToCart}
        className="w-11/12 mt-6 mx-auto h-12 bg-black rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer"
      >
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default ProductUserEvents;
