import React from 'react';


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
          <h2  className="bigtitle font">Instalación</h2><br/>

          <p><strong>Instalar Wordpress desde XAMPP: </strong> entrar en www.word.press.org y descargar Get Wordpress, descomprimirlo en la carpeta de htdocs de XAMPP, y escribir la ruta /localhost/(nombre de la carpeta) y desde ahi comenzar la instalación. </p>
          <p><strong>Utilizar interfaz antigua de wordpress:</strong> vamos a pluyins y buscamos - Editor clásico - lo activamos y automáticamente cambiara su interfaz.</p>
   

          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">Temas</h2>

          <br/><br/>
          <p><strong>Understrap:</strong> Es el tema que viene completamente vació, para configurarlo a tu gusto.</p>
          
          <p><strong>Colibri WP:</strong> Tema recomendado para editar por su gran extensión para editar.</p>
          <p><strong>themeforest.net:</strong> Para comprar temas de pago.</p>
          <p><strong>Crear un tema hijo / Pluyin:</strong> Para modificar a nivel código es bueno crear un tema hijo sino no es necesario crear un hijo, vamos a crear desntro de la carpeta theme una nueva carpeta con el nombre del tema hijo y dentro el siguiente archivo style.css;</p>
          
          <img src={imageone} alt="imagen del modal" className="imagewordpress"></img>
          <p>En el import llamamos al style.css del tema padre en este caso colibri-wp.</p>
          <p>- Se puede agregar código de otras formas; como instalando un theme con la opción de modificar código desde él apariencia -> Editor, utilizando el pluyin code snippets o haciendo un require desde el archivo functions.php del proyecto. También podemos ayudarnos a trabajar con Hooks para inyectar codigo sin modificar los archivos, podemos ver los hooks en <strong>hookr.io</strong>. </p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Entradas:</h2>
          <br/><br/>
          <span className="subrayado"> Las entradas en diferencia con las paginas son dinámicas esto quiere decir que el SEO en posicionamiento va variando dependiendo de la fecha de publicación </span> 
          <p><strong>Todas las entradas:</strong> Muestra las entradas.</p>
          <p><strong>Añadir nueva:</strong> Para crear nuevos post.</p>
          <p><strong>Categorías:</strong> Para encapsular en categorías.</p>
          <p><strong>Etiquetas:</strong> Para un buen SEO y posicionar en google aunque podemos crearla de manera rápida desde añadir nueva.</p>
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">Medios:</h2>
          <br/><br/>
          <p><strong>Biblioteca:</strong> Muestra la librería de imágenes y desde aquí también podremos eliminarlas y editarlas, si entramos a editarlas podremos agregar información para mejorar nuestro SEO de las imágenes de nuestro proyecto.</p>
          <p><strong>Añadir nuevo:</strong> Para subir una nueva imagen, tambien podemos subir varias imágenes a la vez para mantenerlas guardadas en nuestro poryecto.</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle">Paginas</h2>
          <br/>
          <br/>
          <span className="subrayado"> Las paginas en diferencia con las entradas son estáticas esto quiere decir que el SEO en posicionamiento no varia dependiendo de la fecha de publicación</span> 
          <p><strong>Todas las paginas:</strong> Funciona de igual manera que en biblioteca para las entradas.</p>
          <p><strong>Añadir nueva:</strong> Funciona de igual manera que en añadir nueva para las entradas.</p>
          
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle">Pluyins:</h2>
          <br/><br/>
          <p><strong>widgets:</strong> Están en apariencia - widgets, son zonas de contenido que podemos agregar al rededor de distintas áreas de la pagina.</p>
          <p><strong>Pluyins recomendables para instalar en nuestro proyecto:</strong> Funciona de igual manera que en biblioteca para las entradas.</p>

          <ul>
              <li><p><strong>+ Contact Form 7 =</strong> Para crear formularios de contacto de forma rápida, para agregar un formulario lo haremos desde contacto - Añadir nuevo y lo meteremos en una nueva pagina con Essential Addons for Elementor.</p></li>
              <li><p><strong>+ Yoast SEO =</strong> Para hacer SEO en nuestra pagina web.</p></li>
              <li><p><strong>+ WooCommerce = </strong>Sirve para añadir una tienda completa dentro de nuestra pagina web.</p></li>
              <li><p><strong>+ Really simple SSL =</strong> Para añadir el certificado ssl a nuestra pagina web, hay que activarlo después de tener la pagina subida con nuestro certificado de ssl.</p></li>
              <li><p><strong>+ Elementor Page Builder =</strong> Para crear paginas en wordpress con una interfraz mas intuitiva, arrastrando y editando.</p></li>
              <li><p><strong>+ Duplicate Post = </strong>Para duplicar un post.</p></li>
              <li><p><strong>+ TintMCE Avanced = </strong>Coge el editor básico de wordpress y ampliar sus funcionalidades para que tenga muchas mas funciones, es recomendable utilizarlo cuando generamos post.</p></li>
              <li><p><strong>+ Wp super cache =</strong> Para cachear nuestra pagina web (para mejorar la velocidad de la pagina).</p></li>
              <li><p><strong>+ Redirection =</strong> Para redirigir a una pagina externa dentro de tu pagina wordpress.</p></li>
              <li><p><strong>+ Smush - compress, Optimize and Lazy Load images = </strong>Mejora la velocidad de nuestra pagina optimizando las imágenes, es imprescindible si vamos a subir muchas imágenes.</p></li>
              <li><p><strong>+ Font awesome 4 Menus =</strong> Es el único de todos los anteriores que no tiene soporte, sirve para agregar iconos en nuestro menú en yuxtaposición con sus valores, wordpress ya nos da esta opción pero estos iconos serán los de fontawesome.com.</p></li>
          </ul>
          
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> Elementor Page Builder</h2>
          <br/>
          <br/>

          <p><strong>Instalador :</strong> Vamos a pluyins, buscamos elementor page builder y lo activamos, a partir de ahora cada vez que queramos crear algo en nuestro wordpress tendremos una botonera de editar con Elementor y de esta forma entraremos desde el editor del pluyin.</p>
          <p><strong>Essential Addons for Elementor :</strong> Es un pluyin independiente de Elementor pero que trabaja con él, Elementor solo te permite añadir post a tu sitio en versión de pago pero con este pluyin lo vamos hacer de forma gratuita, una vez activado dentro del editor de Elementor aparecerá una opción agregada a su menu : Essential Addons.</p>
          <p><strong>Lectura :</strong> Vamos a poder configurar el modo de lectura en que se van a leer los post.</p>
          <p><strong>Comentarios :</strong> Vamos a poder configurar los comentarios.</p>
          <p><strong>Medios :</strong> Vamos a poder configurar todos los multimedia, por ejemplo los tamaños prefijados de las imágenes.</p>
          <p><strong>Enlaces permanentes :</strong> Vamos a poder configurar nuestras urls por defecto.</p>
          <p><strong>Privacidad :</strong> Definir una pagina como datos de privacidad.</p>
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> WooCommerce</h2>
          <br/>
          <br/>

          <p><strong>Instalador :</strong> Vamos a pluyins, buscamos WooCommerce y lo activamos, después de activarlo nos reconducirá para definir las preferencias, después de instalar sus preferencias tendremos instalada la tienda.</p>
          <p><strong>WooCommerce :</strong> tiene pedidos, cupones, informes, ajustes, estado y extensiones.</p>
          <p><strong>Productos :</strong> tiene todos los productos, añadir nuevo, categorías, etiquetas y atributos.</p>
          <br/>
          <hr></hr>
          <br/><br/>


          
          <h2  className="bigtitle"><strong>Pluyin:</strong> Google Analytics</h2>
          <br/>
          <br/>

          <p><strong>GA Google Analytics :</strong>es un pluyin que vamos a utilizar para analizar cuanta gente entra, cuantas veces aparecemos en búsquedas de google, para poder aparecer en google...</p>
          <p>Lo primero que vamos a hacer es googlear google analytics y crearnos una cuenta nueva, una vez registrados vamos a copiar el id de google analytics y pegarlo en el pluyin de wordpress en GA Tracking ID.</p>
          <p><strong>Google Analytics Dashboard for WP by ExactMetrics :</strong> Una vez bien configurado google analytics vamos a instalar este pluyin para poder ver su interfaz desde wordpress sin tener que googlear google analytics, para activarlo validamos el código de acceso que nos muestre.</p>
          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> YoastSeo</h2>
          <br/>
          <br/>

          
          <p><strong>Instalar :</strong> Lo activaremos desde pluyins, es recomendable tener instalado y configurado google Analitics.</p>
         
          <p>Lo primero que vamos a hacer es googlear google search y crearnos una cuenta nueva, una vez registrados vamos a crear una nueva propiedad y copiamos el url de nuestra web, verificamos la propiedad (podemos hacerlo a traves de google analytics), obtenemos el código de verificación desde wordpress y asi ya tendríamos el pluyin bien configurado.</p>
           <p>A partir de aquí ya solo queda configurar YOASTseo con nuestra configuración preferida.</p>
           <p>Si vamos a paginas y bajamos hasta abajo podremos configurar el cuadro de google de SEO (podemos configurar el SEO con emogis que no va a cambiar su posicionamiento y queda mas visible, es una buena practica poner un emogic de un stick por que queda mas profesional).</p>

          <br/>
          <hr></hr>
          <br/><br/>

          <h2  className="bigtitle"><strong>Pluyin:</strong> WP Maintenance Mode</h2>
          <br/><br/>
          <p>Este pluyin lo vamos a utilizar cuando queramos entrar en producción, es decir trabajar en la pagina sin que se vea las actualizaciones que estamos haciendo.</p>
          <p><strong>instalación:</strong> Vamos activar el pluyin desde pluyins, una vez dentro del pluyin accedemos a ajustes y dentro podremos cambiar el estado de encendido a pagado para trabajar en producción o no y muchas mas opciones como que pagina queremos que este en producción.</p>
          <p><strong>Modulos:</strong> Podemos crear un temporizador que nos cuente el tiempo restante hasta el final del mantenimiento, crear botoneras, suscripción...</p>
          <br/>
          <hr></hr><br/><br/>


          <h2  className="bigtitle"><strong>Pluyin:</strong> Rating-Widget: Star Review System (SEO)</h2>
          <br/><br/>
          <p>Este pluyin lo vamos a utilizar para SEO y nos va a contar las estrellas del cuadro de SEO de google, la única norma es que no podemos agregar mas de uno por pagina.</p>

          <br/>
          <hr></hr><br/><br/>


          
          <h2  className="bigtitle">Ajustes</h2>
          <br/>
          <br/>

          <p><strong>Ajustes :</strong> Vamos a poder configurar todos los datos internos del head.</p>
          <p><strong>Escritura :</strong> Vamos a poder configurar el modo de enviar los posts.</p>
          <p><strong>Lectura :</strong> Vamos a poder configurar el modo de lectura en que se van a leer los post.</p>
          <p><strong>Comentarios :</strong> Vamos a poder configurar los comentarios.</p>
          <p><strong>Medios :</strong> Vamos a poder configurar todos los multimedia, por ejemplo los tamaños prefijados de las imágenes.</p>
          <p><strong>Enlaces permanentes :</strong> Vamos a poder configurar nuestras urls por defecto.</p>
          <p><strong>Privacidad :</strong> Definir una pagina como datos de privacidad.</p>
          
          <br/>
          <hr></hr><br/><br/>
          
          <h2  className="bigtitle">Migrar WOrdpress de localhost a un servidor</h2>
          <br/>
          <br/>
          <p><strong>Preparacion:</strong></p>
          <p>- vamos a la carpeta que tenemos en nuestra carpeta htdocs de xampp y la vamos a comprimir a parte.</p>
          <p>- entramos en nuestra base de datos y exportamos toda la base de datos.</p>
          <p>- metemos la carpeta comprimida y el archivo sql exportado dentro de la misma carpeta.</p>
          <br/>
          <p><strong>Subir archivos al Hosting:</strong></p>
          <p>- desde nuestro hosting vamos a subir el archivo comprimido y desde ahi lo vamos a descomprimir y la movemos a la carpeta principal (en este caso public_html).</p>
          <p>- vamos a subir de forma independiente en la parte hosting el archivo de sql.</p>
          <p>- Entramos en Manage y PhpMyAdmin e introducimos el usuario y contraseña que nos dan, entramos a nuestra base de datos con el mismo nombre y una vez dentro le damos a importar y seleccionamos nuestro archivo sql.</p>
          <br/>
          <p><strong>Enlazar los datos del hosting:</strong></p>
          <p>+ buscamos en nuestra base de datos con wp_ config (el wp puede cambiar dependiendo como lo hayamos configurado) y clickamos al unico que nos aparece</p>
          <p>- en el primer valor que sera el siteurl lo cambiaremos por la url que nos da el hosting.</p>
          <p>- en el segundo valor que sera home lo volveremos a cambiar por la misma url que nos da el hosting.</p>
          <p>+ haora vamos dentro de la base de datos de nuestro hosting y buscamos tmabién wp_config.</p>
          <p>- cambiamos el DB_NAME por el que nos da el hosting y lo mismo hacemos con DB_USER, PASSWORD, DB_HOST.</p>
          

          <br/>
         
          <br/><br/>
          <br/>
          <br/>
         <br/>
          <br/>

          
        </div>


      </React.Fragment>

    );



  }

}

export default Wordpress;
