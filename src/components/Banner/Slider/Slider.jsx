import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from "img/slick1.jpg";
import slick2 from "img/slick2.jpg";
import "./style.scss";

const BannerSlick = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 6000,
    draggable : false,
    arrows : false,
  };
  return (
    <Slider {...settings}>
      <img src={slick1} alt=""></img>
      <img src={slick2} alt=""></img>
    </Slider>
  );
};

export default BannerSlick;
