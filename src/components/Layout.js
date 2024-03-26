import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div><Navbar title="Bharat News" /></div>
      <div style={{ margin: "70px" }}>{children}</div>
      <div ><Footer /></div>
    </>
  );
};

export default Layout;
