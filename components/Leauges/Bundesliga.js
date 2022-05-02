//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

//getDocs Hook
import { getDocsHook } from "../../hooks/getDocsHook";
import MainShirts from "../MainShirts";

//next
import Link from "next/link";

const Bundesliga = () => {
  const userCollectionRef = collection(db, "bundesliga");
  const { dbData } = getDocsHook(userCollectionRef);

  console.log(dbData);

  return (
    <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
      {dbData &&
        dbData.map((shirt) => {
          return (
            <MainShirts
              key={shirt.id}
              tshirtName={shirt.tshirtName}
              frontLarge={shirt.frontLarge}
              price={shirt.price}
              id={shirt.id}
            />
          );
        })}
    </div>
  );
};

export default Bundesliga;
