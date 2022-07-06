import WishListTable from "../components/Wishlist/WishListTable";

const mywishlist = () => {
  return (
    <div className="w-full mt-6 mb-72">
      <h1 className="text-border text-2xl font-bold text-center">
        My Wishlist
      </h1>
      <WishListTable />
    </div>
  );
};

export default mywishlist;
