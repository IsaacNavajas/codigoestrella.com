import React from 'react';
import Modal from './Modal';

import data from './Javascript.json';
import JQuery from './JQuery';
import TypescriptModal from './TypescriptModal';

import image from "../source/image javascript.png";

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

        <TypescriptModal/><br/>

     
            <button 
                        className="buttonphp btn btn-dark" 
                        onClick={this.openModal}
                      >
                      JQuery
            </button>

          
          


        <hr></hr>
        
        <div className=" col-12">
          
          <div className="mitad col-5">
  
            <p><strong>Memory heap: </strong>Es donde se van a guardar los datos (variables, functions ...), se va a guardar de forma aleatoria.</p>
            <p><strong>Call stack:</strong> como se va a comportar nuestro codigo en el navegador, siguiendo la sincronia de javascript se almacenara una pila de tareas, siempre una encima de otra por cada function, la primera de estas es el objeto global, .</p>
            <p><strong>Garbage Collection:</strong> limpia la memoria de los datos para no sobrecargarla y que no se genere un stack overflow, para poder seguir trabajando de manera optima.</p>
            <p><strong>Js runtime:</strong> es la parte de asincronía en js, lso metodos del DOM, axaj y times van a cargar estos dato y los va a desplegar al final del call stack por orden.</p>
            <p><strong>event loop: </strong>Es el metodo que usa js para decidir que tareas las deja en el stack y que tareas deja de forma paralela (js runtime) para desplegarlas al final del stack de forma sincrona.</p>
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


        </div>


        
        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'J Q u e r y'
            >
              <JQuery/>
        </Modal>

      </React.Fragment>

    );

}

}



export default Javascript;
