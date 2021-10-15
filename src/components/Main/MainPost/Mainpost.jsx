import { useEffect } from "react";
import {Link} from 'react-router-dom'
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "redux/newsSlice";
import NavbarSocial from "components/Navbar/NavbarSocial/NavbarSocial";

const Mainpost = () => {
  const dispatch = useDispatch();
  const dataNews = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (status === "failed") {
    return <div>Buraya Loading Component gelecek</div>;
  }

  return (
    <>
      {dataNews.map((item , index) => (
        <Link to={`/news/${index}`}  key={item.id} >
          <div className="post-card">
            <div className="card-img">
              <img className="img-fluid" src={item.imageUrl} alt=""></img>
            </div>
            <div className="card-info">
              <div className="card-top">
                <div className="card-top-date">
                  <span>{item.date}</span>
                </div>
                <div className="card-top-comment">
                  <i className="far fa-comment"></i>
                </div>
              </div>
              <div className="card-detail">
                <h3 className="card-detail-title">{item.title}</h3>
                <p className="card-detail-text">{item.content}</p>
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom-social">
                <NavbarSocial />
              </div>
              <div className="card-bottom-button">
                <a href>Continue reading..</a>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Mainpost;
