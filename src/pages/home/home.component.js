import React from 'react'

import "../../App.css"


import Introduction from "../introduction/introduction.component";
import MyServices from "../my-services/my-services.component";
import About from "../about/about.component";
import MyWork from "../my-work/my-work.component";
import Contact from "../contact/contact.component";

function Home() {
    return (
        <>
        <Introduction />
        <MyServices />
        <About />
        <MyWork />
        <Contact />      
        </>
    )
}

export default Home
