import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="head-1 primary-text">CSS42</h1>
      <Link to="/typography">Typography</Link>
    </div>
  );
};

export default Home;
