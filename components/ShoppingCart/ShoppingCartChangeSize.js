import { useState } from "react";
import { updateItemSize, useAuth } from "../../firebase/firebaseConfig";

const ShoppingCartChangeSize = ({ item, setShowChangeSize }) => {
  //set item's size
  const sizes = [
    "XS (34-36)",
    "S  (36-38)",
    "M  (38-40)",
    "L  (40-42)",
    "XL  (42-44)",
    "XXL (44-46)",
  ];

  const currentUser = useAuth();

  return (
    <ul className="my-4 grid grid-cols-2 md:grid-cols-3 gap-2">
      {sizes.map((size) => (
        <li
          onClick={() => {
            updateItemSize(item, currentUser, size);
            setShowChangeSize(false);
          }}
          className="w-7 h-7 border rounded-full text-center font-bold text-sm pt-1 cursor-pointer"
          key={size}
        >
          {size?.slice(0, 3)}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCartChangeSize;
