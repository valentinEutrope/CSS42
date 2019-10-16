import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";

import theme from "../../config/theme";

const Home = () => {
  return (
    <div className="container">
      <Title
        component="h1"
        value="CSS42"
        font={theme.fonts.defaultFont}
        color={theme.colors.primary}
      />
      <Link to="/typography">Typography</Link>
    </div>
  );
};

export default Home;
