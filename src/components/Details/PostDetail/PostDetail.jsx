import Loading from "components/Loading/Loading";
import NavbarSocial from "components/Navbar/NavbarSocial/NavbarSocial";
import { React } from "react";
import PostComment from "../PostComment/PostComment";
import "./style.scss";

function PostDetail({ selectNes }) {
  if (selectNes === undefined) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="details-fix">
        <div className="container ">
          <div className="details-top">
            <h2 className="details-title">{selectNes.title}</h2>
            <div className="details-date">
              <span>{selectNes.author}</span>
              <span>{selectNes.date}</span>
            </div>
          </div>
          <div className="detail-content">
            <div className="detail-img">
              <img className src={selectNes.imageUrl} alt=""></img>
            </div>
            <div className="detail-description">
              <p>{selectNes.content}</p>
            </div>
          </div>
          <div className="details-bottom">
            <div className="bottom-tag">
              <span>#Trending</span> <span>#Video</span> <span>#Featured</span>
            </div>
            <div className="details-social">
              <NavbarSocial />
            </div>
          </div>
          <PostComment />
        </div>
      </div>
    </>
  );
}

export default PostDetail;
