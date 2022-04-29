import { getDocs } from "firebase/firestore";
import { useState } from "react";

export const getDocsHook = async (url) => {
  const res = await getDocs(url);
  const data = res.docs.map((doc) => doc.data());
  console.log(data);
};

// useEffect(() => {
//     const getData = async () => {
//       const res = await getDocs(userCollectionRef);
//       const data = res.docs.map((item) => item.data());
//       console.log(data);
//     };
//     getData();
//   }, []);
