import React from "react";
import "./App.css";
import HomePage from "../pages/HomePage/homepage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>VEGETABLE PAGE</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/vegetable" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
