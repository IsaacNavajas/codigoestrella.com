import React from 'react';
import md5 from 'md5';
import wallpaper from "../../source/wallpaper_yetii.png";

import pruebaYetii from './pruebaYetii.js';

class Module extends React.Component{
  state = {
    value: "",
    result:"",
  };

  handleClick = (event) => {
    event.preventDefault();
    if(this.state.result == md5(`hola`)) {console.log('acceso permitido.')};
    this.setState({value: ""});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.setState({result: md5(`${event.target.value}`)});
  }

  render(){
    return (
      <React.Fragment>
          <div className="container-fluid caja_validacion">
            <div className="caja_yetii">
              <img className="bandera_yetii" src={wallpaper}></img>
              <div>
                <form className="form_Yetii">
                  <input type="password" className="input_yetii form-control form-control-lg" placeholder="password" onChange={this.handleChange} value={this.state.value}></input>
                  <input type="button" className="button_yetii btn btn-light" value="Submit" onClick={this.handleClick} name={this.state.value}></input>
                </form>
              </div>
            </div>
            
            { this.state.result == md5(`hola`) && (
                      <div className="container">
                      <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
              <p>holaaaaaaaaaaaaaaaa tioooooooooooo</p>
            </div>
            )}
             
            
          </div>

      </React.Fragment>
    );
    
  }



}

export default Module;
