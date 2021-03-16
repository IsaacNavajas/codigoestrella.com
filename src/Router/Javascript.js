import React from 'react';
import Modal from './Modal';

import data from './DataJavascript.json';
import BotonJQuery from './botonJQuery';
import BotonTypescript from './BotonTypescript';

import image from "../source/image javascript.png";
import imagePromise from "../source/codezen promesas.png";
import callbacks from "../source/codezen callbacks.png";
import imageprettierrc from "../source/prettierrc.png";

class Javascript extends React.Component{
  state = {
    openModal: false,
    data: {
      titles:{},
      results:{
        results_atributosjavascript:[],
        results_arrayenjavascript:[],
        results_mapjavascript:[],
        results_installjavascript:[]
      }
    },

  };

  componentDidMount() {
    this.dataCharacters();
  }

  dataCharacters = () => new Promise((resolve, reject) => {
    resolve(this.setState({  data: data }))
    reject('error')
  }
  
  )  
  
  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

  render(){

    return (

      <React.Fragment>
        <div className="container">

        <br/><br/><br/>


        <br/>
     
        <div className="bigtitle">{this.state.data.titles.title_four}</div>
        <br/>
        {this.state.data.results.results_installjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}

          <br/>

        <ul>
          <li><BotonTypescript/></li><br/>

          <li>
            <button 
                        className="buttonphp btn btn-dark" 
                        onClick={this.openModal}
                      >
                      JQuery
            </button>
          </li>
        </ul>
          
          


        <hr></hr>
        
        <div className=" col-12">
          
          <div className="mitad col-5">
  
            <p><strong>Memory heap: </strong>Es donde se van a guardar los datos (variables, functions ...), se va a guardar de forma aleatoria.</p>
            <p><strong>Call stack:</strong> como se va a comportar nuestro código en el navegador, siguiendo la sincronía de javascript se almacenara una pila de tareas, siempre una encima de otra por cada function, la primera de estas es el objeto global, .</p>
            <p><strong>Garbage Collection:</strong> limpia la memoria de los datos para no sobrecargarla y que no se genere un stack overflow, para poder seguir trabajando de manera optima.</p>
            <p><strong>Js runtime:</strong> es la parte de sincronía en js, lso métodos del DOM, axaj y times van a cargar estos dato y los va a desplegar al final del call stack por orden.</p>
            <p><strong>event loop: </strong>Es el método que usa js para decidir que tareas las deja en el stack y que tareas deja de forma paralela (js runtime) para desplegarías al final del stack de forma sincronía.</p>
            <hr></hr><br/>
            
          </div>
          <div className="mitad col-7">
            <img src={image} className="imagejavascript"></img>
            <hr></hr><br/>
          </div>
          
         
        </div><br/>
        


        <div className="bigtitle">{this.state.data.titles.title_two}</div>
        <br/>
        {this.state.data.results.results_arrayenjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}

        <br/>
        <hr></hr><br/>

        <div className="bigtitle">{this.state.data.titles.title_three}</div>
        <br/>
        {this.state.data.results.results_mapjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}
        <br/>
        <hr></hr><br/>

        <div className="bigtitle">{this.state.data.titles.title_one}</div>
        <br/>
        {this.state.data.results.results_atributosjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}
        
        <hr></hr><br/>
        <div className="bigtitle">Multiples promesas</div>
          <center>
            <div >
              <img src={imagePromise} className="col-12"></img>
              <hr></hr><br/>
            </div>
          </center>

        <div className="bigtitle">Callbacks</div>
          <center>
            <div >
              <img src={callbacks} className="col-12"></img>
              <hr></hr><br/>
              
            </div>
          </center>

     
          <div className=" col-12">
          
          <div className="bigtitle">.prettierrc.js</div>
          <br/>
          <p>Se usa para sobrescribir normas del proyecto, para asegurarse que el comportamiento de Prettier sigue siendo el mismo entre distintas computadoras, se crea un archivo .prettierrc.js en el proyecto.</p>
          

          <center>
            <div className="col-12">
            <img className="col-12" src={imageprettierrc}></img>
              <hr></hr><br/>
            </div>
          </center>

          
          <h2  className="bigtitle">Javascript avanzado</h2><br/>
  
          <br/><br/>
        
          <p><strong>.options :</strong> para saber cuántas opciones hay en una lista desplegable específica; let x = array.options.length -&gt; x = 44. </p>
          <p><strong>new Proxy():</strong> nos va a cargar en memoria diferentes datos con los que trabajar, trabaja con los datos que se cargan después de haber iniciado la pagina, como por ejemplo un this.setTiout();</p>
            <ul>
              <li><p><strong>+ PevProps =</strong> trabaja con props actualizados o de ciclo.</p></li>
              <li><p><strong>+ PrevState = </strong>trabaja con states actualizados o de ciclo.</p></li>
              <li><p><strong>+ Snapshot =</strong> si tu componente tiene un ciclo de getSnapshotBeforeUpdate() el valor que devuelve se actualiza con snapshot, (es una forma de trabajo que raramente se utiliza).</p></li>
            </ul>
          <p><strong>componentWillUnmount(): </strong>sirve para trabajar con lo que queremos hacer cuando se cierre la pagina como por ejemplo terminar un interval.</p>
          <br/>
          <hr></hr><br/>

  
        </div><br/>

        </div>



        
        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'J Q u e r y'
            >
              <BotonJQuery/>
        </Modal>

      </React.Fragment>

    );

}

}



export default Javascript;
