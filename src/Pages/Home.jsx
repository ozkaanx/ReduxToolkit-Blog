import Banner from "components/Banner/Banner";
import Footer from "components/Footer/Footer";
import React from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";


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
