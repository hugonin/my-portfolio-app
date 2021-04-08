import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";

import ScrollToTop from "./components/scroll-to-top/scrollToTop.component"
import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component"
import MyServices from "./pages/my-services/my-services.component";
import About from "./pages/about/about.component";
import MyWork from "./pages/my-work/my-work.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./pages/footer/footer.component";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={MyServices} />
          <Route path="/about" component={About} />
          <Route path="/work" component={MyWork} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
