import React from 'react';
import {Link} from "react-router-dom";
import imagecarbon1 from "../source/codezen 1.png";
import imagecarbon2 from "../source/codezen 2.png";

function Pagereact(){

    return (

      <React.Fragment>
        <div className="container">


          <div  className="bigtitle font">Instalacion</div><br/>
  

          <strong>npm install --save react-router-dom:</strong> para instalar la aplicacion react-router en react, ( soltar el comando dentro del proyecto de react ).<br/>
 
          <br/>
          <hr></hr><br/>

          <div  className="bigtitle">Componentes de React-router</div><br/>
          <br/>
           <strong>BrowserRouter:</strong> es el primer elemento de react router que vamos a utilizar y va servir para especificar que lo que vamso a escribir dentro va a ser un react router.<br/>
          <strong>Layout:</strong> el layout como tal no existe es un elemento que vamos a crear, dentro del layout vamos a meter una function y le pasaremos como parametros los props, metemos en este elemento lo que queramos (navbar, ...) y despues desglosamos nuestros this.props.children para ir heredando lo que vamos a ir agregando en los routers.<br/>
          <strong>Switch:</strong> es el elementos que nos va a servir para transformar cada route con cada ruta distinta.<br/>
          <strong>Route exact path="/inicio" component=Inicio:</strong> exact path= es para darnos un valor exacto, sino ponemos exact aunque la url no sea igual nos va a llebar a ese componente, component= para concatenar el componente que queremso definir, para esto tenemos que importar el componente ; import Inicio from './pageone/Inicio'. Si queremos hacer un directorio que nos lleve a una pagina de error lo escribimos sin concatenar un componente y sin el atributo exact -> Route path="/";. para pasar una id como url lo usaremos :, -> route exact path='badge/:badgeid/edit' component=... .<br/>

          <br/>
          <strong>Link To=:</strong> Se sustituyen en todo el proyecto los a y href= por Link y To= para que se mantengan todos enlaces en multipageapp.<br/>
          <br/>

          <code>react router tiene props para hacer distintas acciones</code><br/>
          <br/>
          <strong>this.props.history.push('/badge'):</strong>  para manipular mediante programación el historial del navegador. Redirige la web a otra url despues de terminar su operacion, en este caso te redirige a /badge .<br/>
          <strong>this.props.match.params.badgeId:</strong> recoge el parametro del url que trae el id. En este caso el badgeid.<br/>
          <strong>this.props.location:</strong> lleva información sobre la ubicación actual.<br/>

          <br/>
          <hr></hr><br/>

        </div>
      </React.Fragment>

    );


}

export default Pagereact;
