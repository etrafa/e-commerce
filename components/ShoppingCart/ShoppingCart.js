//nextJS
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

//components
import ShoppingCartTable from "./ShoppingCartTable";
import OrderSummary from "./OrderSummary";

//firebase functions
import { useFetchData } from "../../firebase/firebaseConfig";
import { CurrencyContext } from "../../Context/CurrencyContext";

const ShoppingCart = () => {
  const { fetchedData } = useFetchData("shopping-cart");
  const { currency } = useContext(CurrencyContext);
  const [shippingAmount, setShippingAmount] = useState(12);

  //calculate the subtotal amount
  const [subTotal, setSubTotal] = useState([]);
  let priceAmount = [];
  useEffect(() => {
    {
      fetchedData &&
        fetchedData.map((item) => {
          priceAmount.push(item?.price);
          if (currency === "USD")
            setSubTotal(priceAmount.reduce((init, a) => init + a, 0));
          if (currency === "EUR")
            setSubTotal(priceAmount.reduce((init, a) => init + a, 0) * 0.95);
          if (currency === "GBP")
            setSubTotal(priceAmount.reduce((init, a) => init + a, 0) * 0.8);
        });
    }
    if (currency === "USD") setShippingAmount(12);
    if (currency === "EUR") setShippingAmount(Math.round(12 * 0.95));
    if (currency === "GBP") setShippingAmount(Math.round(12 * 0.8));
  }, [priceAmount, currency]);

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
        <div className="md:flex md:gap-4">
          <ShoppingCartTable
            subTotal={subTotal}
            shippingAmount={shippingAmount}
          />
          <OrderSummary subTotal={subTotal} shippingAmount={shippingAmount} />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
