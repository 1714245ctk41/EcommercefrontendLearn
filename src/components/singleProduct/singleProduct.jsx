import React from "react";
import "./singleProduct.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/CartActions";

const SingleProduct = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div key={id} className="product-tab ">
      <div className="product-tab_image">
        <a className="product-tab_image-main" href="goolge.com">
          <img src={imageUrl} alt="" />
        </a>

        {/* <div className="product-tab_image-back-cont">
          <a href="google.com" className="product-tab_image-back">
            <img src="../images/vegetables/3-311x311.jpg" alt="" />
          </a>
        </div> */}
      </div>

      <div className="product-tab-nav">
        <div className="product-tab-nav-content">
          <span onClick={() => addItem(item)}>
            <i className="fas fa-shopping-bag"></i>
          </span>
          <span>
            <i className="far fa-eye"></i>
          </span>
          <span>
            <i className="fas fa-heart"></i>
          </span>
        </div>
      </div>
      <div className="product-tab_content-title-price">
        <h3>{name}</h3>
        <span>$ {price}</span>
      </div>
    </div>
  );
  // *<!--kết thúc một sản phẩm-- >
};

const mapDispatchToProps = (dispatch) => ({
  //* passing item vào addItem
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(SingleProduct);
