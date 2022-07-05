import { useState } from "react";
import Image from "next/image";

const AddToCartButton = ({ singleProduct, productSize }) => {
  const [isAddToCartActive, setIsAddToCartActive] = useState(false);

  //ADD TO CART FUNCTION
  const addToCart = () => {
    // // ? IF SIZE IS NOT SELECTED FORCE USER TO SELECT ONE //
    setIsAddToCartActive(true);
    console.log(isAddToCartActive);
  };

  return (
    <div
      onClick={addToCart}
      className="relative w-11/12 mt-6 mx-auto h-12 border rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer hover:bg-slate-100 flex px-12"
    >
      {/* <img
        className="absolute -top-32 -left-2"
        src={singleProduct?.frontSmall}
        alt=""
      /> */}
      {isAddToCartActive ? (
        <span className="absolute animate-addCart">
          <Image src={singleProduct?.frontSmall} width={60} height={60} />
        </span>
      ) : null}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      <button className="text-black font-bold text-base ml-4">
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
