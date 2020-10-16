import React from 'react';

import '../styles.css';


import image from "../source/spam.png";
import Loading from "./load/Loading";



class Inicio extends React.Component{
  state = {
    image:null
  }

  componentDidMount(){
    this.time= setTimeout(() => { { this.setState({image: image})} }, 1000);
  }

  componentWillUnmount(){
    clearTimeout(this.time)
  }

  render(){
    return (
      <React.Fragment>

        <React.Fragment>

          <center>
            {!this.state.image && (<Loading/>)}
            {this.state.image && (<img src={this.state.image} className="imagestart"></img>)}
            
          </center>

        </React.Fragment>


      </React.Fragment>
    );
    
  }



}

export default Inicio;
