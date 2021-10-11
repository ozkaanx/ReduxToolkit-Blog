import React, { useState } from "react";
import "./style.scss";
import { BiSearchAlt } from "react-icons/bi";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import CanvasMenu from "../CanvasMenu/CanvasMenu";

function NavbarButton() {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(true);
  };

  return (
    <div className="menu-box">
      <button className="search-btn">
        <BiSearchAlt />
      </button>
      <button className="bar-btn" onClick={showMenu}>
        <RiBarChartHorizontalLine />
      </button>
      {show ? <CanvasMenu show={show} setShow={setShow} /> : null }
    </div>
  );
}

export default NavbarButton;
