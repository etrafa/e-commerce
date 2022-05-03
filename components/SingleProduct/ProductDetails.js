import Image from "next/image";
import { useContext, useState } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

const ProductDetails = ({ frontSmall, backSmall, frontLarge, backLarge }) => {
  //set preview image
  const [previewImage, setPreviewImage] = useState(frontLarge);

  return (
    <div className="mt-12">
      <div className="text-center">
        <Image src={previewImage} width={520} height={520} />
        {/* //340 */}
      </div>

      {/* CLEAR FIX */}
      <div className="border w-11/12 mx-auto relative"></div>

      {/* //SMALL IMAGES */}
      <div className="flex mx-8 mt-2 lg:justify-center">
        <div className="w-20 border text-center cursor-pointer">
          <Image
            onClick={() => setPreviewImage(frontLarge)}
            src={frontSmall}
            priority
            width={70}
            height={70}
          />
        </div>
        {backSmall && (
          <div className="w-20 border text-center ml-4 cursor-pointer">
            <Image
              onClick={() => setPreviewImage(backLarge)}
              src={backLarge}
              width={70}
              height={70}
            />
          </div>
        )}
      </div>
      <hr className="w-11/12 mx-auto mt-2" />
    </div>
  );
};

export default ProductDetails;
