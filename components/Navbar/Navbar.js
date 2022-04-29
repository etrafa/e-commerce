//logo image
import Logo from "../../public/logo.png";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div></div>
      <Link href="/">
        <Image
          className="cursor-pointer"
          src={Logo}
          alt="company logo"
          width={60}
          height={60}
        />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    </nav>
  );
};

export default Navbar;
