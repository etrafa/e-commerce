import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-footer text-gray-300 mt-12 text-sm">
      <div className="pt-8 px-6">
        <h2>COMPANY INFO</h2>
        <hr className="mt-2 w-11/12 border-gray-400" />
        <ul className="mt-3">
          <Link href="/about-us">
            <li className="mt-2">About Us</li>
          </Link>
          <Link href="/delivery-guarantee">
            <li className="mt-2">Delivery Guarantee</li>
          </Link>
          <Link href="/privacy-policy">
            <li className="mt-2">Privacy Policy</li>
          </Link>
          <Link href="/terms-of-use">
            <li className="mt-2">Terms of Use</li>
          </Link>
        </ul>
      </div>
      <div className="pt-8 px-6">
        <h2>CUSTOMER SERVICE</h2>
        <hr className="mt-2 w-11/12 border-gray-400" />
        <ul className="mt-3">
          <Link href="/sizechart">
            <li>Size Chart</li>
          </Link>
          <Link href="/faq">
            <li className="mt-2">FAQ</li>
          </Link>
          <Link href="/shipping-delivery">
            <li className="mt-2">Shipping & Delivery</li>
          </Link>
          <Link href="/return-policy">
            <li className="mt-2">Return Policy</li>
          </Link>
          <Link href="/payment-method">
            <li className="mt-2">Payment Method</li>
          </Link>
        </ul>
      </div>
      <div className="pt-8 px-6">
        <h2>MY ACCOUNT</h2>
        <hr className="mt-2 w-11/12 border-gray-400" />
        <ul className="mt-3">
          <Link href="/login">
            <li>LOG IN</li>
          </Link>
          <li className="mt-2">SIGN UP</li>
          <li className="mt-2">My Account</li>
          <li className="mt-2">My Orders</li>
          <li className="mt-2">Forgot Password</li>
        </ul>
      </div>
      <div className="pt-8 px-6">
        <h2>CONTACT US</h2>
        <hr className="mt-2 w-11/12 border-gray-400 " />
        <p className="mt-3">companyinfo.gmail.com</p>
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
