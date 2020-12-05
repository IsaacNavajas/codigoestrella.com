import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './Router/Layout';
import Error from './Router/load/Error';
import Git from './Router/Git';
import Javascript from './Router/Javascript';
import Inicio from './Router/Inicio';
import Pagereact from './Router/React';
import Laravel from './Router/Laravel';
import htmlyCss from './Router/htmlyCss';
import Mysql from './Router/Mysql';
import JQuery from './Router/JQuery';
import Json from './Router/Json';
import Wordpress from './Router/wordpress';
import Reactrouter from './Router/Reactrouter';
import BuildEnglish from './Router/English/buildEnglish';
import InicioEnglish from './Router/English/InicioEnglish';
import ApiLumen from './Router/ApiLumen';
import Docker from './Router/Docker';
import Vue from './Router/Vue';
import Apple from './Router/Apple';

import Image from './source/archivocomprimido.png';
import Archivos from './source/archivos.zip';



class Router extends React.Component {
  
  state={
    verifyLanguage: true,
    count: 0,
    language: 'Spanish'
  }

  render(){

    this.handleClick = () => {

      
      this.setState(state => ({
        count : state.count +1,
        
      }));

      if(this.state.count === 0){
        this.setState(() => ({
          language : 'English',
          verifyLanguage : false
        }));
        }
      
      else if(this.state.count % 2){
        this.setState(() => ({
          language : 'Spanish',
          verifyLanguage : true
        }));
      }

      else if(this.state.count ** 1){
        this.setState(() => ({
          language : 'English',
          verifyLanguage : false
        }));
      }

    }
  
    return (


      <React.Fragment>
      
            <BrowserRouter>
                <Layout verifyLanguage = {this.state.verifyLanguage} >

                  <React.Fragment>
                    <div className="col-12 ">
                      <div className="col-7">
                        <div className=" toggle custom-control custom-switch  ">
                          <a href={Archivos} download><img src={Image} className="ImageDescarga"/></a>
               
                          <input onClick={() => this.handleClick()} type="checkbox" className=" checkboxtoggle custom-control-input " id="customSwitches"></input>
                          <label className="custom-control-label " for="customSwitches"> <img className=" America" src="https://i.postimg.cc/s2Xz8CmJ/40ab7a26c90ee682a23e2dd55f978a65.jpg"></img></label>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                    <Switch>
                      
                      {this.state.verifyLanguage && <Route exact path="/" component={Inicio}/> || <Route exact path="/" component={InicioEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/git" component={Git}/> || <Route exact path="/ruta-cinco" component={BuildEnglish}/>}
                      {this.state.verifyLanguage && <Route exact path="/ruta-cinco/docker" component={Docker}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-siete" component={Javascript}/> || <Route exact path="/ruta-siete" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/react" component={Pagereact}/> || <Route exact path="/ruta-cuatro" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/ruta-cuatro/vue" component={Vue}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/laravel" component={Laravel}/> || <Route exact path="/ruta-tres" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-tres/api-lumen" component={ApiLumen}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-dos" component={htmlyCss}/> || <Route exact path="/ruta-dos" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-seis" component={Mysql}/> || <Route exact path="/ruta-seis" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/jquery" component={JQuery}/>}


       
                      <Route exact path="/ruta-apple"><Apple lenguaje= {this.state.language}/></Route>

                      {this.state.verifyLanguage && <Route exact path="/json" component={Json}/>}

                      {this.state.verifyLanguage && <Route exact path="/react-router" component={Reactrouter}/>}

                      {this.state.verifyLanguage && <Route exact path="/ruta-uno" component={Wordpress}/> || <Route exact path="/ruta-uno" component={BuildEnglish}/>}

                      
                      
                      <Route path="*" component={Error}/>
            
                    </Switch>

                </Layout>
          
            </BrowserRouter>

      </React.Fragment>
    );
  }
  
}

export default Router;
