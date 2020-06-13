import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";

const CartIcon = ({ toggleCartHidden }) => (
  <p
    href="google.com"
    className="menu-item cartIcon"
    onClick={toggleCartHidden}
  >
    {" "}
    <i className="fas fa-shopping-bag" />
    <span>0</span>
  </p>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
