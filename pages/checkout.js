//components
import CheckoutChooseAddress from "../components/Checkout/CheckoutChooseAddress";
import CheckOutPayment from "../components/Checkout/CheckOutPayment";
import CheckOutSteps from "../components/Checkout/CheckoutSteps";
import CheckOutReview from "../components/Checkout/CheckOutReview";

//react
import { useState } from "react";

const checkout = () => {
  const [stepCounter, setStepCounter] = useState(0);

  return (
    <div>
      <CheckOutSteps stepCounter={stepCounter} />
      {stepCounter === 0 && (
        <CheckoutChooseAddress setStepCounter={setStepCounter} />
      )}
      {stepCounter === 1 && <CheckOutPayment setStepCounter={setStepCounter} />}
      {stepCounter === 2 && <CheckOutReview />}
    </div>
  );
};

export default checkout;
