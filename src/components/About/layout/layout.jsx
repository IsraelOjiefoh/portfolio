/* eslint-disable react/prop-types */
import MyNavbar from "./Navbar/navbar";
const Layout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      {children}
    </>
  );
};

export default Layout;
