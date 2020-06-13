import React from "react";
import SHOP_DATA from "../../pages/shop/shopData";
import "./ProductContainer.scss";
import SingleProduct from "../singleProduct/singleProduct";
// import ChooseCategory from "./ChooseCategory";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop_data: SHOP_DATA,
    };
  }
  category = (evt, id) => {
    this.setState({
      shop_data: SHOP_DATA.filter((item) => item.id === id),
    });
    const cateLink = document.getElementsByClassName("category-item");
    console.log(cateLink);
    for (let i = 0; i < cateLink.length; i++) {
      cateLink[i].className = cateLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  };
  showAll = (evt) => {
    const cateLink = document.getElementsByClassName("category-item");

    for (let i = 0; i < cateLink.length; i++) {
      cateLink[i].className = cateLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    this.setState({
      shop_data: SHOP_DATA,
    });
  };

  render() {
    const { shop_data } = this.state;
    return (
      <div className="row medium-4">
        {/* <!-- khối sản phẩm-- > */}

        <div id="photos">
          <div
            className="category-item active"
            onClick={(evt) => this.showAll(evt)}
          >
            <span>All</span>
          </div>
          {SHOP_DATA.map((item, id) => (
            <div
              key={item.id}
              className="category-item"
              onClick={(evt) => this.category(evt, item.id)}
            >
              <span> {item.title}</span>
            </div>
          ))}
          {shop_data.map((item, id) =>
            item.items.map((it, index) => (
              <SingleProduct key={it.id} item={it} />
            ))
          )}
        </div>
      </div>
    );
  }
}
export default ProductContainer;
