//components
import MyAccount from "../components/MyAccount/MyAccount";
import MyCart from "../components/MyAccount/MyCart";
import MyWishlist from "../components/MyAccount/MyWishlist";

const myaccount = () => {
  return (
    <div className="mt-6 text-center mx-auto">
      <h1 className="text-border text-2xl font-bold text-center">MY ACCOUNT</h1>
      <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-y-4 justify-center gap-x-4">
        <MyAccount />

        <MyWishlist />
        <MyCart />
      </div>
    </div>
  );
};

export default myaccount;
