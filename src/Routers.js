import React from 'react';
import {
  BrowserRouter,
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
import Wordpress from './Router/wordpress';
import Express from './Router/Express';
import Docker from './Router/Docker';
import Vue from './Router/Vue';

//Modulos-yetii
import buildEnglish from './Router/yetii/buildEnglish';
import ModalYetii from './Router/yetii/Modal_yetii';
import imageYetii from './source/yetii-2.png';

import Image from './source/archivocomprimido.png';
import ImageYetii from './source/yetii.png';
import Archivos from './source/archivos.zip';

import logoKaliLinux from './source/logo-kali-linux.png';


import {Link} from "react-router-dom";

class Router extends React.Component {
  
  state={
    verifyLanguage: true,
    count: 2,
    openModal: false,
    value: "",
    result:"",
    acceso:Boolean(false),
  }

  //abrir cerrar modal con logica de acceso al toggle
  
  closeModal = () => {
    this.setState({openModal: false});
    if(this.state.acceso === true) {
      this.setState({verifyLanguage: false, count: 3})}
  }

  openModal = () => {
    if(this.state.acceso === false) {
      this.setState({openModal: true})
    }else if (this.state.acceso === true){
      this.setState(state => ({
        count : state.count +1,
        
       }));
  
      if(this.state.count % 2){
        this.setState(() => ({
  
          verifyLanguage : true
        }));
      }
  
      else if(this.state.count ** 1){
        this.setState(() => ({
    
          verifyLanguage : false
        }));
      }
  
    
    }}

  //validacion 

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleClick = () => {
    if(this.state.result == md5(`fSherpa`)) {
      this.setState({acceso: true});
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
      
            <BrowserRouter>
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
                              <Link to="/ruta-siete"><button type="submit" className="button btn btn-secondary" >
                                <img src={logoKaliLinux} className="logo-nav" alt="logo Express"></img> Kali Linux</button>
                              </Link>}
                         </div>
                       
                       
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                    <Switch>
                      
                      {this.state.verifyLanguage && <Route exact path="/" component={Inicio}/> || <Route exact path="/" component={buildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/git" component={Git}/> || <Route exact path="/ruta-cinco" component={buildEnglish}/>}
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/docker" component={Docker}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-siete" component={Javascript}/> || <Route exact path="/ruta-siete" component={buildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/react" component={Pagereact}/> || <Route exact path="/ruta-cuatro" component={buildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/vue" component={Vue}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/laravel" component={Laravel}/> || <Route exact path="/ruta-tres" component={buildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/express" component={Express}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-dos" component={htmlyCss}/> || <Route exact path="/ruta-dos" component={buildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-seis" component={Mysql}/> || <Route exact path="/ruta-seis" component={buildEnglish}/>}
                      

                      

       

                      {this.state.verifyLanguage && <Route exact path="/ruta-uno" component={Wordpress}/> || <Route exact path="/ruta-uno" component={buildEnglish}/>}

                      
                      
                      <Route path="*" component={Error}/>
            
                    </Switch>

                </Layout>
          
            </BrowserRouter>

                    
        <ModalYetii
            acces={this.state.acceso }
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            >

              <img src={imageYetii} className="ImageModalYetii"/>

                <form onSubmit={this.handleSubmit}>
                  <input type="password" className="input_yetii form-control form-control-lg" placeholder="password" onChange={this.handleChange} value={this.state.value}></input>
                  <input type="button" className="button_yetii btn btn-light" value="Enviar" onClick={this.handleClick} name={this.state.value}></input>
                </form>

        </ModalYetii>


      </React.Fragment>
    );
  }

}

export default Router;
