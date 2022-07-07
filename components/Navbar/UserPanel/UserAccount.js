import Link from "next/link";

//context
import { useRouter } from "next/router";
import { logOut, useAuth } from "../../../firebase/firebaseConfig";

const UserAccount = () => {
  const currentUser = useAuth();

  return (
    <div className="flex items-center cursor-pointer relative group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span className="text-sm">My Account</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {/* //dropdown items */}
      <div className=" w-32 absolute top-6 bg-white text-border hidden group-hover:block z-50">
        <ul className="mt-2 text-border">
          <li className="border-2 border-hoverText"></li>
          <Link href="/my-account">
            <li className="h-8 mt-1 hover:text-hoverText pl-4">My Account</li>
          </Link>
          <hr />
          <Link href="/my-wishlist">
            <li className="h-8 mt-2 hover:text-hoverText pl-4">My Wishlist</li>
          </Link>
          <hr />
          <Link href="/shopping-cart">
            <li className="h-8 mt-2 hover:text-hoverText pl-4">My Cart</li>
          </Link>
          <hr />
          {/* //? IF USER HASN'T SIGNED UP YET SHOW LOG IN OTHERWISE SHOW SIGN OUT */}
          {currentUser ? (
            <Link href="/create-account">
              <li
                onClick={() => logOut()}
                className="h-8 mt-2 hover:text-hoverText pl-4"
              >
                Log out
              </li>
            </Link>
          ) : (
            <Link href="/login">
              <li className="h-8 mt-2 hover:text-hoverText">Log in</li>
            </Link>
          )}
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;

{
  /* 


<li>My Account</li>
          <li>My Wishlist</li>
          <li>My Cart</li>
          <li>Log in</li> */
}
