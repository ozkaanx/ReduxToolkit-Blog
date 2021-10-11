import React from "react";
import "./style.scss";
import Mainpost from "./MainPost/Mainpost";
import Sidebar from "components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="main-content">
      <div className="container-lg">
        <h3 className="main-title"> BLOGS</h3>
        <div className="row gy-4">
          <div className="col-lg-8">
            <Mainpost />
          </div>
          <div className="col-lg-4 ">
            <div className="sidebar-fix">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
