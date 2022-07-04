//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

//getDocs Hook
import { getDocsHook } from "../../hooks/getDocsHook";
import MainShirts from "../MainShirts";

const BestSellers = () => {
  const userCollectionRef = collection(db, "bestsellers");
  const { dbData } = getDocsHook(userCollectionRef);

  return (
    <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5 gap-x-8">
      {dbData &&
        dbData.map((shirt) => {
          return (
            <MainShirts
              key={shirt.id}
              tshirtName={shirt.tshirtName}
              frontLarge={shirt.frontLarge}
              price={shirt.price}
              id={shirt.uid}
              leauge={shirt.leauge}
              backLarge={shirt.backLarge}
            />
          );
        })}
    </div>
  );
};

export default BestSellers;
