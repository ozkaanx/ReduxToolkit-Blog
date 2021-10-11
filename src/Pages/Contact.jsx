import React from "react";
import Navbar from "components/Navbar/Navbar";

import "./style.scss";
import ContactItem from "components/ContactItem/ContactItem";
import PostComment from "components/Details/PostComment/PostComment";
import Footer from "components/Footer/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="about-header">
        <h3>Contact</h3>
      </div>
      <div className="contact-section">
        <div className="container ">
          <div className="row">
            <ContactItem />
          </div>
          <PostComment />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
