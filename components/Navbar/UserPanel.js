//components
import Currency from "./UserPanel/Currency";
import SearchButton from "./UserPanel/SearchButton";
import ShoppingCart from "./UserPanel/ShoppingCart";
import UserAccount from "./UserPanel/UserAccount";

const UserPanel = () => {
  return (
    <div>
      <section className="flex text-gray-700 justify-between mx-8 md:mx-24 lg:mx-48 mt-8">
        <Currency />
        <div className="flex w-48 justify-around">
          <SearchButton />
          <UserAccount />
          <ShoppingCart />
        </div>
      </section>
      <hr className="w-10/12 mx-auto mt-2" />
    </div>
  );
};

export default UserPanel;
