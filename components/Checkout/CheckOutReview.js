import Link from "next/link";

const CheckOutReview = () => {
  return (
    <div className="mt-32 lg:mt-16 max-w-screen-xl mx-auto">
      <h2 className="text-center font-bold text-2xl">Summary</h2>
      <h4 className="text-center mt-24 font-bold">
        Thank you for your purchaces. We will keep informing you when we ship
        your order.
      </h4>
      <Link href="/">
        <p className="text-xl text-center mt-12 text-blue-500 hover:text-blue-400 cursor-pointer underline">
          Go home
        </p>
      </Link>
    </div>
  );
};

export default CheckOutReview;
