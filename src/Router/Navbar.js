import React from 'react';
import '../styles.css';
import image from '../source/image 1.png';
import {Link} from "react-router-dom";


class Navbar extends React.Component{
  
  render(){
    return (
      <React.Fragment>

          <div className="imag col-12 container-fluid">

            <div className="position col-6">

                    {
                     this.props.verifyLanguage && <h1 className="title-codigoestrella-spanish col-12" id="title">Codigoestrella.com</h1>
                      ||
                      <h1 className="title-codigoestrella-english col-12" id="title">Codigoestrella.com</h1>
                    }



            </div>
              <img src={image} className="imagen col-6" alt="imagen robot"></img>
            </div>

        <nav className="menu col-12">
                {this.props.verifyLanguage && 
                    <ul>
                      
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-uno">WORDPRESS</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-dos">HTML & CSS</Link></li>
                 
                      <div className="col-2">
                    <div className=" hover ">
                      {
                        //Submenu-backend
                        <ul>
                          <li className=" col-12"><Link className="drop-down-menubuttons-nivelone btn btn-dark" to="/ruta-tres/laravel">LARAVEL</Link></li>
                          <li className=" col-12"><Link className="drop-down-menubuttons-niveltwo btn btn-dark" to="/ruta-tres/api-lumen">API / LUMEN</Link></li>
                          <li className=" col-12"><Link className="drop-down-menubuttons-nivelthree btn btn-dark" to="/ruta-tres/node">NODE.JS</Link></li>
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
                          <li className=" col-12"><Link className=" drop-down-menubuttons-nivelone btn btn-dark" to="/ruta-cuatro/react">REACT.JS</Link></li>
                          <li className=" col-12"><Link className=" drop-down-menubuttons-niveltwo btn btn-dark" to="/ruta-cuatro/vue">VUE.JS</Link></li>
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
                          <li className=" col-12"><Link className="drop-down-menubuttons-nivelone btn btn-dark" to="/ruta-cinco/git">GIT</Link></li>
                          <li className=" col-12"><Link className="drop-down-menubuttons-niveltwo btn btn-dark" to="/ruta-cinco/docker">DOCKER</Link></li>
                        </ul> 
                      }
                    </div>      
                    </div> 
                      <li className=" col-2"><div className="hoveruno  menubuttons btn btn-dark " >CONSOLA ⇵</div></li>
          

                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-seis">MYSQL</Link></li>
                    </ul>
                }

                {!this.props.verifyLanguage && 
                    <ul>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-uno">ADVERBS</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-dos">VERBS</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-tres">ING / ED - WILL</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-cuatro">VOCABULARY</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-cinco">PREPOSITION</Link></li>
                      <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/ruta-seis">OTHER</Link></li>
                    </ul>
                }   
               
        </nav>
      </React.Fragment>
    );
  
  }
}
export default Navbar;
