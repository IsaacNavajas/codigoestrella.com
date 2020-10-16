import React from 'react';
import Modal from './Modal';
import ReactRouter from './Reactrouter';
import ModalJson from './ModalJson';

import imagecarbon1 from "../source/codezen 1.png";
import imagecarbon2 from "../source/codezen 2.png";
import imagecarbon4 from "../source/codezen 4.png";
import imagecarbon5 from "../source/codezen 5.png";
import imagecarbon6 from "../source/codezen 6.png";

class Pagereact extends React.Component{
  state={
    openModal: false
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      <React.Fragment>
        <div className="container">

        

          <br/>


          <h2  className="bigtitle font">Instalacion</h2><br/>
  

          <p><strong>npx create-react-app my-app: </strong>crear una aplicacion react con el nombre my-app. </p>
          <p><strong>npm run start:</strong> para conectarse al hosting virtual.</p>
          <p><strong>npm install --save react-router-dom:</strong> para instalar la aplicacion react-router en react, ( soltar el comando dentro del proyecto de react ).</p>
          <br/>
          <p><strong>npm rm --save package-name:</strong> para desinstalar un paquete instalado en Node (npm), con --save lo elimina tambien del package.json .</p>

          
          <br/><br/>
          <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Reacct-router
          </button>


          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle">Componentes de React</h2><br/>
          <br/>
          <span className="subrayado"> La forma de pasar un componente dentro de otro es en forma de elemento, si le damos parametros a estos elementos podemos pasarlos a esos componentes a traves de <strong>this.props</strong>. Tambien podemos heredar los props con <strong>this.props.children</strong>. </span> 
          <br/><br/>
          <p><strong>ReactDom.render(__que__, __donde__):</strong> nos va a renderizar un dom virtual donde le vamos a dar dos argumentos, el primero que queremos renderizar y el segundo donde.</p>
          <p><strong>import confLogo from '../../images/image.png':</strong> es la forma en la que vamos a llamar a los documentos y para desglosarlo seria entre llaves usando la palabra de subnombre en este caso confLogo.</p>
          <p><strong>import './Style/Style css':</strong> para agregar un css.</p>
          <p><strong>className="":</strong> para aplicar estilos con JSX no se hace con class por que es un palabra reservada para el class de javascript sino que se hace con className.</p>
          <p><strong>handlesubmit():</strong> funcion que es llamada desde el onSubmit="".</p>
          <p><strong>handleclick():</strong> funcion que es llamada desde el onclick="".</p>
          <p><strong>handlechange():</strong> funcion que es llamada desde el onChange="".</p>
          <p><strong>... this.state.form, [e.target.name]:e.target.value:</strong> cuando hacemos el levantamiento de estado recoge todos los name de los input y va redirigiendo su valor reaccionariamente, llamamos al spread para traer los valores que hemnos ido guardando y la parte del state donde estamos guardando los estados de los inputs; esto lo hacemos para ir guardando los valores anteriores porque sino solo nos guardara un valor. Esto lo metemos dentro de un setState dentro de un handlecange().</p>
          <p><strong>state y setState:</strong> state nos define y enseña sus valores y setState sirve para actualizar estos valores. Se llaman a traves de this escepto state que se inicializa directamente justo despues del return.</p>
          <p><strong>LoremIpsum = () =>:</strong> Es una buena practica en React, definir las funciones con arrow functions y asi tambien olvidarnos del .bind(this).</p>

          <br/>
          <hr></hr><br/>


          <h2  className="bigtitle">Ciclo de vida de un componente</h2><br/>
          <br/>
          <span className="subrayado"> Nota; es recomendable utilizar <strong>arrows functions</strong> cuando estamos trabajando en React en general, por eso los usaremos en su ciclo de vida.</span> 
          <br/><br/>
        
          <p><strong>componentDidMount() :</strong> Nos va a cargar lo que queremos que se despliegue en la pagina</p>
          <p><strong>componentDidUpdate(prevProps, prevState, snapshot):</strong> nos va a cargar en memoria diferentes datos con los que trabajar, trabaja con los datos que se cargan despues de haber iniciado la pagina, como por ejemplo un this.setTiout();</p>
            <ul>
              <li><p><strong>+ PevProps =</strong> trabaja con props actualizados o de ciclo.</p></li>
              <li><p><strong>+ PrevState = </strong>trabaja con states actualizados o de ciclo.</p></li>
              <li><p><strong>+ Snapshot =</strong> si tu componente tiene un ciclo de getSnapshotBeforeUpdate() el valor que devuelve se actualiza con snapshot, (es una forma de trabajo que raramente se utiliza).</p></li>
            </ul>
          <p><strong>componentWillUnmount(): </strong>sirve para trabajar con lo que queremos hacer cuando se cierre la pagina como por ejemplo terminar un interval.</p>
          <br/>
          <hr></hr><br/>


          <h2  className="bigtitle">Llamadas a api y json</h2><br/>
          <br/>
          <span className="subrayado"> hay varias formas de trabajar con apis. Todos los inicios de las api se realizaran desde el componentdidmount(). Para llamar a una api pasa por tres estados, el data, error y loading.</span>
          <br/>
          <span className="subrayado"> Si queremos simular un error usando ayunc podemos hacerlo enviando throw new error('500: server error'), con el metodo <strong>throw</strong> colocandolo en el lugar de la peticion.  </span> 
          <br/>
          <span className="subrayado"> El metodo error tiene por defecto un atributo llamado <strong>error.message</strong> para devolvernos el mensaje del error.</span>
          <br/>
          <br/>
          
          <div><ModalJson 
            openModal ={this.openModal}

            /></div>
       
          <br/>
          <p><strong>- Api externa "primera imagen":</strong> para trabajar con un api externo, lo haremos a traves de un <span className="subrayado"> fetch()</span>, despues usaremos un <span className="subrayado"> .json()</span> y con un metodo asincrono. Para trabajar con apis debemos desplegar en el state: el mismo diagrama de valores que estemos usando en la api para mantener un state controlado, para finalizar el proyecto y desplegar su visualizacion en el return() debemos usar .map si la api se depliega en esa misma estancia en arrays, si usamos .map su primer valor de descomposicion debera ser el key= que nos sirve como metodo de estructuracion en la api.</p>
        
          <p><strong>- Api interna con import (json) "segunda imagen":</strong> para trabajar con un api interno importaremos el api a nuestro componente del proyecto; <span className="subrayado"> (import proyecto from '../proyecto.json).</span> De esta forma tendremos guardado el json con la palabra clave proyecto. en este caso servira con crear una funcion dandole la condicion de al recibir el proyecto que se guarde en memoria dentro del state. desglosaremos el state siguiendo la jerarquia del json con el que estamos trabajando, para mantener un state controlado.'<br/><span className="subrayado"> La diferencia con la api interna es que hay que importarla, no se utiliza un metodo asyncrono sino que una function en el componentdidmount() que desglose los datos; <strong>this.setState(data:proyecto)</strong>. y despues se desglosa de igual forma porque esta guardado en menoria state:.</span></p>
          <br/>
          

          <p><strong>- Api interna con fetch (json):</strong> se usan dos comandos el <strong>npx json-server --watch archivo.json</strong> y <strong>json-server archivo.json</strong> y se guarda el url del servidor json en el fetch.</p>
          
          <p><strong>- Api CRUD:</strong> haremos la llamada de igual forma que una api externa, utilizando imports pero para llamarla dentro de la logica lo haremos de la misma forma que al desglosarla es decir concatenando con puntos. Ejemplo; await <strong>api.badges.list()</strong></p>
          <span className="subrayado"> Vamos a utilizar fetch() en el momento de llamar a las apis, por defecto tiene un metodo html get pero podemos implementarle mas opciones agregando un request al fetch().</span>
          
          <br/><br/>

        

            <div  className="imagecarbon col-12">
 

              <div className=" col-6"><img src={imagecarbon1} className="imagecarbon"></img></div>
              <div className=" col-6"><img src={imagecarbon2} className="imagecarbon"></img></div>

          
            <br/>
            </div>
          



          <h2  className="bigtitle">Hooks</h2><br/>
          <br/>
          <span className="subrayado"> Los hooks en react son recomendables utilizarlos cuando queramos trabajar con los estados y tengamos que trabajar sobre <strong>funciones</strong> en vez de clases. Para importarlos se usa<strong> import React, useState from 'react';</strong></span>
          <br/><br/>
          <p><strong>const [count, setCount] = useState(0); :</strong> count es como si fuera el state donde vamos a ir guardando los valores y el setCount es como si fuera el setState donde vamos a ir actualizando los valores. useState(0) es el hook que vamos a utilizar y el valor por defecto con el que vamso a comenzar es 0 aunque podemos inicializar valores tambien entre llamves como latitud: null. El useState es el hook mas usado que es para el manejo de estado.</p>
          <p><strong>useEffect():</strong> Para suscribir el componente a su ciclo de vida. Con useEffect le indica que el componente tiene que hacer algo despues de renderizarse, este hook equivale a la combinacion de componentdidmount, componentdidupdate y componentwillunmount.</p>
          <p><strong>useReducer(): </strong>Ejecutar un efecto basado en una acción.</p>
          
          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle">Modal</h2><br/>
          <br/>
          <p><strong>ReactDom.createPortal( __que__, __donde__ ): </strong>se genera para crear un portal que difiere del dom en el que estamos trabajando, es lo mas usado para trabajar con modales. Recibe dos argumentos el que y el donde.</p>
          <br/>
          <span className="subrayado"> Imagen uno : Pagina, imagen dos : Css, imagen tres : Modal;</span>
          <br/>
          <br/>
          <div className=" col-6"><img src={imagecarbon4} className="imagecarbon"></img></div>
          <div className=" col-6"><img src={imagecarbon5} className="imagecarbon"></img></div>
          <div className=" col-6"><img src={imagecarbon6} className="imagecarbon"></img></div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>



        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'R e a c t - R o u t e r'
            >
              <ReactRouter/>
        </Modal>



      </React.Fragment>

    );

  }
}

export default Pagereact;