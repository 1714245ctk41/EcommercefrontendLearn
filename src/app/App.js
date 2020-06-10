import React from "react";
import "./App.scss";
import HomePage from "../pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "../pages/shop/shop";
// import "./../components/LoginRegis/LoginRegister.scss";
// import "./../pages/LoginRegis/LoginRegis.scss";

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
