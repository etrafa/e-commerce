import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";
import Link from "next/link";
import Image from "next/image";

const ShoppingCart = () => {
  const { currency, shoppingCartItems, setShoppingCartItems } =
    useContext(CurrencyContext);

  // ? Delete Item from the Cart
  const handleDelete = (productID) => {
    setShoppingCartItems(
      shoppingCartItems.filter((item) => item.id !== productID)
    );
    console.log(shoppingCartItems);
  };

  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        SHOPPING CART
      </h1>

      {/* SHOPPING CART */}

      {/* //? SHOW THIS DIV IF THE CART IS EMPTY */}
      {shoppingCartItems.length === 0 && (
        <div className="text-center mt-24">
          <strong>No items in the basket</strong>
          <Link href="/">
            <span className="block text-blue-600 underline cursor-pointer mt-12">
              Click here to go home
            </span>
          </Link>
        </div>
      )}

      {/* //? SHOW THIS DIV IF THE CART HAS ITEM(S) */}
      {shoppingCartItems.length !== 0 && (
        <table class="w-full mt-12 lg:w-7/12 lg:mx-auto">
          <thead className="bg-tableGray">
            <tr>
              <th></th>
              <th className="text-sm ">PRODUCT NAME</th>
              <th className="text-sm ">UNIT PRICE</th>
              <th className="text-sm ">QTY</th>
              <th></th>
            </tr>
          </thead>
          {shoppingCartItems.map((item) => (
            <tbody>
              <tr>
                <td className="border-r border-b w-3/12 text-center">
                  <Image src={item.frontSmall} width={80} height={80} />
                </td>
                <td className="border-r border-b w-3/12 text-center text-searchBar">
                  {item.tshirtName}
                </td>
                {currency === "USD" && (
                  <td className="border-r border-b w-2/12 text-center text-searchBar">
                    ${item.price}
                  </td>
                )}
                {currency === "EUR" && (
                  <td className="border-r border-b w-2/12 text-center text-searchBar">
                    {item.price * 0.95}€
                  </td>
                )}
                {currency === "GBP" && (
                  <td className="border-r border-b w-2/12 text-center text-searchBar">
                    {item.price * 0.8}£
                  </td>
                )}
                <td className="border-r border-b w-2/12 text-center text-searchBar">
                  <div className="flex justify-evenly items-center text-center">
                    <button className="w-6 h-6 border text-center text-black font-bold hover:text-hoverText">
                      -
                    </button>
                    <span>1</span>
                    <button className="w-6 h-6 border text-center text-black font-bold hover:text-hoverText">
                      +
                    </button>
                  </div>
                </td>
                <td className="mx-auto border-b">
                  <svg
                    onClick={() => handleDelete(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto cursor-pointer hover:text-hoverText"
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
          ))}
        </table>
      )}
    </div>
  );
};

export default ShoppingCart;
