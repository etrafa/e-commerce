//nextJS
import Link from "next/link";
import { useState } from "react";

//components
import ShoppingCartTable from "./ShoppingCartTable";
import OrderSummary from "./OrderSummary";

//firebase functions
import { useFetchData } from "../../firebase/firebaseConfig";

const ShoppingCart = () => {
  const { fetchedData } = useFetchData("shopping-cart");

  let cartAmount = [];
  const [totalAmount, setTotalAmount] = useState([]);

  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        SHOPPING CART
      </h1>
      {fetchedData && fetchedData?.length === 0 ? (
        <div className="text-center mt-24">
          <strong>No items in the basket</strong>
          <Link href="/">
            <span className="block text-blue-600 underline cursor-pointer mt-12 hover:text-blue-400">
              Click here to go home
            </span>
          </Link>
        </div>
      ) : (
        <div>
          <ShoppingCartTable />
          <OrderSummary />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
