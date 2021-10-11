import React from "react";
import Aboutbox from "./Aboutbox/Aboutbox";
import NewsletterBox from "./NewsletterBox/NewsletterBox";
import PopularBox from "./PopularBox/PopularBox";
import TopicsBox from "./TopicsBox/TopicsBox";
import './stlye.scss'

function Sidebar() {
  return (
    <>
      <Aboutbox />
      <PopularBox />
      <TopicsBox />
      <NewsletterBox />
    </>
  );
}

export default Sidebar;
