import Image from "next/image";
import { useContext, useState } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const ProductDetails = ({
  frontSmall,
  backSmall,
  frontLarge,
  backLarge,
  tshirtName,
  isStock,
  price,
}) => {
  //set preview image
  const [previewImage, setPreviewImage] = useState(frontLarge);

  //track currency
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="mt-12">
      <div className="text-center">
        <Image src={previewImage} width={340} height={340} />
      </div>

      {/* CLEAR FIX */}
      <div className="border w-11/12 mx-auto relative"></div>

      {/* //SMALL IMAGES */}
      <div className="flex mx-8 mt-2">
        <div className="w-20 border text-center">
          <Image
            onClick={() => setPreviewImage(frontLarge)}
            src={frontSmall}
            width={70}
            height={70}
          />
        </div>
        {backSmall && (
          <div className="w-20  border text-center ml-4">
            <Image
              onClick={() => setPreviewImage(backLarge)}
              src={backLarge}
              width={70}
              height={70}
            />
          </div>
        )}
      </div>

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
      <hr className="w-11/12 mx-auto mt-2" />
    </div>
  );
};

export default ProductDetails;
