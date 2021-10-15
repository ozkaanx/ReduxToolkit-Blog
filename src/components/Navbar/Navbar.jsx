import React from "react";
import "./style.scss";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarSocial from "./NavbarSocial/NavbarSocial";
import NavbarButton from "./NavbarButton/NavbarButton";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <NavbarLogo />
          <NavbarMenu />
        </div>
        <div className="navbar-right">
          <NavbarSocial />
          <NavbarButton/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
