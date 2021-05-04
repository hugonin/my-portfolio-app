import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ScrollToTop from "./components/scroll-to-top/scrollToTop.component";

import Home from "./pages/home/home.component";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
