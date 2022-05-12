import React from "react";

/* Components */
import Products from "./Products";

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-container">
        <div className="content">
          <h1>NEW ARRIVALS</h1>
          <h4>CHECK OUT ALL THE TRENDS</h4>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
