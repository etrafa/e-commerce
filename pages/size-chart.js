import { useState } from "react";

//components
import KidJersey from "../components/SizeChart/KidJersey";
import MenJersey from "../components/SizeChart/MenJersey";
import MenTrainingSuit from "../components/SizeChart/MenTrainingSuit";
import WomanJersey from "../components/SizeChart/WomanJersey";

const sizechart = () => {
  const [sizeChartOption, setSizeChartOption] = useState("");

  return (
    <div className="w-full mt-6">
      <h1 className="text-border text-2xl font-bold text-center">Size Chart</h1>
      <label className="block text-center mt-4 md:8/12 lg:6/12">
        <select
          onChange={(e) => {
            setSizeChartOption(e.target.value);
            console.log(sizeChartOption);
          }}
          className="border h-8 mt-1 text-neutral-600"
        >
          <option selected>--Please Select--</option>
          <option>MEN'S JERSEY</option>
          <option>WOMEN'S JERSEY</option>
          <option>KID'S JERSEY</option>
          <option>MEN'S TRAINING SUIT</option>
        </select>
      </label>
      {sizeChartOption === "MEN'S JERSEY" && <MenJersey />}
      {sizeChartOption === "WOMEN'S JERSEY" && <WomanJersey />}
      {sizeChartOption === "KID'S JERSEY" && <KidJersey />}
      {sizeChartOption === "MEN'S TRAINING SUIT" && <MenTrainingSuit />}
    </div>
  );
};

export default sizechart;
