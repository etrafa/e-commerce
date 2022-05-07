import Link from "next/link";

const MyCart = () => {
  return (
    <Link href="/shopping-cart">
      <div className="w-96 h-48 border flex flex-col items-center justify-center hover:font-extrabold cursor-pointer hover:text-hoverText">
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span className="text-searchBar">View your shopping cart.</span>
      </div>
    </Link>
  );
};

export default MyCart;
