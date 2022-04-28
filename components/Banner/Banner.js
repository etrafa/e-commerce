import Image from "next/image";
import ArsenalBanner from "./banner-asset/arsenal.png";
import LiverpoolBanner from "./banner-asset/liverpool.png";
import ManCityBanner from "./banner-asset/mancity.png";
import ManUntBanner from "./banner-asset/manunited.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-2">
      <Image src={ArsenalBanner} alt="Arsenal store"></Image>
      <Image src={LiverpoolBanner} alt="Liverpool store"></Image>
      <Image src={ManCityBanner} alt="Manchster City store"></Image>
      <Image src={ManUntBanner} alt="Manchster United store"></Image>
    </div>
  );
};

export default Banner;
