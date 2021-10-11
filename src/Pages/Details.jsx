import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import PostDetail from "components/Details/PostDetail/PostDetail";
import axios from "axios";
import Sidebar from "components/Sidebar/Sidebar";

function Details() {
  const [selectNes, setSelectNews] = useState();
  const { news_id } = useParams();


  useEffect(() => {
    axios(
      `https://newsapi.org/v2/top-headlines?pageSize=4&country=tr&category=technology&apiKey=06cdb9957b82428fb3b6f762aeb1fa8a`
    )
      .then((res) => res.data)
      .then((data) => setSelectNews(data.articles[news_id]));
  }, [news_id]);


  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container-lg">
          <div className="row gy-4">
            <div className="col-lg-8 ps-0">
              <PostDetail selectNes={selectNes} />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
