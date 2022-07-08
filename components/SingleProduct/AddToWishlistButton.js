import { useState } from "react";
import {
  addItemToWishList,
  removeItemFromWishList,
  useAuth,
} from "../../firebase/firebaseConfig";
import Link from "next/link";

const AddToWishlistButton = ({ singleProduct }) => {
  const [isAddToWishListActive, setIsAddToWishListActive] = useState(false);

  const currentUser = useAuth();

  const wishListHandler = () => {
    setIsAddToWishListActive(!isAddToWishListActive);

    //ADD-REMOVE ITEM FROM USER'S WISHLIST
    if (isAddToWishListActive) {
      removeItemFromWishList(singleProduct);
    } else {
      addItemToWishList(singleProduct, currentUser);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div
          onClick={wishListHandler}
          className="w-11/12 mt-6 mx-auto h-12 border rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer hover:bg-slate-100 flex px-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              isAddToWishListActive
                ? "h-6 w-6 fill-hoverText stroke-searchBar stroke-1"
                : "h-6 w-6 fill-transparent stroke-black"
            }
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {isAddToWishListActive ? (
            <button className="text-black font-bold text-base ml-4">
              Added to Wishlist
            </button>
          ) : (
            <button className="text-black font-bold text-base ml-4">
              Add to Wishlist
            </button>
          )}
        </div>
      ) : (
        <Link href="/login">
          <div className="w-11/12 mt-6 mx-auto h-12 border rounded-md text-center font-extrabold text-xl py-2 text-white cursor-pointer hover:bg-slate-100 flex px-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                isAddToWishListActive
                  ? "h-6 w-6 fill-hoverText stroke-searchBar stroke-1"
                  : "h-6 w-6 fill-transparent stroke-black"
              }
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <button className="text-black font-bold text-base ml-4">
              Add to Wishlist
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default AddToWishlistButton;
