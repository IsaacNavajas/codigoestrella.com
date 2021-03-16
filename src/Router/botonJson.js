import React from 'react';
import Modal from './Modal';

import imagejson from "../source/codezen 3.png";
class ModalJson extends React.Component{

  state={
    openModal: false
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      <React.Fragment>
                  <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Crear un Json
                  </button>



                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'C o m o - c r e a r - u n - J s o n'
                      >
                        <div className="container">

                        <div  className="bigtitle font">Json</div><br/>


                          <p>Para crear un Json lo vamos a estructurar todo entre llaves y arrays, pondremos arrays cuando queramos desglosar un conjunto de valores que guarden la misma estructura y entre llaves cuando queramos demostrar pocos valores o valores en distintos tiempos.</p> <br/>

                          
                          <p>Cuando se crea el Json hay que pensar como va a quedar finalmente el proyecto, donde queremos desplegar cada elemento del json, si queremos desplegar todos los elementos en una sola petición usaremos un array, pero si lo que queremos es desplegar varios títulos en distintas lineas de tiempo en el código usaremos las llaves, dividiremos todos los datos en sus padres como se muestra en el ejemplo.</p> <br/>

                          <p>Para desplegar los valores del json lo aremos dentro del return(), si esta dentro de una array tendremos que utilizar .map y dentro el valor key= para identificar;</p> <br/>
                            <span className="subrayado"> - this.state.data.json.titles.titleone => aquí estamos accediendo al json que lo hemos guardado en memoria del this.state.data, para acceder a la parte del json que esta entre llaves lo haremos desplazándonos entre puntos. </span> <br/><br/>
                            <span className="subrayado"> - this.state.data.json.results.results.one.map(badge => ( ... badge.description)) => para acceder a la parte del array, sera necesario usar dentro del paréntesis un elemento html que contenga el key= que nos va a posicionar un valor para diferenciar cada elemento, es recomendable utilizar un id, key="id". Dentro de array diferenciaremos cada cadena de valor entre llaves. </span> <br/>
                          
                          <center><div className=" col-12"><img src={imagejson} className="imagecarbon"></img></div></center>

                          <span className="subrayado"> El ultimo objeto de un array nunca lleva coma.</span> 
                          


                        </div>
                  </Modal>

      </React.Fragment>

    );



  }


}

export default ModalJson;
