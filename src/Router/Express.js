import React from 'react';

import Modal from './Modal';
import Node from './Node';
import BotonArgumentosExpress from './BotonArgumentosExpress';

import imagecarbon1 from "../source/codezenExpressUno.png";
import imagecarbon2 from "../source/codezenExpressDos.png";

class Express extends React.Component{

  state={
    openModal: false,
    verifyLanguage:this.props.verifyLanguage
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      
      <React.Fragment>
        <div className="container">


          <h2  className="bigtitle-h2 font">Instalación:</h2><br/>
          <p><strong>npm install express --save: </strong> Para instalar expressjs. </p>

          <div className="col-12">
            <div className="col-6 mitad">
            <center><p><u className="subrayado">Crear un proyecto desde el <strong>Framework</strong> de Express;</u></p></center>
            <hr className="linea-discontinua"></hr>
            <br/>
            <p><strong>npx express-generator: </strong> Para instalar el generador del Framework. </p>
            <p><strong>express --view=pug myapp: </strong> nos va a generar un Framework usando como template engine a Pug, tambien podemos elegir otra opcion con <strong>Express -h</strong> . </p>
            <p><strong>npm install: </strong> Para instalar Node. </p>
            <p><strong>set DEBUG=myapp:* & npm start: </strong> Para arrancar el proyecto. </p>
            <p><strong>.gitignore: </strong> es conveniente instalar un .gitignore con <strong>node_modules</strong> para ignorar esas dependencias. </p>
            <a 
              href="https://expressjs.com/en/starter/generator.html" 
              target="https://expressjs.com/en/starter/generator.html" 
              className="Link">
                mas_informacion. 
            </a><br/><br/>
            </div>

            <div className="col-6 mitad">
            <center><p><u className="subrayado">Utiliza Express<strong> directamente</strong>;</u></p></center>
            <hr className="linea-discontinua"></hr>
            <br/>
            <p><strong>npm init: </strong> Para instalar las dependencias de node. </p>
            <p><strong>npm install express --save: </strong> Para inicializar Express. </p>
            <p><strong>.gitignore: </strong> es conveniente instalar un .gitignore con <strong>node_modules</strong> para ignorar esas dependencias. </p>
            <br/>

            <a 
              href="https://expressjs.com/en/starter/installing.html" 
              target="https://expressjs.com/en/starter/installing.html" 
              className="Link">
                mas_informacion. 
            </a><br/><br/>
            </div>
            <img src={imagecarbon2} className="imagecarbon"  title="imagen Express Routing"></img>
            <p>La forma de trabajar con Express es implementando los script de <strong>package.json</strong> para usar nodemon primero hay que instalarlo con <strong>npm i -D nodemon</strong>, el index va a ser el archivo que queremos renderizar.</p>
            <br/>
          </div>

          <br/><br/>

          <ul>
          <li><BotonArgumentosExpress/></li><br/>

          <li>
            <button 
                        className="buttonphp btn btn-dark" 
                        onClick={this.openModal}
                        >
                      Node.js
            </button>
          </li>
        </ul>

          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle-h2">Enrutamiento:</h2>

          <div className=" col-12"><img src={imagecarbon1} className="imagecarbon"  title="imagen Express Routing"></img></div>
          <p><strong>METHOD:</strong> son las peticiones o verbos HTML.</p>
            <ul>
              <li><p><strong>.get:</strong> para traer o leer datos.</p></li>
              <li><p><strong>.post:</strong> para crear datos.</p></li>
              <li><p><strong>.put:</strong> para modificar/remplazar un campo en concreto como un form completo.</p></li>
              <li><p><strong>.patch:</strong> para modificar/remplazar un elemento de un campo como por ejemplo un solo input de un form.</p></li>
              <li><p><strong>.delete:</strong> para eliminar.</p></li>
              <li><p><strong>.all:</strong> es un metodo especial, carga funcionesl del middelware en una misma ruta con todos los metodos.</p></li>
            </ul>
          <p><strong>PATH:</strong> la ruta que vamos a desarroyar donde agregaremos los endpoints del URI, tambien podemos agregar rutas dinamicas agregando dos puntos :id, si el path lo definimos asi '*' significa que queremos hacer cuando las rutas no correspondan a ninguna otra definida.</p>
          <p><strong>HANDLER:</strong> la funcion closure que queremos que se desarroye a los middelware.</p>
            <ul>
              <li><p><strong>err:</strong> cada vez que un enrutamiento tenga este parametro deberemos colocarlo al final del archivo por convencion, sirve para coger errores o lanzarlos.</p></li>
              <li><p><strong>req:</strong> para enviar la peticion del usuario al middelware.</p></li>
              <li><p><strong>res:</strong> para recoger la peticion del servidor al usuario.</p></li>
              <li><p><strong>next:</strong> pasa al siguiente handler para reneviar la function, funciona como callback, si no lanzamos este parametro en las funciones del middelware no va a pasar al servidor.</p></li>
            </ul>
          <p><strong>.listen():</strong> para fijar el puerto donde queremos producir nuestra aplicacion, el primer valor devuelve el puerto directamente y el segundo un callback.</p>
          <p><strong>.set:</strong> asignar valores, el primer parametro va a ser el nombre y el tercero el valor a asignar.</p>

          <br/>
          <hr className="linea-discontinua"></hr>
          <br/>
          <p><strong>express.static(root, [options]):</strong> para traer elementos estaticos como imagenes, css, javascript... el root especifica la ruta, tambien podemos usar <strong>express.static(__dirname, 'public')</strong> con app.use('/static', express.static('carpeta')) nos devolvera una ruta http://localhost:3000/static/images/imagen.jpg para ver una imagen dentro de la carpeta carpeta/images/imagen.jpg. Tambien podemos usar <strong>app.use('/static', express.static(path.join(__dirname, 'public')))</strong> que son rutas mas seguras.</p>
          <p><strong>app.use(myfunction):</strong> para cargar funciones del middleware en una dirección particular para todos los métodos de peticiones consiguientes, tiene dos argumentos <strong>app.use('/api', routesApi)</strong> el primero es si queremos asignarle una ruta, si esta funcion viene de otro archivo lo llamaremos; var arch = require('./my-arch.js') y despues usando use app.use(arch(option1: '1')). Tambien podemos llamarlo directamente <strong>const routesApi = require('./my-arch.js');</strong></p>
     
          <br/>
          <hr></hr><br/><br/>

                    
          <h2  className="bigtitle-h2">middelware:</h2>

          <br/><br/>
          
          <p>Los middelware son los que estan en medio, entre el usuario y el servidor, los vamos a asignar a traves de funciones aun que no es necesario crear nuevos middelware sino traer ya proyectos de middelware creados.</p>
          <p><strong>module.exports = "nombre_de_la_funcion":</strong> los middelware, json o logica la vamos a encapsular en otro archivo independiente dentro de una function, clase o una variable al final de este archivo debemos exportar esta para definir su salida y para traerlo a nuestro archivo seria con; <strong>const Funct = require("nombre_de_la_funcion");</strong>.</p>
          <p><strong>morgan:</strong> .</p>
          <p><strong>cors:</strong> .</p>
          <p><strong>bodyParser:</strong> para instalarlo con <strong>npm i -S body-parser</strong>, luego lo requerimos en nuestro archivo <strong>const bodyParser = require('body-parser');</strong> y para usarla <strong>app.use(bodyParser.json());</strong>, body-parser es usado cuando lo que queremos devolver son formatos .json, express es libiano, body-parser es necesario para utilizar cuerpos que vienen en json, si quisieramos otros formatos utilizaremos otros middelware.</p>
          <p><u className="subrayado"><strong>** YA NO ES NECESARIO INSTALAR BODYPARSER NI UTILIZARLO PORQUE SE PUEDE USAR DIRECTAMENTE CON app.use(express.json()); SIEMPRE QUE TRABAJEMOS CON .JSON **</strong> </u></p>
          <p><strong>helmet:</strong> .</p>
          <p><strong>express-debug:</strong> .</p>
          <p><strong>express-slash:</strong> .</p>
          <p><strong>passport:</strong> .</p>
          <br/>
          <hr></hr><br/><br/>




          <h2  className="bigtitle-h2">Enrutador express.Router():</h2>
          <br/><br/>
        
          <p><strong>const express = require('express'):</strong> en nuestro archivo enrutador tambien vamos a necesitar de express asi que volvemos a llamarlo.</p>
          <p><strong>coexpress.Router():</strong> para poder utilizar la dependiencia router. . </p>
          <p><strong>router.get():</strong> para definir la dependiencia con el verbo HTML, los atributos de estos verbos funcionan igual que con app. . </p>
          <p><strong>express.Router():</strong> para poder utilizar la dependiencia router. . </p>
          <br/>
          <hr></hr><br/><br/>

  

  
          <h2  className="bigtitle-h2">Template engine:</h2>
          <br/><br/>
        
          <p><strong>app.set("views", path.join(__dirname, "views")):</strong> para especificar en que carpeta van a estar nuestras rutas, tendremos que traer path con; <strong>const path = require("path")</strong> path es un modo nativo y es por si hay algun problema entre directorios que lo ejecute siempre en la ruta donde esta el aplicativo.</p>
          <p><strong>app.use('/products', prodctuRoutes):</strong> le damos un url a un archivo para definir que todas esas rutas van a estar dentro de prodctuRoutes, vamos a definir la ruta de productRoutes <strong>const productRouter = require('./routes/productos');</strong>. Usamos use por que lo que queremos hacer es usar ese router para ese elemento. </p>
          <p><strong>/routes/product.js:</strong> aqui vamos a definir los valores que queremos mandar por ejemplo en una constante que sea un json y a definir nuestras rutas con express.router() . </p>
          <p><strong>express.static(__dirname, 'public'):</strong> paranuestros elementos estaticos como el css, javasccript e imagenes, ya solo faltaria implementarlos en nuestros archivos por ejemplo; imc src="static/images/image.png".</p>
          
          
          <br/>
          <hr></hr><br/><br/>

          <br/><br/>
        

        </div>



        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'N o d e'
            >
              <Node/>
        </Modal>



      </React.Fragment>

    );



  }

}

export default Express;
