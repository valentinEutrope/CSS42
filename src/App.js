import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Typography from "./pages/Typography";

import "./index.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/typography" component={Typography} />
      </Router>
    </div>
  );
}

export default App;
