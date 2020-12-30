import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


class Router extends React.Component{

  render(){

    return (
      <React.Fragment>

        <Navbar verifyLanguage={this.props.verifyLanguage}/>
        
        {this.props.children}
        
        {this.props.verifyLanguage}

        <Footer verifyLanguage={this.props.verifyLanguage}/>
        
      </React.Fragment>
    );

  }
   

}

export default Router;
