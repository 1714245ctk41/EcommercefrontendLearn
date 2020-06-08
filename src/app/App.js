import React from "react";
import "./App.css";
import HomePage from "../pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../pages/shop/shop";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
