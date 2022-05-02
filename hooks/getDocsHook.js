import { doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const getDocsHook = (url) => {
  const [dbData, setDbData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDocs(url);
      const data = res.docs.map((items) => {
        return { id: items.id, ...items.data() };
      });
      setDbData(data);
    };
    fetchData();
  }, []);

  return { dbData };
};
