import React from 'react';
import Modal from './Modal';

import image from "../source/codezen 11.png";

class botonApiLumen extends React.Component{

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
                     Api - Lumen
                  </button>



                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'a p i - L u m e n'
                      >
                          <div className="container">


                          <br/>


                          <h2  className="bigtitle font">Instalación</h2><br/>

                          <br/>
                          <p><strong>composer create-project --prefer-dist laravel/lumen blog:</strong> Para instalar un nuevo proyecto Lumen con el nombre blog.</p>

                          <p><strong>php -S localhost:8000 -t ./public:</strong> Para acceder al servidor virtual de Lumen.</p>`&gt;`

                          <span className="subrayado"><strong>Activación de Eloquent:</strong> Desplazarnos a la carpeta bootstrap y entrar en el archivo app.php y quitar el comentario (//) de la linea 26 y 28 ($app-`&gt;`withFacades();, $app-`&gt;`withEloquent();).</span>
                          <hr></hr>

                          <br/><br/>
                          <img src={image} alt="imagen del modal" className="imagecarbon"></img>


                          <br/>
                          <hr></hr><br/><br/>

                          <h2  className="bigtitle">Model & Migrations</h2>

                          <br/><br/>
                          <p>Una vez activado Eloquent ya podremos acceder a la consola artisan y crear el model de igual manera que en Laravel.</p>
                          <p><strong>php artisan make:migration badges --create:</strong> Nos creara la migración que va a ser la tabla de la base de datos en el proyecto (siempre en plural).</p>
                          <p><strong>php artisan make:model badge:</strong> Para crear el model para trabajar como un objeto de la tabla en el proyecto (siempre en singular). En el model insertaremos; <span className="subrayado">protected $guarded = ['id'];</span>.</p>


                          <br/><br/>


                          </div>


                  </Modal>

      </React.Fragment>

    );



  }


}

export default botonApiLumen;
