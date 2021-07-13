
import React from 'react';
import md5 from 'md5';

import Selector from './wordpress/selectorWordpress';
import { useHistory } from "react-router-dom";

class wordpress extends React.Component{
  
  state={
    acceso: md5(false),
    value : ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleClick = () => {
    let history = useHistory();
    if(this.state.result == md5(`%Satirion%44`)) {
      this.setState({acceso:md5(true)});
      return this.props.history.push('/path')
      
      };

    this.setState({value: ""});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({result: md5(`${event.target.value}`)});
  }


  render(){

    return (

      <React.Fragment>

            
            <br/> <br/> 
        <div className="container">

        {this.state.acceso == md5(false) &&
          <div id="formulario" >
            <center>

   
          <form onSubmit={this.handleSubmit}>
          <br/><br/>
          <br/><br/>
                    <input type="password" className="input_yetii form-control form-control-lg" placeholder="password" onChange={this.handleChange} value={this.state.value}></input>
                    <input type="button" className="button_yetii btn btn-dark" value="Entrar" onClick={this.handleClick} name={this.state.value}></input>
          </form>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <br/> <br/> <br/> <br/> <br/> <br/>
          </center>
        </div>
        
          ||
          this.state.acceso == md5(true) && <div id="formulario" className="lineagrisdesaparecer"></div>}




 
        {this.state.acceso== md5(true) && this.useHistory().push('/ruta-uno')}



          </div>
    
      </React.Fragment>

    );
    }    

}

export default wordpress;
