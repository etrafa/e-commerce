import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";

//useContext
import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

//components
import ProductDetails from "../../components/SingleProduct/ProductDetails";
import ProductShipmentInformation from "../../components/SingleProduct/ProductShipmentInformation";
import ProductUserEvents from "../../components/SingleProduct/ProductUserEvents";
import ProductDescription from "../../components/SingleProduct/ProductDescription";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productID, productLeuage } = useContext(CurrencyContext);

  useEffect(() => {
    const docRef = doc(db, productLeuage, productID);
    const fetchSingleProduct = async () => {
      const response = await getDoc(docRef);
      setSingleProduct(response.data());
    };

    fetchSingleProduct();
  }, []);

  return (
    <div>
      {singleProduct && (
        <div>
          <div className="lg:flex lg:mx-auto w-full justify-center lg:mt-6">
            <ProductDetails
              frontSmall={singleProduct.frontSmall}
              backSmall={singleProduct.backSmall}
              frontLarge={singleProduct.frontLarge}
              backLarge={singleProduct.backLarge}
            />
            <ProductShipmentInformation
              tshirtName={singleProduct.tshirtName}
              isStock={singleProduct.isStock}
              price={singleProduct.price}
            />
            {/* <ProductUserEvents currency={singleProduct.currency} /> */}
          </div>
          <ProductDescription
            description={singleProduct.description}
            frontLarge={singleProduct.frontLarge}
            backLarge={singleProduct.backLarge}
          />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
