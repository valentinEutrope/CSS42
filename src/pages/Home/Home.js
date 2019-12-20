import React from "react";
import Button from "../../components/base/buttons";
import Title from "../../components/custom/Title";

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
      <Button color={theme.colors.primary}>Default button</Button>
    </div>
  );
};

export default Home;
