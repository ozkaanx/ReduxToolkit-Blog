import React from "react";
import "./style.scss";

function TopicsBox() {
  return (
    <div className="topics-box">
      <h3 className="topics-title">Explore Topics</h3>
      <ul className="topics-list">
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
        <li>
          <a href="">Category</a>
          <span>(2)</span>
        </li>
      </ul>
    </div>
  );
}

export default TopicsBox;
