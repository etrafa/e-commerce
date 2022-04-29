import { useEffect, useState } from "react";
import Image from "next/image";

//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

//getDocsHook
import { getDocsHook } from "../../hooks/getDocsHook";

const Leauge = () => {
  const userCollectionRef = collection(db, "bundesliga");

  useEffect(() => {
    getDocsHook(userCollectionRef);
  }, []);

  return (
    <div>
      <h2>hey</h2>
    </div>
  );
};

export default Leauge;
