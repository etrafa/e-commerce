const ProductUserEvents = () => {
  return (
    <div>
      <form className="flex flex-col w-11/12  mx-auto mt-4 bg-neutral-100">
        <label className="flex flex-col ml-4 mt-4">
          <span className="text-red-400 text-sm">* Size</span>
          <select className="border h-8 w-10/12 mt-1">
            <option disabled>--Please Select--</option>
            <option>XS (34-36)</option>
            <option>S (36-38)</option>
            <option>M (38-40)</option>
            <option>L (40-42)</option>
            <option>XL (42-44)</option>
            <option>XXL (44-46)</option>
          </select>
        </label>
        <label className="flex flex-col ml-4 text-sm mt-4 text-searchBar">
          <p>
            Name <span className="text-black font-bold">$4.00</span>
          </p>
          <input className="border h-8 w-10/12 mt-1" type="text" />
        </label>
        <label className="flex flex-col ml-4 text-sm mt-4 text-searchBar">
          <p>
            Number <span className="text-black font-bold">$3.00 </span>
          </p>
          <input className="border h-8 w-10/12 mt-1" type="text" />
        </label>
        <span className="text-sm text-red-400 ml-4 mt-3 mb-6">
          * Required Fields
        </span>
      </form>
      <div className="w-11/12 mt-6 mx-auto h-12 bg-black rounded-md text-center font-extrabold text-xl py-2 text-white">
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductUserEvents;
