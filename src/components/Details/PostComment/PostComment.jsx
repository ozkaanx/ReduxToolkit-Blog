import React from "react";
import "./style.scss";

function PostComment() {
  return (
    <div className="container comment-container">
      <h2 className="comment-box-title">Leave Comment</h2>
      <div className="comment-box">
        <form className="comment-box-form">
          <div className="row">
            <div className="col-md-12">
              <textarea placeholder="Your Comment Here" required="required"></textarea>
            </div>
            <div className="col-md-6">
              <input placeholder="Email Adres" required="required"></input>
            </div>
            <div className="col-md-6">
              <input placeholder="Website" required="required"></input>
            </div>
            <div className="col-md-12">
              <input placeholder="Your Name" required="required"></input>
            </div>
            <button className="btn-submit"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostComment;
