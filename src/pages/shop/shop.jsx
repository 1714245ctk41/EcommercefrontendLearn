import React from "react";
import SHOP_DATA from "./shopData";
import "./shop.scss";
import ProductContainer from "../../components/shopComponents/ProductContainer";
import Header from "../../components/header/Header";
import LoginRegis from "../LoginRegis/LoginRegis";

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
        <LoginRegis />
        <Header />
        <div className="divide"></div>
        <ProductContainer />
      </div>
    );
  }
}

export default ShopPage;
