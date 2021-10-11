import NavbarSocial from "components/Navbar/NavbarSocial/NavbarSocial";
import React from "react";
import "./style.scss";
function Footer() {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <span>2021 Template by React.</span>
          </div>
          <div className="footer-center">
            <NavbarSocial />
          </div>
          <div className="footer-right">
            <span className="top-btn" onClick={toTop}>Back To Top</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
