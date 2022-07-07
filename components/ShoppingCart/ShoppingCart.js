import Link from "next/link";
import ShoppingCartTable from "./ShoppingCartTable";
import { useFetchData } from "../../firebase/firebaseConfig";
import { useState } from "react";

const ShoppingCart = () => {
  const { fetchedData } = useFetchData("shopping-cart");
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
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
