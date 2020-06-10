import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// const showAll = (evt) => {
//   const cateLink = document.getElementsByClassName("menu-item");

//   for (let i = 0; i < cateLink.length; i++) {
//     cateLink[i].className = cateLink[i].className.replace(" menu-active", "");
//   }
//   evt.currentTarget.className += " menu-active";
// };
// function close() {
//   document.getElementsByClassName("logreg-container")[0].style.opacity = 1;
//   setTimeout(
//     () =>
//       (document.getElementsByClassName("logreg-container")[0].style.display =
//         "block"),
//     500
//   );
// }

const Header = () => (
  <nav className="menu">
    <input
      type="checkbox"
      href="google.com"
      className="menu-open"
      name="menu-open"
      id="menu-open"
      defaultChecked
    />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>

    <Link to="/" className="menu-item">
      <i className="fas fa-home" />
    </Link>

    <Link to="/shop" className="menu-item">
      <i className="fas fa-store" />
    </Link>

    <a href="google.com" className="menu-item">
      {" "}
      <i className="fas fa-heart" />{" "}
    </a>
    <a href="google.com" className="menu-item">
      {" "}
      <i className="fas fa-shopping-bag" />{" "}
    </a>
    {/* <p href="google.com" className="menu-item">
      {" "}
      <i className="fas fa-user" />{" "}
    </p> */}
  </nav>
);

export default Header;
