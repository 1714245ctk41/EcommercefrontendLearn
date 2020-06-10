import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  // {/* start menu-iteme */ }
  <div className="menu-item-1">
    <div className="content">
      <img src={imageUrl} alt="" />
      <div className="subtitle-1">
        <div
          className="subtitle-contain"
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          <i className="fas fa-plus"></i>
          <span>
            <i>SEE NOW</i>
          </span>
        </div>
      </div>
      <h1
        className="title"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        {title}
      </h1>
    </div>
  </div>
  // {/* end menu-item */ }
);
export default withRouter(MenuItem);
