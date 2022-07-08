import { useState } from "react";
import Image from "next/image";
import {
  addItemToCart,
  removeItemFromCart,
  useAuth,
} from "../../firebase/firebaseConfig";
import Link from "next/link";

const AddToCartButton = ({
  singleProduct,
  productSize,
  setShowProductSizeError,
}) => {
  const [isAddToCartActive, setIsAddToCartActive] = useState(false);

  const currentUser = useAuth();

  //ADD-REMOVE ITEM CART
  const addToCart = () => {
    // // ? IF SIZE IS NOT SELECTED FORCE USER TO SELECT ONE //
    if (productSize === "--Please Select--" || productSize === "") {
      setShowProductSizeError(true);
    } else {
      setIsAddToCartActive((currentIsOpen) => !currentIsOpen);
      if (isAddToCartActive) {
        removeItemFromCart(singleProduct);
      } else if (!isAddToCartActive) {
        addItemToCart(singleProduct, currentUser, productSize);
      }
    }
  };

  return (
    <div>
      {currentUser ? (
        <div
          onClick={addToCart}
          className="relative w-11/12 mt-6 mx-auto h-12 border rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer hover:bg-slate-100 flex px-12"
        >
          {isAddToCartActive ? (
            <span className="absolute animate-addCart">
              <Image src={singleProduct?.frontSmall} width={60} height={60} />
            </span>
          ) : null}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              isAddToCartActive
                ? "fill-hoverText stroke-searchBar w-6 h-6 stroke-1"
                : "fill-transparent stroke-black w-6 h-6"
            }
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {isAddToCartActive ? (
            <button className="text-black font-bold text-base ml-4">
              Added to Cart
            </button>
          ) : (
            <button className="text-black font-bold text-base ml-4">
              Add to Cart
            </button>
          )}
        </div>
      ) : (
        <Link href="/login">
          <div className="relative w-11/12 mt-6 mx-auto h-12 border rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer hover:bg-slate-100 flex px-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                isAddToCartActive
                  ? "fill-hoverText stroke-searchBar w-6 h-6 stroke-1"
                  : "fill-transparent stroke-black w-6 h-6"
              }
              viewBox="0 0 24 24"
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
        </Link>
      )}
    </div>
  );
};

export default AddToCartButton;
