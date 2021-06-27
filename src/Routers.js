import React from 'react';
import {
  BrowserRouter,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import md5 from 'md5';


import Layout from './Router/Layout';
import Error from './Router/load/Error';
import Git from './Router/Git';
import Javascript from './Router/Javascript';
import Inicio from './Router/Inicio';
import Pagereact from './Router/React';
import Laravel from './Router/Laravel';
import htmlyCss from './Router/htmlyCss';
import Mysql from './Router/Mysql';
import MongoDb from './Router/MongoDb';
import Wordpress from './Router/wordpress';
import Express from './Router/Express';
import Docker from './Router/Docker';
import Vue from './Router/Vue';

//Modulos-yetii
import buildEnglish from './Router/yetii/Inicio.js';
import ModalYetii from './Router/yetii/Modal_yetii';


import Image from './source/archivocomprimido.png';
import ImageYetii from './source/yetii.png';
import Archivos from './source/archivos.zip';

import America from './source/america.jpg';


import {Link} from "react-router-dom";

class Router extends React.Component {
  
  state={
    verifyLanguage: true,
    openModal: false,
    value: "",
    result:"",
    acceso:md5(false),
  }

  //abrir cerrar modal con logica de acceso al toggle
  
  closeModal = () => {
    this.setState({openModal: false});
    if(this.state.acceso === md5(true)) {
      this.setState({verifyLanguage: false})}
  }

  openModal = () => {
    if(this.state.acceso === md5(false)) {
      this.setState({openModal: true})
    }else if (this.state.acceso === md5(true)){
      this.setState(({
        verifyLanguage : !this.state.verifyLanguage
        
       }));

    }}

  //validacion 

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleClick = () => {
    if(this.state.result == md5(`Blaster EE4`)) {
      this.setState({acceso: md5(true)});
      setTimeout(() => this.closeModal(), 1300)
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
      
            <Router basename={process.env.PUBLIC_URL}>
                <Layout verifyLanguage = {this.state.verifyLanguage} >

                  <React.Fragment>
                    <div className="col-12 ">
                      <div className="col-6">
                        <div className=" toggle custom-control custom-switch  ">

                          <a href={Archivos} download><img src={Image} className="ImageDescarga"/></a>
               
                          <input onClick={this.openModal} type="checkbox" className=" checkboxtoggle custom-control-input " id="customSwitches"></input>
                          <label  htmlFor="customSwitches"> <img className="yetii" src={ImageYetii}></img></label>
                          
                          <div className="position_button ">
                            {this.state.verifyLanguage && <Link to="/ruta-siete"><button type="submit" className="button btn btn-secondary" >Javascript</button></Link>}
                            {!this.state.verifyLanguage && 
                              <Link to="/english"><button type="submit" className="button  btn btn-secondary" >English </button> </Link>}
                         </div>
                       
                       
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                    <Switch>
                      
                      {this.state.verifyLanguage && <Route exact path="/" component={Inicio}/> || <Route exact path="/" component={buildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-uno" onClick={this.openModal} component={Wordpress}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/git" component={Git}/> || <Route exact path="/ruta-cinco" component={buildEnglish}/>}
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/docker" component={Docker}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-siete" component={Javascript}/> || <Route exact path="/ruta-siete" component={buildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/react" component={Pagereact}/> || <Route exact path="/ruta-cuatro" component={buildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/vue" component={Vue}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/laravel" component={Laravel}/> || <Route exact path="/ruta-tres" component={buildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/express" component={Express}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-dos" component={htmlyCss}/> || <Route exact path="/ruta-dos" component={buildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-seis/mysql" component={Mysql}/> }
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-seis/mongodb" component={MongoDb}/> }
                      

                      
                      
                      {!this.state.verifyLanguage && <Route exact path="/english" component={buildEnglish}/>}
                      {!this.state.verifyLanguage && <Route exact path="/ruta-uno" component={buildEnglish}/>}

                      
                      <Route path="*" component={Error}/>
            
                    </Switch>

                </Layout>
          
            </Router>

                    
        <ModalYetii
            acces={this.state.acceso }
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            >

                <form onSubmit={this.handleSubmit}>
                  <input type="password" className="input_yetii form-control form-control-lg" placeholder="password" onChange={this.handleChange} value={this.state.value}></input>
                  <input type="button" className="button_yetii btn btn-light" value="Entrar" onClick={this.handleClick} name={this.state.value}></input>
                </form>

        </ModalYetii>


      </React.Fragment>
    );
  }

}

export default Router;
