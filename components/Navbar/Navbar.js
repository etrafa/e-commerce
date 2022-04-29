//logo image
import Logo from "../../public/logo.png";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between">
      <div></div>
      <div>
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="company logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div className="h-10 w-10 rounded bg-border relative mr-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
