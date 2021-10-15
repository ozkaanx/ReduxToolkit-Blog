import React from "react";
import {Link} from 'react-router-dom'
import "./style.scss";

function TopicsBox() {
  return (
    <div className="topics-box">
      <h3 className="topics-title">Explore Topics</h3>
      <ul className="topics-list">
        <li>
          <Link to="" href>Category</Link>
          <span>(2)</span>
        </li>
        <li>
        <Link to="" href="true">Category</Link>
          <span>(2)</span>
        </li>
        <li>
        <Link to="" href>Category</Link>
          <span>(2)</span>
        </li>
        <li>
        <Link to="" href>Category</Link>
          <span>(2)</span>
        </li>
        <li>
        <Link to="" href>Category</Link>
          <span>(2)</span>
        </li>
        <li>
        <Link to="" href>Category</Link>
          <span>(2)</span>
        </li>
      </ul>
    </div>
  );
}

export default TopicsBox;
