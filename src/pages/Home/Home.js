import React, { useContext } from "react";
import Button from "../../components/base/Button";
import { ThemeContext } from "styled-components";

const Home = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="container">
      <Button>Get Started</Button>
    </div>
  );
};

export default Home;
