import Link from "next/link";

const MyWishlist = () => {
  return (
    <Link href="/my-wishlist">
      <div className=" w-96 h-48 border flex flex-col items-center justify-center hover:font-extrabold cursor-pointer hover:text-hoverText">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="orange"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="text-searchBar">View your wishlist.</span>
      </div>
    </Link>
  );
};

export default MyWishlist;
