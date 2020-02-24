import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BaseCSS, Container, Row, Col } from "styled-bootstrap-grid";
import Providers from "./Providers";
import Home from "./pages/Home";

import "./index.scss";

const App = () => {
  return (
    <Providers>
      <div className="app">
        <BaseCSS />
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    </Providers>
  );
};

export default App;
