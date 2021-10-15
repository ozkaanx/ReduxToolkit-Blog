import React from "react";
import "./style.scss";
import { RecentData } from "./RecentData";
function RecentBox() {
  return (
    <div>
      <div className="recent-box">
        <h3 className="recent-title">Recent Posts</h3>
        {RecentData.map((data) => (
          <a href="/" key={data.id}>
            <div className="recent-box-list" >
              <div className="list-img">
                <img src={data.img} alt="" />
              </div>
              <div className="recent-box-text">
                <h4 className="text-title">{data.textTitle}</h4>
                <span className="text-date">{data.textDate}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RecentBox;
