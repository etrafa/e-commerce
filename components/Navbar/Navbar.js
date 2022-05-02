//logo image
import Logo from "../../public/logo.png";

//nextJS
import Image from "next/image";
import Link from "next/link";

//react hooks
import { useState } from "react";

//styling
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClickNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <section>
      <nav className="flex flex-row items-center justify-between mx-2 mt-8 relative">
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
            onClick={handleClickNav}
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

      {/* HAMBURGER MENU OPEN (ONLY ON SMALL DEVICE)  */}

      {showNav && (
        <div
          onClick={handleClickNav}
          className={`${styles.hamburgermenu_animation} w-8/12 md:w-4/12 h-screen z-50 absolute top-0 left-0 bg-footer text-white text-sm`}
        >
          <Link href="/">
            <li className="mx-8 mt-12 cursor-pointer list-none hover:text-hoverText hover:underline">
              HOME
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/national-teams">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              NATIONAL TEAM
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/premier-leauge">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              PREMIER LEAUGE
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/bundesliga">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              BUNDESLIGA
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/seriea-leauge">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              SERIE A
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/la-liga">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              LA LIGA
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/ligue-one">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              LIGUE 1
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
          <Link href="/other-clubs">
            <li className="mx-8 mt-5 cursor-pointer list-none hover:text-hoverText hover:underline">
              OTHER CLUBS
            </li>
          </Link>
          <hr className="w-8/12 ml-8 border-slate-300" />
        </div>
      )}

      {/* SHOW ONLY ON LARGE DEVICE */}
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
        <Link href="/premier-leauge">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            PREMIER LEAUGE
          </p>
        </Link>
        <Link href="/bundesliga">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            BUNDESLIGA
          </p>
        </Link>
        <Link href="/seriea-leauge">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            SERIE A
          </p>
        </Link>
        <Link href="/la-liga">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            LA LIGA
          </p>
        </Link>
        <Link href="/ligue-one">
          <p className="mx-6 cursor-pointer hover:text-hoverText hover:underline">
            LIGUE 1
          </p>
        </Link>
        <Link href="/other-clubs">
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
