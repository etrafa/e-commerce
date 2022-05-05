import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import UserPanel from "./Navbar/UserPanel";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <UserPanel />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
