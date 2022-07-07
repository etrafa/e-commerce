import WishListTableBody from "./WishListTableBody";
import { useFetchData } from "../../firebase/firebaseConfig";

const WishListTable = () => {
  const { fetchedData } = useFetchData("wish-list");

  return (
    <div>
      {fetchedData?.length === 0 ? (
        <div className="text-center mt-12 font-bold">
          You haven't added any item to your wishlist.
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto mt-12 max-w-screen-md">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {fetchedData &&
              fetchedData.map((item) => (
                <WishListTableBody
                  key={item.uid}
                  item={item}
                  productID={item?.uid}
                  id={item?.uid}
                  leauge={item?.leauge}
                />
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default WishListTable;
