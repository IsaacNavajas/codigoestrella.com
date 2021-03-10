import React from 'react';
import Modal from './Modal';

import imageUno from "../source/codezenMongodbUno.png";
import imageDos from "../source/codezenMongodbDos.png";
import imageTres from "../source/codezenMongodbTres.png";
import imageCuatro from "../source/codezenMongodbCuatro.png";
import BotonMongodb from "./botonMongodb";

class MongoDb extends React.Component{
  state = {
    openModal: false,
  };

  
  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){
  
    return (

      <React.Fragment>
        <div className="container">
          <h2  className="bigtitle font">Instalación</h2><br/>
          <p><strong>Mongo_db_atlas :</strong> <a href="https://www.mongodb.com/cloud/atlas/signup" target="https://www.mongodb.com/cloud/atlas/signup" className="Link">Link_de_Descarga</a>, vamos a configrar el clouster, vamos a security y en dabase acces creamos una nueva bd y elgimos los privilegios "atlas admin significa que puede borrar las bd sin restricciones.", desde security accedemos a "Network Access" y metemos la id para bd.</p>
          <p><strong>Mongo db en la consola y Mongo db compass :</strong> https://www.mongodb.com/ - software - comunity server - download aceptamos los termino y ya tenemos compass abierto, para poder usar la bd desde la consola. vamos a la ruta C:\Program Files\MongoDB\Server\4.4\bin y accedemos a la consola desde mongo.exe. </p>
          <br/>
            <button 
              className="buttonphp btn btn-dark" 
              onClick={this.openModal}
              >
                Tipados y operadores de mongodb
            </button>
          <br/>
          <br/><hr></hr><br/>


          <h2  className="bigtitle font">Trabajar con mongo bd</h2><br/>
          <p><u className="subrayado"><strong>Configurar nuestro cluster de atlas usando la consola y la interfaz grafica: </strong> </u> </p>
          <ul>
            <li><p><strong>Mongo shell: </strong>desde mongo_db_atlas vamos a "connect" - "Connect with the mongo shell" - (copiamos el enlace y lo pegamos en la consola de CMD desde la ruta C:\Program Files\MongoDB\Server\4.4\bin y no desde mongo.exe) antes de pulsar enter al pegarlo cambias el myFirstDatabase por tu nombre de usuario y la password es la de la bd de security.</p></li>
            <li><p><strong>Interfaz grafica (Mongo_atlas): </strong>vamos a software - compass - try it now - download "lo descomprimimos y lo instalamos" "rellenamos el campo que nos demande el programa (localhot = cluster1.pdawh.mongodb.net)". . </p></li>
          </ul>
          <p><u className="subrayado"><strong>Conectarnos despues de haber echo la configuracion: </strong> </u> </p>
          <ul>
            <li><p>Desde mongo_atlas cluster - connecct - connect your application (copiamos el url y lo pegamos directamente en la consola de cmd desde el enrutamiento C:\Program Files\MongoDB\Server\4.4\bin) y ya estaremos conectados para trabajar en la consola.</p></li>
            <li><p><strong>Interfaz grafica (Mongo_atlas): </strong>vamos a software - compass - try it now - download "lo descomprimimos y lo instalamos" "rellenamos el campo que nos demande el programa (localhot = cluster1.pdawh.mongodb.net)". . </p></li>
          </ul>
          <hr></hr><br/>
          <p>los drivers son librerias que utilizamos para comunicar nuestra aplicacion con las dbs para esto usaremos un gestor de dependenciass como lo es en Node con; npm install mongodb --save</p>
          <p>Mongo db internamente tiene bases de datos - colecciones (semejante en Mysql a tablas) - y "Documento" / Bson (es igual que Json pero con acceso de tipados mayor).</p>
          
          <hr></hr><br/>

          <div className="col-12">
            <div className="col-6 mitad">
          <h2  className="bigtitle font">Comandos en mongo shell</h2><br/>

          <p><strong>show dbs: </strong>nos va a mostrar las bds que en ese momento se encuentran dentro de nuestro cluster.</p>
          <p><strong>use "nombre de la db": </strong>nos va a crear una nueva db.</p>
          <p><strong>db: </strong>nos va a mostrar las dbs que tenemos actualmente.</p>
          <p><strong>show collections: </strong>nos mostrara todas las colecciones que tenemos.</p>
          <p><strong>db.inventory.findOne(): </strong>que nos traiga el primer documento que encuentre y nos lo muestre en consola.</p>
          <p><strong>CNTRL + L: </strong>limpiar consola.</p>
          <br/><h2  className="bigtitle-h2 font">Comandos <strong>crud</strong> desde shell;</h2><br/>
          <p><strong>db."nombre_de_la_coleccion".insertOne("_Json_"): </strong>guarda un documento en una coleccion de nuestra base de datos, recoge un valor Json. Si no insertamos un _id mongodb nos lo insertara automaticamente.</p>
          <p><strong>db."nombre_de_la_coleccion".insertMany("_Json_"): </strong>sirve para meter un Json con muchos valores, mongodb tiene atomicidad lo que quiere decir que que si alguna operacion no se escribe hace rollback es decir que no se guarda el documento en la base de datos. </p>
          <p><strong>db."nombre_de_la_coleccion".help(): </strong>nos entrega los comandos que podemos utilizar.</p>
          <p><strong>db."nombre_de_la_coleccion".find("dentro de un _Json_ el valor_a_encontrar").pretty: </strong> par encontrar un valor que tengamos dentro del documento de esa coleccion, podemos utilizar el metodo <strong>pretty</strong> para que el Json se vea de forma mas amigable, podemos tambien utilizar <strong>.count()</strong> para ver cuantos filtros retorna. </p>
          <p><strong>db."nombre_de_la_coleccion".findOne("dentro de un _Json_ el valor_a_encontrar"): </strong>nos va a traer solo un valor, por ejemplo si le pedimos el valor de _id:objectId() nos va a traer solo ese documento donde _id es 1.</p>
          <p><strong>db."nombre_de_la_coleccion".updateOne("valor_que_queremos_cambiar", "valor_cambiado"): </strong>el valor <strong>$set</strong> es un paradigma para cambiar el valor. Tambien podemos usar <strong>db."nombre_de_la_coleccion".update</strong> para setear varios valores;</p>

            <img src={imageUno} className="imagehtml col-12" title="imagen ejemplo .updateOne()"></img> <br/>

          <p><strong>db."nombre_de_la_coleccion".deleteOne("dentro de un _Json_ el valor_a_eliminar"): </strong> para borrar solo un valor del filtro indicado. CUIDA EL FILTRO PORQUE PUEDE LLEGAR A BORRAR TODO EL DOCUMENTO.</p>
          <p><strong>db."nombre_de_la_coleccion".deleteMany("dentro de un _Json_ el valor_a_eliminar"): </strong> para borrar todos los valores del filtro indicado. CUIDA EL FILTRO PORQUE PUEDE LLEGAR A BORRAR TODO EL DOCUMENTO.</p>

          <br/>
          <hr></hr><br/>
          </div>
          <div className="col-6 mitad">
          <h2  className="bigtitle font">Crud desde compass</h2><br/>
          
          <p>Es la forma mas facil y practica para trabajar y mirar el status de nuestro cluster.</p>

          <p><strong>Instalación: </strong>abrimos compass escribimos nuestro host (ej; localhot = cluster1.pdawh.mongodb.net) activamos el toggle SRV Record, autentificamos con nuestro usuario y contraseña y escribimos los datos de security de mongo__atlas.</p>
          <p><strong>bd: </strong>nos mobemos a nuestra bd deseada.</p>
          <ul>
            <li><p><strong>+ create collection: </strong>para crear una coleccion nueva tambien podemos mobernos a las que ya tengamos.</p></li>
            <li><p><strong>+ add data: </strong>para crear insertar o exportar un nuevo documento (BSON).</p></li>
              <ul className="nido">
                <li><p><strong>- insert: </strong>guarda las mismas reglas que un Json. Para hacer la interfaz mas amigable tiene un boton donde solo vamos a tener que agregar filtros y definiendo su tipado, despues de la interpretacion pulsamos Insert.</p></li>
                <li><p><strong>- export: </strong>para crear insertar o exportar un nuevo documento (BSON).</p></li>
              </ul>
          </ul>
          <p><strong>Filter: </strong>para filtrar tenemos un buscador directamene dentro de un Json para poder buscar lo que necesitemos automagicamente.</p>
          <p><strong>VIEWS: </strong>Si no nos agradan las vistas tambien podemos cambiarlas para un mejor comprendimiento de las colecciones.</p>
          <p><strong>update: </strong>si queremos cambiar los datos vamos directamente al dato, lo modificamos directamente y pulsamos UPDATE.</p>
          <p><strong>delete: </strong>vamos a la parte de la derecha de los documentos de las colecciones, pulsamos la basura para borra y aceptamos el DELETE.</p>
          <hr></hr><br/>
          </div>

          </div>

          <h2  className="bigtitle">Esquemas y relacciones</h2><br/>
          <br/>
          <p><strong>one to one :</strong> cuando tengammos relacciones 1 a 1 las buenas practicas nos dice que dentro del documento tenemos que hacer documentos embebidos con una llave, .</p>
          <p><strong>one to many :</strong> uando relacciones 1 a M haremos documentos embebidos con arrays cuando la información no va a cambiar muy frecuentemente y referencias cuando si. (Las referencias van a ser un arreglo de todas las entidades que vamos a referenciar por ejemplo books:[ObjectId("e34fgsz"), ObjectId("e357788z"), ObjectId("mcsc223")] ).</p>
          <p><strong>$addToSet :</strong> es un <a href="#Linkrelacciones" className="Link" onClick={this.openModal}>operador</a> que agrega un valor a un array solo en el caso de que este valor no exista, lo usamos para relacciones de uno a otro con metodo de agregar .</p>
          <p>en este ejemplo $addToSet lo que hace es agregar el objeto curso al arreglo cursos, si el arreglo cursos no existe lo crea.</p>
          <img src={imageTres} className="imagehtml col-12" title="imagen de $addToSet" id="Linkrelacciones"></img> <br/>
          
          <p><strong>$pull :</strong> es un <a href="#Linkrelacciones" className="Link" onClick={this.openModal}>operador</a> remueve o borra de un array el o los valores que coincidan con la condición que se le especifique,  lo usamos para relacciones de uno a otro con metodo de retirar dependiendo del filtro .</p>
          <p>en este ejemplo $pull recibe un filtro y todos los elementos del arreglo cursos que cumplan con ese filtro serán borrados.</p>
          <img src={imageCuatro} className="imagehtml col-12" title="imagen de $pull"></img> <br/>

          <p><strong>.skip() :</strong> es un <a href="#Linkrelacciones" className="Link" onClick={this.openModal}>operador</a> <strong>db.carreras.find({}).skip(40).limit(10)</strong> si queremos las carreras ubicadas en los puestos 40 y 50 .</p>
          <p><strong>.limit() :</strong> es un <a href="#Linkrelacciones" className="Link" onClick={this.openModal}>operador</a> <strong>db.carreras.find({}).limit(10)</strong> esta nos traerá las primeras 10 carreras. .</p>
          <u className="subrayado">Como vemos skip() y limit() son muy útiles para realizar paginaciones</u>

          <br/>
          <hr></hr><br/>
          

          <h2  className="bigtitle" >Queries</h2>
          <img src={imageDos} className="imagehtml col-12" title="imagen queries mongodb"></img> <br/>
          <p>//esta escrito con Phyton, tiene carreras formadas por cursos formadas por clases.</p>
          <p>De cada funcion saca el argumento que implementa una coleccion, ya que estamso utilizando relacciones a muchos y las empaqueta por dentro de las peticiones que queremos devolver .</p>
          
          <br/>
          <hr></hr><br/>
          
        </div>

            <Modal
                isOpen={this.state.openModal}
                onClose={this.closeModal}
                title = 'L o g i c a - d e - m o n g d b'
                >
                  <BotonMongodb/>
            </Modal>

      </React.Fragment>

    );
  }

}

export default MongoDb;
