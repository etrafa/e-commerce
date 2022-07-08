import Link from "next/link";

const MyAddress = () => {
  return (
    <Link href="/my-address">
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="text-searchBar">Shipping/Billing Address</span>
      </div>
    </Link>
  );
};

export default MyAddress;
