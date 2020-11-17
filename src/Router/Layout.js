import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import image from "../source/spam.png";


class Router extends React.Component{

  render(){

    return (
      <React.Fragment>

        <Navbar verifyLanguage={this.props.verifyLanguage}/>

        <img src={image} className="col-6 imagewaterdrop"></img>
        
        {this.props.children}
        
        {this.props.verifyLanguage}

        <Footer verifyLanguage={this.props.verifyLanguage}/>
        
      </React.Fragment>
    );

  }
   

}

export default Router;
