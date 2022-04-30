//context
import { CurrencyContext } from "../Context/CurrencyContext";

//styling
import "../styles/globals.css";

//layout
import Layout from "../components/Layout";

//react hooks
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  /*Currency*/

  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    setShowing(true);
  }, []);
  if (!showing) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrencyContext.Provider>
    );
  }
}

export default MyApp;
