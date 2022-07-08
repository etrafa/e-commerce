import Link from "next/link";

const myaddress = () => {
  return (
    <div className="">
      <h1 className="text-border text-2xl font-bold text-center">
        MY ADDRESSES
      </h1>
      <div className="border-dotted border-2 px-8 mt-4 py-4 w-11/12 mx-auto md:w-8/12 lg:w-6/12">
        <Link href="add-new-address">
          <button className="border w-40 h-10">Add New Address</button>
        </Link>
      </div>
    </div>
  );
};

export default myaddress;
