import NavbarSocial from "components/Navbar/NavbarSocial/NavbarSocial";
import React from "react";
import "./style.scss";

function Aboutbox() {

  return (
    <div className="about-box">
      <h3 className="about-box-title">Title</h3>
      <p className="about-box-text">
        Hello, We’re content writer who is fascinated by content fashion,
        celebrity and lifestyle. We helps clients bring the right content to the
        right people.
      </p>
      <NavbarSocial />
    </div>
  );
}

const deneme = () =>{
  
}

export default Aboutbox;
