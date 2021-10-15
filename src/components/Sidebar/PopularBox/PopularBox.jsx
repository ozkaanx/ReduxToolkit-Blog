import React from "react";
import pop from "img/pop.png";
import "./style.scss";

function PopularBox() {
  return (
    <div className="popular-box">
        <h3 className="popular-title">Popular Posts</h3>
      <div className="popular-box-list">
        <div className="list-img">
          <img  alt="" src={pop}  />
        </div>
        <div className="popular-box-text">
          <h4 className="text-title">3 Easy Ways To Make Your iphone Faster</h4>
          <span className="text-date">29 March 2021</span>
        </div>
      </div>
      <div className="popular-box-list">
        <div className="list-img">
          <img alt="" src={pop}  />
        </div>
        <div className="popular-box-text">
          <h4 className="text-title">3 Easy Ways To Make Your iphone Faster</h4>
          <span className="text-date">29 March 2021</span>
        </div>
      </div>
      <div className="popular-box-list">
        <div className="list-img">
          <img alt="" src={pop} />
        </div>
        <div className="popular-box-text">
          <h4 className="text-title">3 Easy Ways To Make Your iphone Faster</h4>
          <span className="text-date">29 March 2021</span>
        </div>
      </div>
    </div>
  );
}

export default PopularBox;
