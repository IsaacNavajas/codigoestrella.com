import React from 'react';
import image1 from "../source/codezen 12.png";
import image2 from "../source/codezen 13.png";
import image3 from "../source/codezen 14.png";


import Modal from './Modal';

class PhpUnit extends React.Component{
  state={ openModal: false,}

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

  render(){

    
    return (

      <React.Fragment>

                  <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     p h p U n i t
                  </button>




                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'P h p U n i t '
                      >
                       
              <h2  className="bigtitle font">Instalación</h2><br/>
   

              <p><strong>composer require --dev phpunit/phpunit : </strong>para instalar phpunit a traves de composer.</p>
              
              <br/>
              <hr></hr><br/>


              <h2  className="bigtitle">Instalar composer.json</h2><br/>
              <p>./composer.json</p>
              <div className=" col-12"><img src={image1} className="imagecarbon"></img></div>
              <p><strong>composer dump-autoload -o :</strong> sirve para actualizar composer, instalando los parámetros que hemos incorporado.</p>
              <br/>
              <hr></hr><br/>


              <h2  className="bigtitle">test</h2><br/>
              <p>./tests/OperationsTest.php</p>
              <div className=" col-12"><img src={image2} className="imagecarbon"></img></div>
              <p><strong>./vendor/bin/phpunit tests :</strong> para comprobar los test en la consola y validar los tests los assertions.</p>
              <br/>
              <hr></hr><br/>


              <h2  className="bigtitle">Function (ejemplo)</h2><br/>
              <p>./Operations.php</p>
              <div className=" col-12"><img src={image3} className="imagecarbon"></img></div>
              <br/>
              <hr></hr><br/>


   
   
              <h2  className="bigtitle">PhpUnit Laravel</h2><br/>
                            
              <p><strong> php artisan make:test "nombre del test" :</strong> Para crear un nuevo test.</p>

              <p>En laravel phpUnit esta dividido en dos partes;</p>
              
              <p><strong> ./test/feature :</strong> Para escribir pruebas que van a simular peticiones HTTP al servidor.</p>
              
              <p><strong> ./test/Unit :</strong> Donde vamos a escribir pruebas que van a probar partes individuales de nuestra aplicación (clases, metodos ...) pero no peticiones HTTP.</p>
              
              <p><strong> vendor/bin/phpunit :</strong> Para probar pruebas en consola.</p>

              <p><strong> php artisan make:test "nombre del test" :</strong> Para crea un nuevo test.</p>
              
            
              <div className=" col-12"><img src={image3} className="imagecarbon"></img></div>
              <br/>
              <hr></hr><br/>


          </Modal>

        
      </React.Fragment>

    );

  }


}

export default PhpUnit;
