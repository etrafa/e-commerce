const MyAccountDropDown = () => {
  return (
    <select className="border h-8 w-10/12 md:w-6/12 lg:w-3/12 mt-1 text-neutral-600">
      <option>My Dashboard</option>
      <option>Account Information</option>
      <option>Address Book</option>
      <option>My Orders</option>
      <option>My Wishlist</option>
    </select>
  );
};

export default MyAccountDropDown;
