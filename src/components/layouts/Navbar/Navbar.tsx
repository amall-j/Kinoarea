import React from "react";
import NavbarTop from "./NavbarTop";
import "../../../assets/scss/_header.scss";

const Navbar = () => {
  return (
    <>
      <NavbarTop />
    </>
  );
};

export default React.memo(Navbar);
