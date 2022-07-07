//context
import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

//nextJS
import Link from "next/link";

//firebase function
import { removeItemFromCart } from "../../firebase/firebaseConfig";

//components
import ShoppingCartChangeSize from "./ShoppingCartChangeSize";
import { useState } from "react";

const ShoppingCartTableBody = ({ item, leauge }) => {
  const { currency, setProductLeauge } = useContext(CurrencyContext);

  //show change size component on the UI when user click the change button
  const [showChangeSize, setShowChangeSize] = useState(false);

  const changeSizeHandler = () => {
    setShowChangeSize(!showChangeSize);
  };

  return (
    <tbody>
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
        <Link href={"/products/" + item?.uid}>
          <th className="md:px-6 md:py-4 w-full md:w-auto">
            <img
              onClick={() => {
                setProductLeauge(leauge);
              }}
              className="cursor-pointer hover:opacity-60"
              src={item?.frontSmall}
              alt={item?.tshirtName}
            />
          </th>
        </Link>
        <Link href={"/products/" + item?.uid}>
          <td
            onClick={() => setProductLeauge(leauge)}
            className="px-6 py-4 underline cursor-pointer hover:text-gray-400"
          >
            {item?.tshirtName}
          </td>
        </Link>
        <td className="px-6 my-4">
          {item?.productSize}
          <button
            onClick={changeSizeHandler}
            className="mt-2 underline block hover:text-gray-400 tracking-wide"
          >
            Change
          </button>
          {showChangeSize && (
            <ShoppingCartChangeSize
              item={item}
              setShowChangeSize={setShowChangeSize}
            />
          )}
        </td>
        <td className="px-6 py-4">
          {currency === "USD" && <p>${item?.price.toFixed(2)}</p>}
          {currency === "EUR" && <p>{item?.price * 0.95}€</p>}
          {currency === "GBP" && <p>{item?.price * 0.8}£</p>}
        </td>
        <td className="px-6 py-4">
          <svg
            //remove item from cart
            onClick={() => removeItemFromCart(item)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer hover:stroke-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </td>
      </tr>
    </tbody>
  );
};

export default ShoppingCartTableBody;
