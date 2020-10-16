import React from 'react';

import Modal from './Modal';
import Php from './Php';
import ControllerLaravel from './controllerLaravel.js';
import imageone from "../source/codezen codigo wordpress.png";

class Wordpress extends React.Component{

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

          <p><strong>Instalar Wordpress desde XAMPP: </strong> entrar en www.word.press.org y descargar Get Wordpress, descomprimirlo en la carpeta de htdocs de XAMPP, y escribir la ruta /localhost/(nombre de la carpeta) y desde ahi comenzar la instalacion. </p>
          <p><strong>Utilizar interfaz antigua de wordpress:</strong> vamos a pluyins y buscamos - Editor clasico - lo activamos y automaticamente cambiara su interfaz.</p>
          <br/><br/>
          <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Php
          </button>

          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">Temas</h2>

          <br/><br/>
          <p><strong>Understrap:</strong> Es el tema que viene completamente vacio, para configurarlo a tu gusto.</p>
          
          <p><strong>Colibri WP:</strong> Tema recomendado para editar por su gran extension para editar.</p>
          <p><strong>themeforest.net:</strong> Para comprar temas de pago.</p>
          <p><strong>crear un tema hijo:</strong> Para modificar a nivel codigo es bueno crear un tema hijo sino no es necesario crear un hijo, vamos a crear desntro de la carpeta theme una nueva carpeta con el nombre del tema hijo y dentro el siguiente archivo style.css;</p>
          
          <img src={imageone} alt="imagen del modal" className="imagewordpress"></img>
          <p>en el import llamamos al style.css del tema padre en este caso colibri-wp.</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Entradas:</h2>
          <br/><br/>
          <span className="subrayado"> Las entradas en diferencia con las paginas son dinamicas esto quiere decir que el SEO en posicionamiento va variando dependiendo de la fecha de publicacion </span> 
          <p><strong>Todas las entradas:</strong> Muestra las entradas.</p>
          <p><strong>Añadir nueva:</strong> Para crear nuevos post.</p>
          <p><strong>Categorias:</strong> Para encapsular en categorias.</p>
          <p><strong>Etiquetas:</strong> Para un buen SEO y posicionar en google aunque podemos crearla de manera rapida desde añadir nueva.</p>
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">Medios:</h2>
          <br/><br/>
          <p><strong>Biblioteca:</strong> Muestra la libreria de imagenes y desde aqui tambien podremos eliminarlas y editarlas, si entramos a editarlas podremos agregar informacion para mejorar nuestro SEO de las imagenes de nuestro proyecto.</p>
          <p><strong>Añadir nuevo:</strong> Para subir una nueva imagen, tambien podemos subir varias imagenes a la vez para mantenerlas guardadas en nuestro poryecto.</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Paginas</h2>
          <br/>
          <br/>
          <span className="subrayado"> Las paginas en diferencia con las entradas son estaticas esto quiere decir que el SEO en posicionamiento no varia dependiendo de la fecha de publicacion</span> 
          <p><strong>Todas las paginas:</strong> Funciona de igual manera que en biblioteca para las entradas.</p>
          <p><strong>Añadir nueva:</strong> Funciona de igual manera que en añadir nueva para las entradas.</p>
          
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle">Pluyins:</h2>
          <br/><br/>
          <p><strong>widgets:</strong> Estan en apariencia - widgets, son zonas de contenido que podemos agregar al rededor de distintas areas de la pagina.</p>
          <p><strong>Pluyins recomendables para instalar en nuestro proyecto:</strong> Funciona de igual manera que en biblioteca para las entradas.</p>

          <ul>
              <li><p><strong>+ Contact Form 7 =</strong> Para crear formularios de contacto de forma rapida, para agregar un formulario lo haremos desde contacto - Añadir nuevo y lo meteremos en una nueva pagina con Essential Addons for Elementor.</p></li>
              <li><p><strong>+ Yoast SEO =</strong> Para hacer SEO en nuestra pagina web.</p></li>
              <li><p><strong>+ WooCommerce = </strong>Sirve para añadir una tienda completa dentro de nuestra pagina web.</p></li>
              <li><p><strong>+ Really simple SSL =</strong> Para añadir el certificado ssl a nuestra pagina web, hay que activarlo despues de tener la pagina subida con nuestro certificado de ssl.</p></li>
              <li><p><strong>+ Elementor Page Builder =</strong> Paara crear paginas en wordpress con una interfraz mas intuitiva, arrastrando y editando.</p></li>
              <li><p><strong>+ Duplicate Post = </strong>Para duplicar un post.</p></li>
              <li><p><strong>+ TintMCE Avanced = </strong>Coge el editor basico de wordpress y ampliar sus funcionalidades para que tenga muchas mas funciones, es recomendable utilizarlo cuando generamos post.</p></li>
              <li><p><strong>+ Wp super cache =</strong> Para cachear nuestra pagina web (para mejorar la velocidad de la pagina).</p></li>
              <li><p><strong>+ Redirection =</strong> Para redirigir a una pagina externa dentro de tu pagina wordpress.</p></li>
              <li><p><strong>+ Smush - compress, Optimize and Lazy Load images = </strong>Mejora la velocidad de nuestra pagina optimizando las imagenes, es imprescindible si vamos a subir muchas imagenes.</p></li>
              <li><p><strong>+ Font awesome 4 Menus =</strong> Es el unico de todos los anteriores que no tiene soporte, sirve para agregar iconos en nuestro menu en yuxtaposición con sus valores, wordpress ya nos da esta opcion pero estos iconos serán los de fontawesome.com.</p></li>
          </ul>
          
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> Elementor Page Builder</h2>
          <br/>
          <br/>

          <p><strong>Instalador :</strong> Vamos a pluyins, buscamos elementor page builder y lo activamos, a partir de haora cada vez que queramos crear algo en nuestro wordpress tendremos una botonera de editar con Elementor y de esta forma entraremos desde el editor del pluyin.</p>
          <p><strong>Essential Addons for Elementor :</strong> Es un pluyin independiente de Elementor pero que trabaj con el, Elementor solo te permite añadir post a tu sitio en version de pago pero con este pluyin lo vamos hacer de forma gratuita, una vez activado dentro del editor de Elementor aparecera una opcion agregada a su menu : Essential Addons.</p>
          <p><strong>Lectura :</strong> Vamos a poder configurar el modo de lectura en que se van a leer los post.</p>
          <p><strong>Comentarios :</strong> Vamos a poder configurar los comentarios.</p>
          <p><strong>Medios :</strong> Vamos a poder configurar todos los multimedia, por ejemplo los tamaños prefijados de las imagenes.</p>
          <p><strong>Enlaces permanentes :</strong> Vamos a poder configurar nuestras urls por defecto.</p>
          <p><strong>Privacidad :</strong> Definir una pagina como datos de privacidad.</p>
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> WooCommerce</h2>
          <br/>
          <br/>

          <p><strong>Instalador :</strong> Vamos a pluyins, buscamos WooCommerce y lo activamos, despues de activarlo nos reconducira para definir las preferencias, despues de instalar sus preferencias tendremos intalada la tienda.</p>
          <p><strong>WooCommerce :</strong> tiene pedidos, cupones, informes, ajustes, estado y extensiones.</p>
          <p><strong>Productos :</strong> tiene todos los productos, añadir nuevo, categorias, etiquetas y atributos.</p>
          <br/>
          <hr></hr>
          <br/><br/>


          
          <h2  className="bigtitle"><strong>Pluyin:</strong> Google Analytics</h2>
          <br/>
          <br/>

          <p><strong>GA Google Analytics :</strong>es un pluyin que vamos a utilizar para analizar cuanta gente entra, cuantas veces aparecemos en busquedas de google, para poder aparecer en google...</p>
          <p>Lo primero que vamos a hacer es googlear google analytics y crearnos una cuenta nueva, una vez registrados vamos a copiar el id de google analytics y pegarlo en el pluyin de wordpress en GA Tracking ID.</p>
          <p><strong>Google Analytics Dashboard for WP by ExactMetrics :</strong> Una vez bien configurado google analytics vamos a instalar este pluyin para poder ver su interfaz desde wordpress sin tener que googlear google analytics, para activarlo validamos el codigo de acceso que nos muestre.</p>
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> YoastSeo</h2>
          <br/>
          <br/>

          
          <p><strong>Instalar :</strong> Lo activaremos desde pluyins, es recomendable tener instalado y configurado google Analitics.</p>
         
          <p>Lo primero que vamos a hacer es googlear google search y crearnos una cuenta nueva, una vez registrados vamos a crear una nueva propiedad y copiamos el url de nuestra web, verificamos la propiedad (podemos hacerlo a traves de google analytics), obtenemos el codigo de verificacion desde wordpress y asi ya tendriamos el pluyin bien configurado.</p>
           <p>A partir de aqui ya solo queda configurar YOASTseo con nuetra configuracion preferida.</p>
           <p>Si vamos a paginas y bajamos hasta abajo podremos configurar el cuadro de google de SEO (podemos configurar el SEO con emogis que no va a cambiar su posicionamiento y queda mas visible, es una buena practica poner un emogic de un stick por que queda mas profesional).</p>

          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> WP Maintenance Mode</h2>
          <br/><br/>
          <p>Este pluyin lo vamos a utilizar cuando queramos entrar en produccion, es decir trabajar en la pagina sin que se vea las actualizaciones que estamos haciendo.</p>
          <p><strong>Instalacion:</strong> Vamos activar el pluyin desde pluyins, una vez dentro del pluyin accdemos a ajustes y dentro podremos cambiar el estado de encendido a pagado para trabajar en produccion o no y muchas mas opciones como que pagina queremos que este en produccion.</p>
          <p><strong>Modulos:</strong> Podemos crear un temporizador que nos cuente el tiempo restante hasta el final del mantenimiento, crear botoneras, suscripción...</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle"><strong>Pluyin:</strong> Rating-Widget: Star Review System (SEO)</h2>
          <br/><br/>
          <p>Este pluyin lo vamos a utilizar para SEO y nos va a contar las estrellas del cuadro de SEO de google, la unica norma es que no podemos agregar mas de uno por pagina.</p>

          <br/>
          <hr></hr><br/><br/>



          
          <h2  className="bigtitle">Ajustes</h2>
          <br/>
          <br/>

          <p><strong>Ajustes :</strong> Vamos a poder configurar todos los datos internos del head.</p>
          <p><strong>Escritura :</strong> Vamos a poder configurar el modo de enviar los posts.</p>
          <p><strong>Lectura :</strong> Vamos a poder configurar el modo de lectura en que se van a leer los post.</p>
          <p><strong>Comentarios :</strong> Vamos a poder configurar los comentarios.</p>
          <p><strong>Medios :</strong> Vamos a poder configurar todos los multimedia, por ejemplo los tamaños prefijados de las imagenes.</p>
          <p><strong>Enlaces permanentes :</strong> Vamos a poder configurar nuestras urls por defecto.</p>
          <p><strong>Privacidad :</strong> Definir una pagina como datos de privacidad.</p>
          <br/>
          <hr></hr>
          <br/><br/>

                    
          <h2  className="bigtitle">Controller</h2>
          <br/>
          <br/>

          <div><ControllerLaravel 
            openModal ={this.openModal}

            /></div>
       
          <br/>

          <br/>
          <hr></hr>
          <br/><br/>

          

          

          <h2  className="bigtitle">.Env</h2>
        
          <br/><br/>
          <p>Las variables de entorno sirven para especificar los valores retenidos en esas variables hacia tu proyecto de paravel. Hay que asegurarse de tener todos los valores bien escritos porque si no se escribe uno como la contraseña no se crearan las migraciones.</p>
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
            title = 'P h p'
            >
              <Php/>
        </Modal>



      </React.Fragment>

    );



  }

}

export default Wordpress;
