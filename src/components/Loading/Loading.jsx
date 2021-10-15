import React from "react";
import loading from "img/loading.gif";
function Loading() {
  return (
    <div className="container">
      <div
        className="loading-gif"
        style={{ margin: "auto", display: "flex", justifyContent: "center" }}
      >
        <img className="img-fluid" src={loading} alt=""></img>
      </div>
    </div>
  );
}

export default Loading;
