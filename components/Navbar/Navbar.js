//logo image
import Logo from "../../public/logo.png";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section>
      <nav className="flex flex-row items-center justify-between mx-2 mt-8">
        <div className=""></div>
        <div>
          <Link href="/">
            <Image
              className="cursor-pointer"
              src={Logo}
              alt="company logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="h-10 w-10 rounded bg-border relative lg:hidden">
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
        <div className="hidden lg:block"></div>
      </nav>
      <div className="hidden lg:flex justify-center mt-4">
        <Link href="/">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            HOME
          </p>
        </Link>
        <Link href="/national-teams">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            NATIONAL TEAM
          </p>
        </Link>
        <Link href="premier-leauge">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            PREMIER LEAUGE
          </p>
        </Link>
        <Link href="bundesliga">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            BUNDESLIGA
          </p>
        </Link>
        <Link href="seriea-leauge">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            SERIE A
          </p>
        </Link>
        <Link href="la-liga">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            LA LIGA
          </p>
        </Link>
        <Link href="ligue-one">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            LIGUE 1
          </p>
        </Link>
        <Link href="other-clubs">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            OTHER CLUBS
          </p>
        </Link>
      </div>
      <hr className="border-2 w-7/12 mx-auto mt-2 hidden lg:block" />
    </section>
  );
};

export default Navbar;
