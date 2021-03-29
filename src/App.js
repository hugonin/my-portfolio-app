import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import Introduction from './components/introduction/introduction.component';
import MyService from './components/my-service/my-service.component';
import About from './components/about/about.component';
import MyWork from './components/my-work/my-work.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
     <Header />
     <Introduction />
     <MyService />
     <About />
     <MyWork />
     <Contact />
     <Footer />
     
    </div>
  );
}

export default App;
