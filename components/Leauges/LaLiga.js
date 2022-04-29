//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

//getDocs Hook
import { getDocsHook } from "../../hooks/getDocsHook";
import MainShirts from "../MainShirts";

const LaLiga = () => {
  const userCollectionRef = collection(db, "laliga");
  const { dbData } = getDocsHook(userCollectionRef);

  return (
    <div className="grid grid-cols-2 px-4 mt-12">
      {dbData &&
        dbData.map((shirt) => {
          return (
            <MainShirts
              tshirtName={shirt.tshirtName}
              frontLarge={shirt.frontLarge}
              price={shirt.price}
            />
          );
        })}
    </div>
  );
};

export default LaLiga;
