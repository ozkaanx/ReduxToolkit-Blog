import React from "react";
import NavbarSocial from "../NavbarSocial/NavbarSocial";
import { MdClose } from "react-icons/md";

import "./style.scss";

function CanvasMenu({ setShow , show}) {
  const closeMenu = () => {
    setShow(false);
  };

  return (
    <>
      <div className="canvas-back"></div>
      <div className="canvas-wrapper">
        <div className="canvas-close">
          <button onClick={closeMenu} className="menu-close-btn">
            <MdClose />
          </button>
        </div>
        <h2 className="canvas-wrapper-title">ReduxBlogs</h2>
        <div className="canvas-menu">
          <ul className="canvas-menu-list">
            <li className="canvas-menu-item">
              <a href="/">Home</a>
            </li>
            <li className="canvas-menu-item">
              <a href="/about">About</a>
            </li>
            <li className="canvas-menu-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="canvas-menu-item">
              <a href="/">Home</a>
            </li>
            <li className="canvas-menu-item">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="canvas-menu-bottom">
          <NavbarSocial />
        </div>
      </div>
    </>
  );
}

export default CanvasMenu;
