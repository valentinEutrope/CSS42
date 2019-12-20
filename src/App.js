import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BaseCSS, Container, Row, Col } from "styled-bootstrap-grid";
import Providers from "./Providers";
import Home from "./pages/Home";
import Typography from "./pages/Typography";

import "./index.scss";

const App = () => {
  return (
    <Providers>
      <div className="app">
        <BaseCSS />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/typography" component={Typography} />
        </Router>
      </div>
    </Providers>
  );
};

export default App;
