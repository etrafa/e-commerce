import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const ProductNameAndPrice = ({ tshirtName, price, isStock }) => {
  //track currency
  const { currency } = useContext(CurrencyContext);

  return (
    <div>
      {/* PRODUCT NAME & PRICE & STOCK INFORMATION */}
      <h1 className="font-bold text-border px-6 mt-4">{tshirtName}</h1>
      <hr className="w-11/12 mx-auto mt-4" />
      <div className="flex mt-2 items-center ml-8">
        {currency === "USD" && <p className="text-2xl">${price.toFixed(2)}</p>}
        {currency === "EUR" && <p className="text-2xl">{price * 0.95}€</p>}
        {currency === "GBP" && <p className="text-2xl">{price * 0.8}£</p>}
        {isStock ? (
          <span className="border-2 w-20 h-8 text-center ml-8">In Stock</span>
        ) : (
          <span>Currently Unavailable</span>
        )}
      </div>
    </div>
  );
};

export default ProductNameAndPrice;
