//context
import { CurrencyContext } from "../Context/CurrencyContext";

//styling
import "../styles/globals.css";

//layout
import Layout from "../components/Layout";

//react hooks
import { useState, useEffect } from "react";
import { useAuth } from "../firebase/firebaseConfig";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  /*Currency*/
  const [currency, setCurrency] = useState("USD");

  //URL TRACKER
  const [productLeuage, setProductLeauge] = useState("");

  // SHOPPING CART TRACKER

  //USER REGISTER INFORMATION
  const [registerNewUser, setRegisterNewUser] = useState({
    firstName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  //! ERROR TRACKER
  const [signUpErrorModal, setSignUpErrorModal] = useState(false);
  const [signUpSuccessModal, setSignUpSuccessModal] = useState(false);
  const [signUpModalMessage, setSignUpModalMessage] = useState("");

  const currentUser = useAuth();

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
          productLeuage,
          setProductLeauge,
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
