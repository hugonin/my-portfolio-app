import React, { useState} from 'react'

import "../../App.css"


import Introduction from "../introduction/introduction.component";
import MyServices from "../my-services/my-services.component";
import About from "../about/about.component";
import MyWork from "../my-work/my-work.component";
import Contact from "../contact/contact.component";
import Navbar from '../../components/navbar/navbar.component';
import Footer from '../footer/footer.component';
import Sidebar from '../../components/sidebar/sidebar.component';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
   

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Introduction />
        <MyServices />
        <About />
        <MyWork />
        <Contact /> 
        <Footer /> 
        </>
    )
}

export default Home
