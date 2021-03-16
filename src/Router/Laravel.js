import React from 'react';

import Modal from './Modal';
import Php from './Php';
import BotonCrudApi from './botonCrudApi.js';
import ApiLumen from './botonApiLumen';
import PhpUnit from './botonPhpUnit';
import imagecarbon1 from "../source/codezen 19.png";


class Laravel extends React.Component{

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


          <h2  className="bigtitle font">Instalación</h2><br/>
  

          <p><strong>composer global require laravel/installer: </strong> Para instalar el instalador de Laravel. </p>
          <p><strong>composer: </strong> <strong>composer install </strong>Para instalar composer y <strong>composer update </strong>para actualizar los paquetes. </p>
          <p><strong>laravel new blog:</strong> Para instalar un nuevo proyecto laravel con el nombre blog, antes de instalar un nuevo proyecto podemos ayudarnos de --help si queremos cubrir opciones como instalar un login con el proyecto u otras opciones.</p>
          <br/>
          <p><strong>php artisan serve:</strong> Para acceder al servidor virtual de laravel.</p>
          <hr></hr>
          <p><strong>php artisan tinker:</strong> Para acceder a la sección de hacer pruebas.</p>
          <p><strong>asset('fotos/cut.jpg'):</strong> Para acceder a multimedia, todos los assert que concatenemos los vamos almacenar en /public/.</p>
          <p><strong>bcrypt():</strong> Para encriptar un dato por ejemplo la contraseña.</p>
          <p><strong>old():</strong> devolver el valor que anterior.</p>
 
          <br/><br/>
          <ul>
              
                <li>
                  <button className="buttonphp btn btn-dark" onClick={this.openModal}
                            >
                          Php
                  </button>
                </li>

            <br/>

                <li>
                  <ApiLumen openModal ={this.openModal}/>
                </li>

            <br/>

          </ul>


          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">mvc</h2>

          <br/><br/>
          <p><strong>Models:</strong> Representa el objeto del eloquent, sirve para trabajar en conjunto con el orm de laravel en forma de objeto y las bases de datos, para definir las tablas usaremos las migraciones.</p>
          <p><strong>Views:</strong> Representa la parte de frontend de dentro del controlador y utilizaremos el template engine de laravel Blade. Si las vistas están dentro de una carpeta -&gt; view('carpeta.vista').</p>
          <p><strong>Controllers:</strong> Para agregar la lógica del patron de arquitectura software.</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">php artisan:</h2>
          <br/><br/>
        
          <p>php artisan es un comando de la consola que se puede iniciar desde dentro del proyecto de laravel y nos va a servir para las instalaciones de sus dependencias</p>
          <p><strong>php artisan --help:</strong> Nos despliega una lista con todos los comandos de artisan.</p>
          <p><strong>php artisan make:migration:</strong> Es el comando que vamos a utilizar para la creación/modificación de las tablas, <strong>php artisan make:migration --create="nombre de la tabla a crear"</strong> para crear la tabla, <strong>php artisan make:migration --table="nombre de la tabla ya creada"</strong> lo vamos a usar para modificar una tabla creada, es una buena practica modificar desde --table las talblas debido a los controles de versiones. Deberemos utilizar php artisan migrate para actualizar las migraciones del proyecto. Usaremos <strong>php artisan migrate:rollback</strong> para volver un valor atras en memoria de las migraciones. </p>
          <span className="subrayado"> <strong>Las tablas deben de estar siempre en plural</strong> y el Model que concatena a esa misma tabla lo crearemos en singular, los dos con el mismo valor.</span> 
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Rutas</h2>
          <br/>
          <br/>

          <p><strong>Route::resource('/rutaloremipsum/opcioloremipsum', 'resource'):</strong> El método resource es para desplegar el controlador crud y reorganizar sus rutas, para conocerlas lanzaremos el comando <strong>php artisan route:list</strong>. Para generar un controlador CRUD en laravel lanzaremos <strong>php artisan make:controller _nombredelcontrolador_ --resource</strong>. Haciendo un resource podemos aceptar las rutas por defecto y concatenar el controlador solo llamándolo, sin unirlo a ninguna function.</p>
        
          <p><strong>Route::get('/rutaloremipsum', 'pageone@index'):</strong> Para generar una ruta lo primero que tenemos que especificarle sera el método HTTP; get, post, put, patch o podemos utilizar any, luego definiremos la ruta a la que queremos enlazarlo en este caso es /rutaloremipsum, podemos meter tantos slash como queramos /rutauno/rutados/rutatres, si la ruta viene enlazada con un parámetro especifico como puede ser un <strong>id</strong> lo definiremos <strong>entre paréntesis</strong>, cada parámetro entre paréntesis debe tener el mismo valor siempre que venga de la misma tabla, en el caso de hacer dos cruds cada curd deben ser diferenciados entre distintos valores. Por ultimo metemos el nombre del controlador y con una arroba concatenamos la funcion que queremos habilitar de ese controlador a esa ruta. </p>
          <p><strong>laravel 8:</strong> <strong>use App\Http\Controllers\content:</strong> para llamar a la ruta y <strong>Route::get('/', [content::class, 'index']);</strong> para llamar a un método del controlador y darle una ruta.</p>
        
          <br/>
          <hr></hr>
          <br/><br/>

          
          <h2  className="bigtitle">Migraciones</h2>

          <br/><br/>
          <span className="subrayado"> <strong>php artisan migrate</strong>, para crear las migraciones en tablas, una vez creadas no se podrán modificar sin borrar los valores de la base de datos es por eso que se le agrega <strong>php artisan make:migration "nombre de la tabla modificadora" --table="nombre de la tabla a modificar" </strong>. </span>

          <p><strong>$table-&gt;unsignedBigInteger('user_id'):</strong> crea un unsignedBigInteger en la tabla con el nombre user_id.</p>
          <p><strong>$table-&gt;foreign(‘user_id’)-&gt;references(‘id’)-&gt;on(‘users’):</strong> para referenciar la id de users con el unsignedBigInteger user_id.</p>
          <p><strong>$table-&gt;foreignId('user_id')-&gt;constrained()-&gt;onUpdate('cascade')-&gt;onDelete('cascade'):</strong> que acción queremos que se logre en la llave foránea al agregar o eliminar un id nuevo.</p>
          <br/>
          <hr></hr><br/><br/>


          
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
          <p><strong>Model Biding :</strong>Laravel tiene la opción de llamar como argumento el modelo directamente, a esta técnica se le llama Model Biding. </p> 

          <div className=" col-12"><img src={imagecarbon1} className="imagecarbon"  title="imagen api externa"></img></div>

          <br/>

          <div><BotonCrudApi
            openModal ={this.openModal}

            /></div>
       
          <br/>

          <br/>
          <hr></hr>
          <br/><br/>

          

          <h2  className="bigtitle">.Env</h2>
        
          <br/><br/>
          <p>Las variables de entorno sirven para especificar los valores retenidos en esas variables hacia tu proyecto de laravel. Hay que asegurarse de tener todos los valores bien escritos porque si no se escribe uno como la contraseña no se crearan las migraciones.</p>
          <p><strong>utf8mb4:</strong>Al crear las tablas hay que crear el charset/collation en utf8mb4 porque por defecto Laravel esta configurado para trabajar con las tablas con ese carácter.</p>
          <p><strong>php  artisan config:cache:</strong>Cada vez que cambiamos los valores de .env es necesario lanzar el comando para que no falle.</p>
          
          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle">Relaciones de Eloquent</h2><br/>
          <br/>
          <p><strong>return $this-&gt;hasMany(Expense::class); :</strong>Relacionar <strong>uno a muchos</strong> con el Modal Expense. </p> 
          <br/>
          <p><strong>return $this-&gt;belongsTo(Post::class); :</strong>Relacionar <strong>muchos a uno</strong> con el Modal Post.</p>
         
          <a 
            href="http://laravel.com/docs/8.x/eloquent-relationships#one-to-many" 
            target="http://laravel.com/docs/8.x/eloquent-relationships#one-to-many" 
            className="Link">
              enlace_de_la_documentación
          </a>
          <br/><br/>
          <u className="subrayado">Con Eloquent podemos trabajar con datos con <strong>colecciones y serialization</strong>, colecciones es la forma de trabajar con muchos métodos para poder trabajar fácilmente todos nuestros datos, serialization es la manera de convertir estos datos, ya sea en un array, un json... </u>
          <br/>
          <br/>
          <hr></hr>
          <br/><br/>
                    
          <h2  className="bigtitle">Laravel/UI</h2>
          <br/>
          <br/>
          <p><strong>composer require laravel/ui --dev:</strong> para tener disponible la ui en laravel desde el lado de desarrollo.</p>
          <p><strong>php artisan ui bootstrap --auth:</strong> para instalar el ui desde bootstrap también podemos instalarlo con vue o react.</p>
          <p><strong>npm install:</strong> para instalar todas las dependencias después de instalar el ui conveniente. Después npm run dev.</p>
          
          <br/>
          <hr></hr>
          <br/><br/>
                    
          <h2  className="bigtitle">Factories</h2>
          <br/>
          <br/>
          <p><strong>php artisan make:factory:</strong> para crear un factory, se va a guardar en database/factories/, hay que señalar que modelo asignamos a ese factory -&gt; protected $model = Post::class; <u className="subrayado">php artisan make:factory PostFactory --model=Post</u> para asignar el model al que queremos concatenarlo directamente.</p>
          <p><strong>factory(App\Post::class, 30)-&gt;create():</strong> entramos a Tinker y desde ahi creamos 30 factories.</p>
          <p><strong>Post::factory()-&gt;count(12)-&gt;create():</strong> para crear un factory() desde código.</p>

          
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle">Seeds</h2>
          <br/>
          <br/>
          <p>para inicializar las tablas con datos:</p>
          <p><strong>php artisan make:seeder PostSeeder:</strong> para crear un seeder.</p>

          
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
          <hr></hr>
          <br/><br/>
        

          <h2  className="bigtitle">Compartir src´s</h2> 
          <br/>
          <br/>
          <p><strong>php artisan storage:link:</strong> creara un link simbólico desde storage / public a public / storage asi tus imágenes se verán de forma publica.</p>
          <p><strong>url('storage/app/images/'.$article-&gt;image) :</strong> public / storage es un reflejo de storage / . Ahora puedes usar url() para obtener la imagen de public / storage .</p>
          <p><strong>url(‘storage/posts/’.$post-&gt;image):</strong> normalmente en producción solo se debe acceder a tu carpeta public, no deberías dar permisos para que visualizen carpetas internas del app.</p>


          <br/>
          <hr></hr>
          <br/><br/>

          
          <h2  className="bigtitle">Accesores y mutadores</h2>
          <br/>
          <br/>
          <p><strong>get(Attribute)Attribute:</strong> crearemos un accesor dándole como nombre de function dentro de get(crear_accesor)Attribute, en el modelo elegido y meteremos la lógica deseada ejemplo <u className="subrayado">getNombreEnMayusculasAttribute</u> separaremos entre mayúsculas cada palabra.</p>
          <p><strong>$firstName = $user-&gt;nombre_en_mayusculas:</strong> para llamar a la function separaremos siempre entre ( _ ) las palabras, para saber como se separan unas de otras se usan mayúsculas.</p>
          <p>Los mutadores son iguales que los accesores pero recibe el valor del atributo. ejemplo: $this-&gt;attributes['first_name'] = strtolower($attributeValue); y se definen como <u class="subrayado">set(crear_mutadores)Attribute</u> varia el método set en vez del get.</p>
         
          <br/>
     
          <br/><br/>
        

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
