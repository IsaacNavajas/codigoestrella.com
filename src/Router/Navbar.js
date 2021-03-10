import React from 'react';
import '../styles.css';
import image from '../source/image 1.png';
import {Link} from "react-router-dom";

import logoExpress from '../source/logo-express.png';
import logoVue from '../source/logo-vue.png';
import logoLaravel from '../source/logo-laravel.png';
import logoReact from '../source/logo-react.png';
import logoDocker from '../source/logo-docker.png';
import logoGit from '../source/logo-git.png';
import logoMysql from '../source/logo-mysql.png';
import logoMongo from '../source/logo-mongodb.png';




class Navbar extends React.Component{
  
  render(){
    return (
      <React.Fragment>

          <div className="imag col-12 container-fluid">

            <div className="position col-6">

                    {
                     this.props.verifyLanguage && <h1 className="title-codigoestrella-spanish col-12" id="title">Codigoestrella.com</h1>
                      ||
                      <h1 className="title-codigoestrella-english col-12" id="title">yetii.exe [root💀;]</h1>
                    }



            </div>
              <img src={image} className="imagen col-6" alt="imagen robot"></img>
            </div>

        <nav className="menu col-12">
                {this.props.verifyLanguage && 
                    <ul>
                      
                      <li className=" col-2"><Link to="/ruta-uno" className="menubuttons btn btn-dark" >WORDPRESS</Link></li>
                      <li className=" col-2"><Link to="/ruta-dos" className="menubuttons btn btn-dark" >HTML & CSS</Link></li>
                 
                      <div className="col-2">
                    <div className=" hover ">
                      {
                        //Submenu-backend
                        <ul>
                          <li className=" col-12"><Link to="/ruta-tres/laravel" className="drop-down-menubuttons-nivelone btn btn-dark">
                            <img src={logoLaravel} className="logo-nav" alt="logo Express"></img> LARAVEL</Link>
                          </li>
                          <li className=" col-12"><Link to="/ruta-tres/express" className="drop-down-menubuttons-niveltwo btn btn-dark" >
                            <img src={logoExpress} className="logo-nav" alt="logo Express"></img> EXPRESS.JS</Link>
                          </li>
                        </ul> 
                      }
                    </div>      
                    </div> 
                      <li className=" col-2"><div className="menubuttons btn btn-dark laravel" >BACKEND ⇵</div></li>
          
                      <div className="col-2">
                    <div className=" hover ">
                      {     
                        //Submenu-frontend
                        <ul>
                          <li className=" col-12"><Link to="/ruta-cuatro/react" className=" drop-down-menubuttons-nivelone btn btn-dark" >
                            <img src={logoReact} className="logo-nav" alt="logo Express"></img>REACT.JS</Link>
                          </li>
                          <li className=" col-12"><Link to="/ruta-cuatro/vue" className=" drop-down-menubuttons-niveltwo btn btn-dark" >
                            <img src={logoVue} className="logo-nav" alt="logo Express"></img>VUE.JS</Link>
                          </li>
                        </ul> 
                      }
                    </div>      
                    </div>               
                      <li className=" col-2"><div className="hoveruno menubuttons btn btn-dark react" >FRONTEND ⇵</div></li>
                                       
                    <div className="col-2">
                    <div className=" hover ">
                      {
                        //Submenu-backend
                        <ul>
                          <li className=" col-12"><Link to="/ruta-cinco/docker" className="drop-down-menubuttons-nivelone btn btn-dark">
                            <img src={logoDocker} className="logo-nav" alt="logo Express"></img>DOCKER</Link>
                          </li>
                          <li className=" col-12"><Link to="/ruta-cinco/git" className="drop-down-menubuttons-niveltwo btn btn-dark" >
                            <img src={logoGit} className="logo-nav" alt="logo Express"></img>GIT</Link>
                          </li>
                        </ul> 
                      }
                    </div>      
                    </div> 
                      <li className=" col-2"><div className="hoveruno menubuttons btn btn-dark " >CONSOLA ⇵</div></li>
          
                      <div className="col-2">
                    <div className=" hover ">
                      {
                        //Submenu-backend
                        <ul>
                          <li className=" col-12"><Link to="/ruta-seis/mysql" className="drop-down-menubuttons-nivelone btn btn-dark" >
                            <img src={logoMysql} className="logo-nav" alt="logo Express"></img>MYSQL</Link>
                          </li>
                          <li className=" col-12"><Link to="/ruta-seis/mongodb" className="drop-down-menubuttons-niveltwo btn btn-dark" >
                            <img src={logoMongo} className="logo-nav" alt="logo Express"></img>MONGO DB</Link>
                          </li>
                        </ul> 
                      }
                    </div>
                    </div>
                      <li className=" col-2"><div className="hoveruno menubuttons btn btn-dark" >BBDD ⇵</div></li>
                    </ul>
                }

                {!this.props.verifyLanguage && 
                    <ul>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-uno">WINDOWS</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-dos">LINUX</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-tres">CONSOLA</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-cuatro">BBDD</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-cinco">PROGRAMAS UTILES</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-seis">OTROS</Link></li>
                    </ul>
                }   
               
        </nav>
      </React.Fragment>
    );
  
  }
}
export default Navbar;
