import Link from "next/link";

const WishListTableBody = ({ item }) => {
  console.log(item?.uid);
  return (
    <tbody>
      <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
        <Link href={`/products/${item?.uid}`}>
          <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
            <img
              className="cursor-pointer hover:opacity-60"
              src={item?.frontSmall}
              alt={item?.tshirtName}
            />
          </th>
        </Link>
        <Link href={`/products/${item?.uid}`}>
          <td className="px-6 py-4 underline cursor-pointer hover:text-gray-400">
            {item?.tshirtName}
          </td>
        </Link>
        <td className="px-6 py-4">{item?.price}</td>
        <td className="px-6 py-4">
          <svg
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

export default WishListTableBody;
