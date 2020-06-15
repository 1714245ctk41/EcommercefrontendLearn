import React from "react";
import "./CheckoutPage.scss";
import CartItem from "../../components/cart/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/CartSelectors";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div>
      <div className="divide"></div>

      <div className="divide"></div>
      <div className="row medium-4">
        <h1 style={{ textAlign: "center" }}>CHECK OUT</h1>
        <div className="checkout-page">
          <table className="checkout-table">
            <thead>
              <tr>
                <th>sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng cộng</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    <div className="checkout-item">
                      <img src={cartItem.imageUrl} alt="" />
                      <span>{cartItem.name}</span>
                    </div>
                  </td>
                  <td>$ {cartItem.price}</td>
                  <td>{cartItem.quantity}</td>
                  <td>$ {cartItem.quantity * cartItem.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-total">
            <h2>TOTAL: $ {total}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
