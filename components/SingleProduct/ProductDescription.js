import Image from "next/image";

const ProductDescription = ({ description, frontLarge, backLarge }) => {
  return (
    <div className="w-11/12 mx-auto border mt-16">
      <h1 className="text-hoverText font-bold text-lg px-8 pt-2">
        DESCRIPTION
      </h1>
      <hr className="border mt-3" />
      {description.map((des) => (
        <p className="text-searchBar mt-4 px-4">&gt; {des}</p>
      ))}
      <p className="text-searchBar px-4 mt-6">
        <strong className="text-strongRed">Maintain your jerseys:</strong> For
        the cloths with printed number and name, it is suggested use hand
        washing, do not soak, and no twist, and please wash inside out. If use
        machine washing, please choose normal spin.
      </p>
      <br />
      <p className="text-searchBar px-4">
        <strong className="text-strongRed">Customize your jerseys:</strong> In
        the options above you can also choose to customize this jersey with a
        name and number of your choice which is applied in store using official
        League printing, we also have the option to add patches too! Make this
        Football Shirt your own by entering your details correctly before
        heading to the checkout. Our variety of international shipping methods
        will have your jersey in your hands in no time!
      </p>
      <br />
      <p className="text-searchBar px-4">
        <strong className="text-strongRed">Shipping time:</strong> Your order
        will be send within 3 business days. The total estimate is 5-15 business
        days. We'll send the tracking number and photos of jersey to you via
        email when ship out your order.
      </p>
      <div className="text-center mt-12">
        <Image src={frontLarge} width={350} height={350} />
        {backLarge && <Image src={backLarge} width={350} height={350} />}
      </div>
    </div>
  );
};

export default ProductDescription;
