//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//components
import MainShirts from "../../components/MainShirts";

//nextJS
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const LeaugeStore = () => {
  const router = useRouter();
  const routerRef = router?.query?.leauge;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (routerRef) {
        const ref = collection(db, routerRef);
        const res = await getDocs(ref);
        const fetchingData = res.docs.map((items) => {
          return { id: items.id, ...items.data() };
        });
        setData(fetchingData);
      }
    };
    fetchData();

    console.log(data);
  }, [routerRef]);

  return (
    <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
      {data &&
        data.map((shirt) => {
          return (
            <MainShirts
              key={shirt.id}
              tshirtName={shirt.tshirtName}
              frontLarge={shirt.frontLarge}
              price={shirt.price}
              id={shirt.id}
              leauge={shirt.leauge}
              backLarge={shirt.backLarge}
            />
          );
        })}
    </div>
  );
};

export default LeaugeStore;
