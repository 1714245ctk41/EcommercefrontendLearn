import React from "react";
import SHOP_DATA from "./shopData";
import "./shop.scss";
import ProductContainer from "../../components/shopComponents/ProductContainer";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div>
        <div className="divide"></div>

        <div className="divide"></div>
        <ProductContainer />
      </div>
    );
  }
}

export default ShopPage;
