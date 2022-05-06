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

  //URL TRACKER
  const [productID, setProductID] = useState("");
  const [productLeuage, setProductLeauge] = useState("");

  // SHOPPING CART TRACKER
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  //SIZE NOT CHOOSEN ERROR MODAL
  const [isProductSizeEmpty, setIsProductSizeEmpty] = useState(false);

  //USER REGISTER INFORMATION
  const [registerNewUser, setRegisterNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  //! ERROR TRACKER
  const [signUpErrorModal, setSignUpErrorModal] = useState(false);
  const [signUpSuccessModal, setSignUpSuccessModal] = useState(false);
  const [signUpModalMessage, setSignUpModalMessage] = useState("");

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
      <CurrencyContext.Provider
        value={{
          currency,
          setCurrency,
          productID,
          setProductID,
          productLeuage,
          setProductLeauge,
          shoppingCartItems,
          setShoppingCartItems,
          isProductSizeEmpty,
          setIsProductSizeEmpty,
          registerNewUser,
          setRegisterNewUser,
          signUpErrorModal,
          setSignUpErrorModal,
          signUpModalMessage,
          setSignUpModalMessage,
          signUpSuccessModal,
          setSignUpSuccessModal,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrencyContext.Provider>
    );
  }
}

export default MyApp;
