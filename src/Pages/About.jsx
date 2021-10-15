import React from "react";
import Navbar from "components/Navbar/Navbar";
import about from "img/about.png";
import "./style.scss";
import Sidebar from "components/Sidebar/Sidebar";
import NavbarSocial from "components/Navbar/NavbarSocial/NavbarSocial";
import Footer from "components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-header">
        <h3>About</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="about-section">
              <div className="about-section-img">
                <img alt=""  src={about}></img>
              </div>
              <div className="about-section-text">
                <p>
                  Mauris sapien augue, bibendum ut tincidunt a, pretium vel
                  risus. Cras in tellus non magna porta malesuada non quis
                  nulla. Ut a justo et nisi lacinia fringilla non a nibh. Etiam
                  tempor consectetur lectus, et placerat metus congue vitae.
                  Nunc gravida finibus magna, at suscipit nibh rutrum elementum.
                  Aenean vehicula felis eu metus hendrerit iaculis non a metus.
                  Vivamus finibus dictum sapien, ac placerat nunc laoreet nec.
                  Fusce in nisi nisi. Sed eu scelerisque elit, at pellentesque
                  arcu. In magna leo, fringilla quis ultricies pretium, mollis
                  non lacus. Nullam in nulla ut ante venenatis tincidunt. Aenean
                  ullamcorper lorem ligula. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed mollis leo a nisi venenatis
                  aliquet. Sed id lorem ullamcorper odio faucibus blandit.
                  Quisque sagittis nunc vel tristique fringilla.
                </p>
              </div>
              <div className="about-section-bottom">
              <NavbarSocial/>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-5">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
