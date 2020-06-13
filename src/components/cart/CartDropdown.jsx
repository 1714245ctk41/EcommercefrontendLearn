import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./cartDropdown.scss";

const CartDropdown = () => (
  <div className="cartDropdown-container">
    <div className="cartDropdown-content">hello world</div>

    <CustomButton className="cartDropdown-go-to-checkout">
      Go to checkout
    </CustomButton>
  </div>
);

export default CartDropdown;
