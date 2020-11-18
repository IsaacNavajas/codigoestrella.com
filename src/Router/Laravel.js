import React from 'react';

import PhpUnit from './PhpUnit';
import Modal from './Modal';
import Php from './Php';
import ControllerLaravel from './controllerLaravel.js';


class Laravel extends React.Component{

  state={
    openModal: false,
    verifyLanguage:this.props.verifyLanguage
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){
console.log(this.props.verifyLanguage)
    
    return (

      
      <React.Fragment>
        <div className="container">


          <br/>


          <h2  className="bigtitle font">Instalación</h2><br/>
  

          <p><strong>composer global require laravel/installer: </strong> Para instalar el instalador de laravel. </p>
          <p><strong>composer: </strong> <strong>composer install </strong>Para instalar composer y <strong>composer update </strong>para actuallizar los paquetes. </p>
          <p><strong>laravel new blog:</strong> Para instalar un nuevo proyecto laravel con el nombre blog, antes de instalar un nuevo proyecto podemos ayudarnos de --help si queremos cubrir opciones como instalar un login con el proyecto u otras opciones.</p>
          <br/>
          <p><strong>php artisan serve:</strong> Para acceder al servidor virtual de laravel.</p>
          <hr></hr>
          <p><strong>asset('fotos/cut.jpg'):</strong> Para acceder a multimedia.</p>
 
          <br/><br/>
          <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                      >
                     Php
          </button>


          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">mvc</h2>

          <br/><br/>
          <p><strong>Models:</strong> Representa el objeto del eloquent, sirve para trabajar en conjunto con el orm de laravel en forma de objeto y las bases de datos, para definir las tablas usaremos las migraciones.</p>
          <p><strong>Views:</strong> Representa la parte de frontend de dentro del controlador y utilizaremos el template engine de laravel Blade.</p>
          <p><strong>Controllers:</strong> Para agregar la logica del patron de arquitectura software.</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">php artisan:</h2>
          <br/><br/>
        
          <p>php artisan es un comando de la consola que se puede iniciar desde dentro del proyecto de laravel y nos va a servir para las instalaciones de sus dependencias</p>
          <p><strong>php artisan --help:</strong> Nos despliega una lista con todos los comandos de artisan.</p>
          <p><strong>php artisan make:migration:</strong> Es el comando que vamos a utilizar para la creación/modificación de las tablas, <strong>php artisan make:migration --create</strong> para crear la tabla, <strong>php artisan make:migration --table</strong> lo vamos a usar para modificar una tabla creada, es una buena practica modificar desde --table las talblas debido a los controles de versiones. Deberemos utilizar php artisan migrate para actualizar las migraciones del proyecto. Usaremos <strong>php artisan migrate:rollback</strong> para volver un valor atras en memoria de las migraciones. </p>
          <span className="subrayado"> <strong>Las tablas deben de estar siempre en plural</strong> y el Model que concatena a esa misma tabla lo crearemos en singular, los dos con el mismo valor.</span> 
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Rutas</h2>
          <br/>
          <br/>

          <p><strong>Route::resource('/rutaloremipsum/opcioloremipsum', 'resource'):</strong> El método resource es para desplegar el controlador crud y reorganizar sus rutas, para conocerlas lanzaremos el comando <strong>php artisan route:list</strong>. Para generar un controlador CRUD en laravel lanzaremos <strong>php artisan make:controller _nombredelcontrolador_ --resource</strong>. Haciendo un resource podemos aceptar las rutas por defecto y concatenar el controlador solo llamándolo, sin unirlo a ninguna function.</p>
        
          <p><strong>Route::get('/rutaloremipsum', 'pageone@index'):</strong> Para generar una ruta lo primero que tenemos que especificarle sera el método HTTP; get, post, put, patch o podemos utilizar any, luego definiremos la ruta a la que queremos enlazarlo en este caso es /rutaloremipsum, podemos meter tantos slash como queramos /rutauno/rutados/rutatres, si la ruta viene enlazada con un parámetro especifico como puede ser un <strong>id</strong> lo definiremos <strong>entre paréntesis</strong>, cada parámetro entre paréntesis debe tener el mismo valor siempre que venga de la misma tabla, en el caso de hacer dos cruds cada curd deben ser diferenciados entre distintos valores. Por ultimo metemos el nombre del controlador y con una arroba concatenamos la funcion que queremos habilitar de ese controlador a esa ruta. </p>
          <br/>
          <hr></hr>
          <br/><br/>

          
          <h2  className="bigtitle">Model</h2>
          <br/>
          <br/>
          <span className="subrayado"> Las tablas deben de estar siempre en plural y el <strong>Model que concatena a esa misma tabla lo crearemos en singular</strong>, los dos con el mismo valor. </span>

          <p><strong>protected $table = '__nombre_de_la_tabla__'; :</strong> Para definir la tabla que queremos concatenar con ese Model.</p>
          <br/>
          <hr></hr>
          <br/><br/>

                    
          <h2  className="bigtitle">Controller</h2>
          <br/>
          <br/>
          <p>Para encapsular lógica de control.</p>

          <div><ControllerLaravel 
            openModal ={this.openModal}

            /></div>
       
          <br/>

          <br/>
          <hr></hr>
          <br/><br/>

          

          

          <h2  className="bigtitle">.Env</h2>
        
          <br/><br/>
          <p>Las variables de entorno sirven para especificar los valores retenidos en esas variables hacia tu proyecto de laravel. Hay que asegurarse de tener todos los valores bien escritos porque si no se escribe uno como la contraseña no se crearan las migraciones.</p>
          <p><strong>utf8mb4:</strong>Al crear las tablas hay que crear el charset/collation en utf8mb4 porque por defecto Laravel esta configurado para trabajar con las tablas con ese caracter.</p>
          
          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle">Relacciones de Eloquent</h2><br/>
          <br/>
          <p><strong>return $this->hasMany(Expense::class); :</strong>Relaccionar <strong>uno a muchos</strong> con el Modal Expense. </p> 
          <br/>
          <p><strong>return $this->belongsTo(Post::class); :</strong>Relaccionar <strong>muchos a uno</strong> con el Modal Post.</p>
         
          <a 
            href="http://laravel.com/docs/8.x/eloquent-relationships#one-to-many" 
            target="http://laravel.com/docs/8.x/eloquent-relationships#one-to-many" 
            className="Link">
              enlace_de_la_documentación
          </a>
          <br/>
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle">PhpUnit</h2>
          <br/>
          <br/>
          <div><PhpUnit
            openModal ={this.openModal}

            /></div>
       
          <br/>
          

        </div>



        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'P h p'
            >
              <Php/>
        </Modal>



      </React.Fragment>

    );



  }

}

export default Laravel;
