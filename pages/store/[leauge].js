//firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//components
import MainShirts from "../../components/MainShirts";

//nextJS
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

//paginate
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const LeaugeStore = () => {
  const router = useRouter();
  const routerRef = router?.query?.leauge;
  const [data, setData] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const itemPerPage = 10;
  const pagesVisited = pageNumber * itemPerPage;
  const pageCount = Math.ceil(data?.length / itemPerPage);

  const displayItems = data
    ?.slice(pagesVisited, pagesVisited + itemPerPage)
    .map((shirt) => {
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
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (routerRef) {
        const ref = collection(db, routerRef);
        const res = await getDocs(ref);
        const fetchingData = res.docs.map((items) => {
          return { id: items.id, ...items.data() };
        });
        setData(fetchingData);
        setPageNumber(0);
      }
    };
    fetchData();
  }, [routerRef]);

  console.log(pageNumber);

  return (
    <div>
      <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
        {displayItems}
      </div>
      <ReactPaginate
        className={styles.container}
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
        initialPage={pageNumber}
      />
    </div>
  );
};

export default LeaugeStore;
