//nextJS
import Image from "next/image";
import Link from "next/link";

//context api
import { useContext } from "react";
import { CurrencyContext } from "../Context/CurrencyContext";

const MainShirts = ({ frontLarge, tshirtName, price, id, leauge }) => {
  const { currency, setProductID, productLeuage, setProductLeauge } =
    useContext(CurrencyContext);

  return (
    <Link href={"/products/" + id}>
      <div
        onClick={() => {
          setProductID(id);
          setProductLeauge(leauge);
        }}
        className="text-center py-8"
      >
        <Image
          className="cursor-pointer"
          width={240}
          height={240}
          src={frontLarge}
        />
        <span className="text-sm block text-border font-medium cursor-pointer">
          {tshirtName.slice(0, 30).toUpperCase()}
        </span>
        <hr className="w-10/12 mt-1" />
        <div className="mb-6">
          {currency === "USD" && <span className="text-red-400">${price}</span>}
          {currency === "EUR" && (
            <span className="text-orange-400">{price * 0.95}€</span>
          )}
          {currency === "GBP" && (
            <span className=" text-lime-500">{price * 0.8}£</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MainShirts;
