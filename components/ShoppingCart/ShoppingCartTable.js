import ShoppingCartTableBody from "./ShoppingCartTableBody";
import { useFetchData } from "../../firebase/firebaseConfig";

const ShoppingCartTable = () => {
  const { fetchedData } = useFetchData("shopping-cart");

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto mt-12 max-w-screen-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3">PRODUCT</th>
            <th className="px-6 py-3">SIZE</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        {fetchedData &&
          fetchedData.map((item) => (
            <ShoppingCartTableBody
              key={item.uid}
              item={item}
              productID={item?.uid}
              id={item?.uid}
              leauge={item?.leauge}
            />
          ))}
      </table>
    </div>
  );
};

export default ShoppingCartTable;
