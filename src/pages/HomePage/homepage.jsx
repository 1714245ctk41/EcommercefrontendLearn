import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";
import Header from "../../components/header/Header";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <div className="divide"></div>
    <Directory />
  </div>
);

export default HomePage;
