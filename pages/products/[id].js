import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { useRouter } from "next/dist/client/router";

//useContext
import { useContext } from "react";
import { CurrencyContext } from "../../Context/CurrencyContext";

//components
import ProductDetails from "../../components/SingleProduct/ProductDetails";
import ProductShipmentInformation from "../../components/SingleProduct/ProductShipmentInformation";
import ProductDescription from "../../components/SingleProduct/ProductDescription";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productLeuage } = useContext(CurrencyContext);

  const router = useRouter();
  const { id } = router?.query;

  useEffect(() => {
    const docRef = doc(db, productLeuage, id);
    const fetchSingleProduct = async () => {
      const response = await getDoc(docRef);
      setSingleProduct(response.data());
    };

    fetchSingleProduct();
  }, []);

  console.log(productLeuage);

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
              singleProduct={singleProduct}
              tshirtName={singleProduct.tshirtName}
              isStock={singleProduct.isStock}
              price={singleProduct.price}
              frontSmall={singleProduct.frontSmall}
              id={singleProduct.id || singleProduct.uid}
            />
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
