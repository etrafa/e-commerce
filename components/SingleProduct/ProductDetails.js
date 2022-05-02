import Image from "next/image";

const ProductDetails = ({
  frontSmall,
  backSmall,
  frontLarge,
  backLarge,
  tshirtName,
  isStock,
  price,
}) => {
  return (
    <div className="mt-12">
      <div className="ml-8">
        <Image src={frontLarge} width={340} height={340} />
      </div>

      {/* CLEAR FIX */}
      <div className="border w-11/12 mx-auto relative"></div>

      {/* //SMALL IMAGES */}
      <div className="flex mx-8 mt-2">
        <div className="w-20 h-16 border text-center">
          <Image src={frontSmall} width={60} height={60} />
        </div>
        {backSmall && (
          <div className="w-20 h-16 border text-center">
            <Image src={backLarge} width={60} height={60} />
          </div>
        )}
      </div>

      {/* PRODUCT NAME & PRICE & STOCK INFORMATION */}
      <h1 className="font-bold text-border px-6 mt-4">{tshirtName}</h1>
      <hr className="w-11/12 mx-auto mt-4" />
      <div className="flex mt-2 items-center ml-8">
        <p className="text-2xl">${price.toFixed(2)}</p>
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
