import React from 'react';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import Introduction from './components/introduction/introduction.component';
import MyServices from './components/my-services/my-services.component'
import About from './components/about/about.component';
import MyWork from './components/my-work/my-work.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
     <Navbar />
     <Introduction />
     <MyServices />
     <About />
     <MyWork />
     <Contact />
     <Footer />     
    </>
  );
}

export default App;
