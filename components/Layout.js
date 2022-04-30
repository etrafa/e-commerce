import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import UserPanel from "./Navbar/UserPanel";

const Layout = ({ children }) => {
  return (
    <div>
      <UserPanel />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
