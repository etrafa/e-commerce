import Image from "next/image";
import paypalMethod from "../components/Footer/FooterAssets/paypalMethod.png";

const paymentmethod = () => {
  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        PAYMENT METHOD
      </h1>
      <div className="border-dotted border-2 px-8 mt-4 py-4 w-11/12 mx-auto text-sm leading-7">
        <p>
          Pay with a credit or debit card via PayPal (You don't need to have a
          PayPal account). Press to pay via Paypal, then choose to "Create an
          Account" and you will get a window where you can eneter your card
          details and pay an order. If you need a help or instructions 'how to
          pay', feel free to contact us.
        </p>
        <br />
        <p>
          PayPal is a safer, easier way to send and receive money online. When
          you select PayPal as the payment method, you will be linked to the
          PayPal site where you can make payment.
        </p>
        <p>
          PayPal can be used to purchase items by Credit Card (Visa, MasterCard,
          Discover, and American Express), Debit Card, or E-check (i.e. using
          your regular Bank Account).
        </p>
        <br />
        <p>
          1) You can sign in to your PayPal account, or you can create a new one
          if you haven’t got one.
        </p>
        <Image src={paypalMethod} alt="payment method" />
        <p>
          2) You can use the PayPal as you want according to the on-screen
          instructions.
        </p>
        <p>The reasons why we suggest you use PayPal:</p>
        <p>
          Payment is traceable. By using your PayPal account, you can trace the
          status of your payment.
        </p>
        <br />
        <p>
          When you make payment for your order, you don’t need to use your
          credit card online (you can transfer directly from your bank account).
          When you use your credit card through PayPal, nobody will see your
          credit card number, which will minimize the risk of unauthorized use.
        </p>
      </div>
    </div>
  );
};

export default paymentmethod;
