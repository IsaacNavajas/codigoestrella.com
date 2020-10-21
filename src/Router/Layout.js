import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import image from "../source/spam.png";


function Router(props){

    return (
      <React.Fragment>

        <Navbar/>

        <img src={image} className="imagewaterdrop"></img>
        
        <div className="childrens">{props.children}</div>


        <Footer/>
        
      </React.Fragment>
    );


}

export default Router;
