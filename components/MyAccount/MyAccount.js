//components

import MyWishlist from "./MyWishlist";
import MyCart from "./MyCart";
import MyAddress from "./MyAddress/MyAddress";

//nextJS
import Link from "next/link";
import { useAuth } from "../../firebase/firebaseConfig";

const MyAccount = () => {
  const currentUser = useAuth();

  return (
    <div className="mt-6 text-center mx-auto">
      <h1 className="text-border text-2xl font-bold text-center">MY ACCOUNT</h1>
      {currentUser ? (
        <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-y-4 justify-center gap-x-4">
          <MyAddress />
          <MyWishlist />
          <MyCart />
        </div>
      ) : (
        <h1 className="mt-36">
          Please
          <Link href="/login">
            <span className="text-blue-600 hover:text-blue-300 underline cursor-pointer px-1">
              login
            </span>
          </Link>
          or
          <Link href="/create-account">
            <span className="px-1 text-blue-600 hover:text-blue-300 underline cursor-pointer">
              create an account
            </span>
          </Link>
          to see your last activitiy.
        </h1>
      )}
    </div>
  );
};

export default MyAccount;
