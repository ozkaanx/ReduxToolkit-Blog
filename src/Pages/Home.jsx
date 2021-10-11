import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import React from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import BannerSlick from "../components/Banner/Slider/Slider";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
