import Image from "next/image";

const MainShirts = ({ frontLarge, tshirtName, price }) => {
  return (
    <div className="text-center">
      <Image className="" width={160} height={160} src={frontLarge} />
      <span className="text-sm block  text-border font-medium">
        {tshirtName.slice(0, 20).toLowerCase()}
      </span>
      <hr className="w-10/12 mt-1" />
      <div className="mb-6">
        <span className="text-red-400">${price}</span>
      </div>
    </div>
  );
};

export default MainShirts;
