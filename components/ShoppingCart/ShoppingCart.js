const ShoppingCart = () => {
  return (
    <div className="mt-6">
      <h1 className="text-border text-2xl font-bold text-center">
        SHOPPING CART
      </h1>

      {/* SHOPPING CART */}

      <table class="w-full h-48 bg-red-400">
        <thead className="bg-tableGray">
          <tr>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r w-3/12">IMAGE</td>
            <td className="border-r w-3/12">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border-r w-3/12">Malcolm Lockyer</td>
            <td className="border-r w-2/12">1961</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
{
  /* <span>IMAGE</span>
          <span>REAL MADRID UCL HOME FOOTBALL SHIRT 21/22</span>
          <span>$55.00</span>
          <span>1</span> */
}
