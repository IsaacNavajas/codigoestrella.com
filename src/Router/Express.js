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
            <p><strong>express --view=pug myapp: </strong> nos va a generar un Framework usando como template engine a Pug, también podemos elegir otra opción con <strong>Express -h</strong> . </p>
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
            <p><strong>npm i nodemon -D: </strong> Para instalar nodemon pero no dentro del proyecto "solo para desarrollar". </p>
            <p><strong>npm install express nodemon: </strong> Para instalar express junto a nodemon directamente "es opcional, sustituyente a npm install express --save". </p>
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
              <li><p><strong>.all:</strong> es un método especial, carga funciones del middleware en una misma ruta con todos los métodos.</p></li>
            </ul>
          <p><strong>PATH:</strong> la ruta que vamos a desarrollar donde agregaremos los endpoints del URI, también podemos agregar rutas dinámicas agregando dos puntos :id, si el path lo definimos asi '*' significa que queremos hacer cuando las rutas no correspondan a ninguna otra definida.</p>
          <p><strong>HANDLER:</strong> la función closure que queremos que se desarrolle a los middleware.</p>
            <ul>
              <li><p><strong>err:</strong> cada vez que un enrasamiento tenga este parámetro deberemos colocarlo al final del archivo por convención, sirve para coger errores o lanzarnos.</p></li>
              <li><p><strong>req:</strong> para enviar la petición del usuario al middleware, los parámetros mas usados son <strong>req.params</strong> para recoger parámetros de la ruta URL, se suele utilizar para los id's <strong>req.query</strong> para los parámetros de consulta de la URL después del ? y <strong>req.body</strong> para recoger los valores del cuerpo como por ejemplo cuando enviamos un valor desde un input<u className="subrayado"><strong> estos campos van a ser undefined si no agregamos el bodyParser.json(), bodyParser.urlencoded() como se requiere en la documentación.</strong></u> </p></li>
              <li><p><strong>res:</strong> para recoger la petición del servidor al usuario, el parámetros mas usado es <strong>res.json()</strong> para crear un json con el middleware parse-body.</p></li>
              <li><p><strong>next:</strong> pasa al siguiente handler para reenviar la function, funciona como callback, si no lanzamos este parámetro en las funciones del middleware no va a pasar al servidor.</p></li>
            </ul>
          <p><strong>app.listen():</strong> para fijar el puerto donde queremos producir nuestra aplicación, el primer valor devuelve el puerto directamente y el segundo valor se ca a ejecutar con el servidor suele ser un console.log para validar el puerto.</p>
          <p><strong>app.set(_valor_ , _asignacion_):</strong> asignar valores para setearlos, el primer parámetro va a ser el nombre y el segundo el valor a asignar, podemos desplegar los valores con <strong>app.get('valor_del_app.set()')</strong>.</p>

          <br/>
          <hr className="linea-discontinua"></hr>
          <br/>
          <p><strong>express.static(root, [options]):</strong> para traer elementos estáticos como imágenes, css, javascript... el root especifica la ruta, también podemos usar <strong>express.static(__dirname, 'public')</strong> con app.use('/static', express.static('carpeta')) nos devolverá una ruta http://localhost:3000/static/images/imagen.jpg para ver una imagen dentro de la carpeta carpeta/images/imagen.jpg. También podemos usar <strong>app.use('/static', express.static(path.join(__dirname, 'public')))</strong> que son rutas mas seguras.</p>
          <p><strong>app.use(myfunction):</strong> para cargar funciones del middleware en una dirección particular para todos los métodos de peticiones consiguientes, tiene dos argumentos <strong>app.use('/api', routesApi)</strong> el primero es si queremos asignarle una ruta, si esta función viene de otro archivo lo llamaremos; var arch = require('./my-arch.js') y despues usando use app.use(arch(option1: '1')). También podemos llamarlo directamente <strong>const routesApi = require('./my-arch.js');</strong></p>
          <p><strong>const mysql = require('mysql');:</strong> para importar el comportamiento de un export o una ruta <strong>const db = require('../db');</strong>.</p>
          <p><strong>module.exports = router;:</strong> para exportar los módulos exceptuando en el archivo raíz, para importarlos lo aremos con <strong>const router = require('./_nombre_del_archivo');</strong> también podemos importar paquetes directamente relacionados con node_modules <strong>const mysql = require('mysql');</strong> en vez de tener que buscar sus rutas.</p>
          <br/>
          <hr></hr><br/><br/>

                    
          <h2  className="bigtitle-h2">middleware:</h2>

          <br/><br/>
          
          <p>Los middleware son los que están en medio, entre el usuario y el servidor, los vamos a asignar a traves de funciones aun que no es necesario crear nuevos middleware sino traer ya proyectos de middleware creados.</p>
          <p><strong>morgan:</strong> <code>Un logger de solicitudes HTTP para Node.js</code>.</p>
          <p><strong>cors:</strong> <code>Middleware para habilitar CORS en rutas o la aplicación</code>.</p>
          <p><strong>bodyParser:</strong> para instalarlo con <strong>npm i -S body-parser</strong>, luego lo requerimos en nuestro archivo <strong>const bodyParser = require('body-parser');</strong> y para usarla <strong>app.use(bodyParser.json());</strong>, body-parser es usado cuando lo que queremos devolver son formatos .json, express es libiano, body-parser es necesario para utilizar cuerpos que vienen en json, si quisiéramos otros formatos utilizaremos otros middleware.</p>
          <p><strong>helmet:</strong> <code>nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP</code>.</p>
          <p><strong>express-debug:</strong> <code>Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando.</code>.</p>
          <p><strong>express-slash:</strong> <code>Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas</code>.</p>
          <p><strong>passport:</strong> <code>es un middleware que nos permite establecer diferentes estrategias de autenticaron a nuestras aplicaciones.</code>.</p>
          <br/>
          <hr></hr><br/><br/>




          <h2  className="bigtitle-h2">Enrugados express.Router():</h2>
          <br/><br/>
        
          <p><strong>const express = require('express'):</strong> en nuestro archivo enrugados también vamos a necesitar de express asi que volvemos a llamarlo.</p>
          <p><strong>const router = express.Router();:</strong> para poder utilizar la dependencia router. . </p>
          <p><strong>router.get():</strong> para definir la dependencia con el verbo HTML, los atributos de estos verbos funcionan igual que con app. los verbos post, put, patch que vayan a guardar valores de un <strong>req.body</strong> <u className="subrayado">vamos a usar; <strong>app.use(bodyParser.json());</strong> y <strong>app.use(bodyParser.urlencoded("abro_llaves" extended: false "cierro_llaves"))</strong> </u>. </p>
          <p><strong>module.exports = router;:</strong> para exportar el los routers del archivo router. </p>
           
          <p><strong>↓ ↓ ↓ ↓ PARA LLAMAR AL ARCHIVO ROUTER EN EL ARCHIVO RAÍZ ↓ ↓ ↓ ↓</strong></p>
          <p><strong>const postRoute = require('./routes/posts');:</strong> para importar el archivo posts.js a la raíz del proyecto. </p>
          <p><strong>app.use('/posts', postRoute);:</strong> para usar el directorio de posts.js desde la url /posts. </p>
                   
          <br/>
          <hr></hr><br/><br/>

  
          <h2  className="bigtitle-h2">Template engine:</h2>
          <br/><br/>
        
          <p><strong>app.set("views", path.join(__dirname, "views")):</strong> para especificar en que carpeta van a estar nuestras rutas, tendremos que traer path con; <strong>const path = require("path")</strong> path es un modo nativo y es por si hay algún problema entre directorios que lo ejecute siempre en la ruta donde esta el aplicativo.</p>
          <p><strong>app.use('/products', prodctuRoutes):</strong> le damos un url a un archivo para definir que todas esas rutas van a estar dentro de prodctuRoutes, vamos a definir la ruta de productRoutes <strong>const productRouter = require('./routes/productos');</strong>. Usamos use por que lo que queremos hacer es usar ese router para ese elemento. </p>
          <p><strong>/routes/product.js:</strong> aquí vamos a definir los valores que queremos mandar por ejemplo en una constante que sea un json y a definir nuestras rutas con express.router() . </p>
          <p><strong>express.static(__dirname, 'public'):</strong> padrenuestros elementos estáticos como el css, javascript e imágenes, ya solo faltaría implementarlos en nuestros archivos por ejemplo; imc src="static/images/image.png".</p>
          
          
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle-h2">.env:</h2>
          <br/><br/>
        
          <p><strong>npm install dotenv:</strong> para instalar el paquete.</p>
          <p><strong>require('dotenv').config():</strong> para importarlo </p>
          <p><strong>.env:</strong> genera un archivo .env para crear las variables de entorno respetando sus nomenclaturas <strong>DB_HOST=localhost DB_USER=root</strong>. </p>
          <p><strong>process.env.DB_HOST:</strong> para llamar desde el archivo a la variable de entorno de .env.</p>
          
          
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle-h2">Mongoose (Bd):</h2>
          <br/><br/>
        
          <p><u className="subrayado"><strong>↓ ↓ ↓ ↓ archivo raíz ↓ ↓ ↓ ↓</strong></u></p>
          <p><strong>npm install mongoose:</strong> para instalar mongoose para poder trabajar junto a moongodb.</p>
          <p><strong>npm install dotenv:</strong> sirve para generar y configurar el archivo .env, tenemos que crear el archivo .env y generar las variables de entorno y el el archivo raíz del proyecto importar el dotenv con <strong>require('dotenv/config');</strong>. La forma de interactuar con estas variables ser la misma que en node.js <strong>process.env.DB_CONNECTION</strong> .</p>
          <p><strong>const mongoose = require('mongoose');:</strong> para importar en nuestro archivo raíz mongoose. </p>
          <p><strong>mongoose.connect(process.env.DB_CONNECTION,"abro_llaves" useNewUrlParser : true "cierro_llaves", () =&gt; console.log('connect');):</strong> lo usaremos para conectarnos con nuestra base de datos mongodb, es aconsejable ayudarnos en esta practica con la consola "npm run start".</p>
          <ul>
            <li><p><strong>DB_CONNECTION: </strong>esta va a ser la conexión con la mongodb, vamos a concatenarlo con el .env para salvaguardar los datos, para encontrar el url de nuestra base de datos nos registramos en mongodb y pulsamos en el cluster connect - connect your application y seguimos las instrucciones.</p></li>
            <li><p><strong>"abro_llaves" useNewUrlParser : true "cierro_llaves": </strong>nos ayuda a evitar algunos errores en la ejecución.</p></li>
            <li><p><strong>() =&gt; console.log('connect'): </strong>para comprobar que funciona nuestro servicio con la bd.</p></li>
          </ul>
          <br/>
          <p><u className="subrayado"><strong>↓ ↓ ↓ ↓ a partir de aquí encapsularemos los archivos del proyecto dentro de /model/post.js ↓ ↓ ↓ ↓</strong></u></p>
          <p><strong>const express = require('mongose');:</strong> importaremos mongoose para trabajar con el.</p>
          <p><strong>const PostSchema = mongoose.Schema():</strong> dentro del Schema encapsularemos los valores que queremos darle al documento de la bd, podemos definir cada valor entre llaves con type "tipado" y required "Booleano".</p>
          <p><strong>module.exports = mongoose.model('Posts', PostSchema);:</strong> exportamos el Schema con el valor Post. </p>
          <br/>
          <p><u className="subrayado"><strong>↓ ↓ ↓ ↓ a partir de aquí encapsularemos los archivos del proyecto dentro de /router/post.js ↓ ↓ ↓ ↓</strong></u></p>
          <p><strong>const post = require('../models/Post');:</strong> importamos el Schema de mongoose.</p>
          <p><strong>npm install body-parser:</strong> sirve para enviar lo que tenemos dentro de los router a las bd, importaremos en nuestro archivo raiz <strong>const bodyParser = require('body-parser');</strong> y <strong>app.use(bodyParser.json())</strong>, seria recomendable que después de esto comprobar su funcionamiento con postman.</p>
          <p><strong>const mongoose = require('mongoose');:</strong> para importar en nuestro archivo raíz mongoose. </p>
          <p><strong>mongoose.connect(process.env.DB_CONNECTION,"abro_llaves" useNewUrlParser : true "cierro_llaves", () =&gt; console.log('connect');):</strong> lo usaremos para conectarnos con nuestra base de datos mongodb, es aconsejable ayudarnos en esta practica con la consola "npm run start".</p>

          <br/>
          <hr></hr><br/><br/>

          
          <h2  className="bigtitle-h2">Mysql (Bd):</h2>
          <br/><br/>
        
          <p><strong>npm i mysql -D:</strong> para instalar las dependencias de mysql desde dev.</p>
          <p><strong>const mysql = require('mysql');:</strong> para trabajar con mysql desde el archivo.</p>
          <p><strong>const connection = mysql.createConnection():</strong> para crear la conexión con la db, va a tener varios valores; host, user, password, database, entre otro...</p>
          <p><strong>connection.connect():</strong> para conectar y validar la conexion con la db.</p>
          <p><strong>connection.query('_QUERY_MYSQL', (err, result) =&gt; ...):</strong> crea el query, el primer valor es donde se pasa el input de Mysql, ej; 'SELECT * FROM productos' y el segundo el condicionamiento dentro de una function que tiene dos parámetros err y result para generar el error o la validacion del query.</p>
          
          <p><u className="subrayado"><strong>↓ ↓ ↓ ↓ ERROR; <code>Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client</code> ↓ ↓ ↓ ↓</strong></u></p>
          <p><strong>LTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';:</strong> desde workbench introducimos este código cambiando el root, localhost sino estamos en localhost y el password por el nuestro.</p>
          <p><strong>FLUSH PRIVILEGES;:</strong> lanzamos la actualización.</p>
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
