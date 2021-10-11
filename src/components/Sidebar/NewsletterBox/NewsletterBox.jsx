import React from "react";
import "./style.scss";

function NewsletterBox() {
  return (
    <div className="newsletter-box">
      <h3 className="newsletter-box-title">Newsletter</h3>
      <p>Join 70,000 subscribers!</p>
      <div className="newsletter-box-content">
        <form>
          <input placeholder="Email adress"></input>
          <button>Sign Up</button>
        </form>
        <p>
          By signing up, you agree to our <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default NewsletterBox;
