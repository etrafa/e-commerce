import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer text-gray-300 mt-12 text-sm">
      <div className=" lg:flex flex-row lg:justify-between px-12 pb-12 lg:px-24 xl:px-48">
        <div className="pt-8 px-6">
          <h2>COMPANY INFO</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/about-us">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                About Us
              </li>
            </Link>
            <Link href="/delivery-guarantee">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Delivery Guarantee
              </li>
            </Link>
            <Link href="/privacy-policy">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Privacy Policy
              </li>
            </Link>
            <Link href="/terms-of-use">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Terms of Use
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>CUSTOMER SERVICE</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/size-chart">
              <li className="cursor-pointer hover:text-hoverText">
                Size Chart
              </li>
            </Link>
            <Link href="/faq">
              <li className="mt-2 cursor-pointer hover:text-hoverText">FAQ</li>
            </Link>
            <Link href="/shipping-delivery">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Shipping & Delivery
              </li>
            </Link>
            <Link href="/return-policy">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Return Policy
              </li>
            </Link>
            <Link href="/payment-method">
              <li className="mt-2 cursor-pointer hover:text-hoverText">
                Payment Method
              </li>
            </Link>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>MY ACCOUNT</h2>
          <hr className="mt-2 w-11/12 border-gray-400" />
          <ul className="mt-3">
            <Link href="/login">
              <li className="cursor-pointer hover:text-hoverText">LOG IN</li>
            </Link>
            <li className="mt-2 cursor-pointer hover:text-hoverText">
              SIGN UP
            </li>
            <li className="mt-2 cursor-pointer hover:text-hoverText">
              My Account
            </li>
            <li className="mt-2 cursor-pointer hover:text-hoverText">
              My Orders
            </li>
            <li className="mt-2 cursor-pointer hover:text-hoverText">
              Forgot Password
            </li>
          </ul>
        </div>
        <div className="pt-8 px-6">
          <h2>CONTACT US</h2>
          <hr className="mt-2 w-11/12 border-gray-400 " />
          <p className="mt-3 cursor-pointer hover:text-hoverText">
            companyinfo.gmail.com
          </p>
        </div>
      </div>
      <div className=" pb-4 text-xs">
        <hr className="mt-4 w-full border-2 border-border" />
        <p className="text-center mt-4">
          © 2022
          <span className="text-orange-500 font-bold "> EL FOOTBALL SHOP </span>
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
