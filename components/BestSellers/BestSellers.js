import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import MainShirts from "../MainShirts";

const BestSellers = () => {
  const bestSellersID = [
    "x8133g2l8Epu6v",
    "HX14i05308j492",
    "doq2eqO8lxkzKM",
    "kfeOIhOvKm8rkM",
    "026m351w888805",
    "FuxxNhsye0kacd",
    "I5OCZrAcBQDwC1",
    "gltdflik8vjlil",
    "1ru19887m70603",
    "me9lgh53z87813",
  ];

  let bestSellerProducts = [];

  //   const [bestSellersProducts, setBestSellersProducts] = useState([]);
  const [bestSellerProductList, setBestSellerProductList] = useState([]);

  useEffect(() => {
    const docRefPSG = doc(db, "ligueone", bestSellersID[0]);
    const docRefMadrid = doc(db, "laliga", bestSellersID[1]);
    const docRefJuve = doc(db, "seriea", bestSellersID[2]);
    const docRefInter = doc(db, "seriea", bestSellersID[3]);
    const docRefMilan = doc(db, "seriea", bestSellersID[4]);
    const docRefBayern = doc(db, "bundesliga", bestSellersID[5]);
    const docRefCity = doc(db, "premierleauge", bestSellersID[6]);
    const docRefUnited = doc(db, "premierleauge", bestSellersID[7]);
    const docRefLiverpool = doc(db, "premierleauge", bestSellersID[8]);
    const docRefChelsea = doc(db, "premierleauge", bestSellersID[9]);

    const fetchSingleProduct = async () => {
      const response = await getDoc(docRefPSG);
      const response2 = await getDoc(docRefMadrid);
      const response3 = await getDoc(docRefJuve);
      const response4 = await getDoc(docRefInter);
      const response5 = await getDoc(docRefMilan);
      const response6 = await getDoc(docRefBayern);
      const response7 = await getDoc(docRefCity);
      const response8 = await getDoc(docRefUnited);
      const response9 = await getDoc(docRefLiverpool);
      const response10 = await getDoc(docRefChelsea);
      bestSellerProducts.push(
        response.data(),
        response2.data(),
        response3.data(),
        response4.data(),
        response5.data(),
        response6.data(),
        response7.data(),
        response8.data(),
        response9.data(),
        response10.data()
      );
      setBestSellerProductList(bestSellerProducts);
    };

    fetchSingleProduct();
  }, []);

  return (
    <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
      {bestSellerProductList &&
        bestSellerProductList.map((shirt) => {
          return (
            <MainShirts
              key={shirt.uid}
              tshirtName={shirt.tshirtName}
              frontLarge={shirt.frontLarge}
              price={shirt.price}
              id={shirt.uid}
              leauge={shirt.leauge}
            />
          );
        })}
    </div>
  );
};

export default BestSellers;
