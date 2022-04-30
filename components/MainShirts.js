import Image from "next/image";

//context api
import { CurrencyContext } from "../Context/CurrencyContext";
import { useContext } from "react";

const MainShirts = ({ frontLarge, tshirtName, price }) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="text-center py-8">
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
  );
};

export default MainShirts;

// import Image from "next/image";

// const MainShirts = ({ frontLarge, tshirtName, price }) => {
//   return (
//     <div className="text-center">
//       <Image className="" width={160} height={160} src={frontLarge} />
//       <span className="text-sm block  text-border font-medium">
//         {tshirtName.slice(0, 20).toLowerCase()}
//       </span>
//       <hr className="w-10/12 mt-1" />
//       <div className="mb-6">
//         <span className="text-red-400">${price}</span>
//       </div>
//     </div>
//   );
// };

// export default MainShirts;
