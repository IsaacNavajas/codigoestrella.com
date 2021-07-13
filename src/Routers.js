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


import {Link} from "react-router-dom";

class Routers extends React.Component {
  
  state={
    verifyLanguage: true,
    count:2,
    mode:'white',
  }

  render(){
    this.handleClick = () => {
      this.setState(state => ({
        count:state.count + 1
      }))
      if(this.state.count%2){
        this.setState(() => ({
          verifyLanguage: false,
        }))
      }
      if(this.state.count**2){
        this.setState(() => ({
          verifyLanguage: false,
        }))
      }
    }
    return (


      <React.Fragment>
      
          <Router basename={process.env.PUBLIC_URL}>
                <Layout verifyLanguage = {this.state.verifyLanguage} >

                  <React.Fragment>
                    <div className="col-12 ">
                      <div className="col-6">
                        <div className=" toggle custom-control custom-switch  ">

                          <a href={Archivos} download><img src={Image} className="ImageDescarga"/></a>
               
                          <input onClick={this.handleClick} type="checkbox" className=" checkboxtoggle custom-control-input " id="customSwitches"></input>
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

      </React.Fragment>
    );
  }

}

export default Routers;
