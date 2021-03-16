
import React from 'react';
import Modal from './Modal';
import imageone from "../source/codezen 7.png";
import imagetwo from "../source/image html.png";



class htmlyCss extends React.Component{

  state={
    openModal: false
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

    render(){
      return (
  
        <React.Fragment>
          <div className="container">
              <div className="col-5 ">
                            
  
                    <div  className=" bigtitle font"><center><strong>Html</strong></center></div><br/>
  

  
              
                    <hr></hr><br/>
                    <h2  className="bigtitle">Estructura global</h2>
                    <br/>
  
                    <img src={imagetwo} className="imagehtml col-12"></img>

                    <br/>
  
                    <p><strong>header:</strong> Se usa para definir el encabezado.</p>
                    <p><strong>body:</strong> Es donde se almacena todo el contenido visible.</p>
                    <p><strong>footer:</strong> Es donde se almacena el pie de pagina.</p>
                    <p><strong>nav:</strong> Sirve para poner los enlaces de navegación de dentro de la pila o fuera como menús...</p>
                    <p><strong>main:</strong> Representa la parte principal del cuerpo.</p>
                    <p><strong>article:</strong> Sirve para un solo uso o ser rehusada como articulo, una entrada, un blog, un widget ...</p>
                    <p><strong>aside:</strong> Sirve para contener información indispuesta a la pagina como un biografía, publicidad, cosas relacionadas...</p>
                    <p><strong>section:</strong> Sirve para elegir una sección de un elemento, por ejemplo el despliegue de un navegador en varios niveles, o el despliegue de un h1 y un p.</p>
                    <p><strong>hgroup:</strong> Sirve para concatenar títulos secundarios sin perjudicar el documento, se engloba siempre dentro de los h1, h2, h3, h4, h5, h6.</p>
                    <p><strong>figure y figcaption:</strong> Sirve para colocar imágenes de forma profesional.</p>
                    <p><strong>div:</strong> Sirve para seleccionar una división.</p>
                    
                    <br/>

                    

                    <br/>

                    <hr></hr><br/>
                    <h2  className="bigtitle">Etiquetas</h2>
                    <br/>
  
  
                    <p><strong>h1:</strong> La etiqueta h1 es para poner un titulo, es una buena practica para SEO que en toda la pagina solo haya un h1.</p>
                    <p><strong>h2:</strong> Es como la etiqueta h1 pero cambia su estado de jerarquía y de tamaño, hay varios estados en la jerarquía de los títulos; h1, h2, h3. h4, h5, h6.</p>
                    <p><strong>p:</strong> Para escribir párrafos.</p>
                    <p><strong>cites:</strong> Para crear citas.</p>
                    <p><strong>blockquote:</strong> Para crear citas en bloques.</p>
                    <p><strong>hr:</strong> Es una etiqueta auto-cerrada y sirve para colocar un separador..</p>
                    <p><strong>br:</strong> Es una etiqueta auto-cerrada y sirve para hacer un salto de linea.</p>
                    <p><strong>strong:</strong> Sirve para poner el texto en negrita.</p>
                    <p><strong>b:</strong> Sirve para poner el texto en negrita.</p>
                    <p><strong>i:</strong> Sirve para poner el texto en cursiva.</p>
                    <p><strong>em:</strong> Sirve para poner el texto en cursiva.</p>
                    <p><strong>u:</strong> Sirve para poner el texto subrayado.</p>
                    <p><strong>small:</strong> Sirve para poner el texto mas pequeño.</p>
                    <p><strong>big:</strong> Coloca el texto mas grande.</p>
                    <p><strong>sub:</strong> Para colocar subindices.</p>
                    <p><strong>del:</strong> Para poner texto como tachado.</p>
                    <p><strong>q:</strong> Para escribir citas cortas. (" ").</p>
                    <p><strong>abbr:</strong> Para escribir abreviaciones.</p>
                    <p><strong>dfn:</strong> Para marcar palabras que quieras definir.</p>
                    <p><strong>adress:</strong> Para escribir información de contactom, se suele escribir dentro del footer.</p>
  
                    <p><strong>div:</strong> Para crear secciones.</p>
                    <p><strong>span:</strong> Para marcar aislamientos de texto y darles estilos.</p>
                    <p><strong>iframe:</strong> Para crear otro contenedor de navegación para incrustar otro html dentro de tu pagina. Puede tener los parámetros src, height, width, scrolling, frameborder y seamless</p>
                    <p><strong>meta:</strong> Los meta van en el head y definen la parte invisible de la pagina pero de utilidad para la búsqueda y definición de la pagina.</p>
                    <p><strong>source:</strong> Para especificar recursos de audio, video y picture.</p>
  
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Listas</h2>
                    <br/>
  
  
                    <p><strong>ol:</strong> Para empezar a crear una lista numerada.</p>
                    <p><strong>ul:</strong> Para empezar a crear una lista no numerada.</p>
                    <p><strong>li:</strong> Para listar componentes, siempre debe ir dentro de un ol o ul.</p>
                    <p><strong>dl:</strong> Para crear listas descriptivas.</p>
                    <p><strong>dt:</strong> Para señalar un elemento de la lista descriptiva.</p>
                    <p><strong>dd:</strong> Para crear el detalle del elemento descriptivo.</p>
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Liks</h2>
                    <br/>
  
  
                    <p><strong>a:</strong> etiqueta para crear links.</p>
                    <p><strong>a href="mailto:ejemplo@gmail.com":</strong> El atributo mailto: lo utilizamos cuando queremos desglosar automáticamente por un modal el email.</p>
                    <p><strong>a target="/otro":</strong> El atributo target lo utilizamos cuando queremos abrir una pestaña nueva con la dirección que le enviemos.</p>
                    <p><strong>a href="hola.jpg" download="filename":</strong> Descarga el archivo con el nombre filename.jpg..</p>
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Images</h2>
                    <br/>
  
  
                    <p><strong>img:</strong> Crear una etiqueta para subir una imagen.</p>
                    <p><strong>src:</strong> Es un atributo de img que se utiliza para indicarnos donde se encuentra la imagen.</p>
                    <p><strong>alt:</strong> Es un atributo de img que se utiliza para poner un texto alternativo en la imagen.</p>
                    <p><strong>title:</strong> Es un atributo de img que se utiliza para indicarnos el nombre de la imagen.</p>
                    <p><strong>figure:</strong> Para introducir imágenes independientes.</p>
                    <p><strong>firgcaption:</strong> Para crear una leyenda en el elemento concatenado figure, el texto se mostrara dentro de la imagen, la etiqueta figcaption debe ir dentro de figure.</p>
  
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Tablas</h2>
                    <br/>
  
  
                    <p><strong>table:</strong> Para empezar a contener una tabla.</p>
                    <p><strong>tr:</strong> Para empezar a crear filas en la table. </p>
                    <p><strong>th:</strong> Para crear los head de las filas, coloca por defecto el texto en negrita. Tienen que ir dentro de los tr.</p>
                    <p><strong>td:</strong> Para crear celdas en las filas. Tienen que ir dentro de los tr.</p>
                    <p><strong>thead:</strong> Para representar un bloque. Dentro del thead tienen que ir la etiqueta tr y th.</p>
                    <p><strong>tbody:</strong> Para representar el cuerpo. Dentro del tbody tienen que ir la etiqueta tr y td.</p>
                    <p><strong>tfoot:</strong> Para representar el footer de la table, se suele utilizar para resultados. Dentro del tfoot tienen que ir la etiqueta tr y td.</p>
  
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Listas</h2>
                    <br/>
  
                    <p><strong>form:</strong> Para empezar a crear un formulario puede tener varios atributos; action para definir donde queremos enviar el método del formulario, method par definir los métodos http del formulario y enctype multipart/form-data para subir archivos al servidor.</p>
                    <p><strong>input:</strong> Para crear controladores, pueden tener atributos type y estos pueden ser password, text, submit, button... Pueden tener varios atributos como maxlength, value, name, .</p>
                    <p><strong>textarea:</strong> Para empezar a crear una lista no numerada.</p>
                    <p><strong>radio:</strong> es un tipo de input con el parámetro type radio, puede tener el parámetro checked para definir por defecto al que queramos ponerle ese parámetro, suelen ir cada uno con un label. Los radio por defecto solo se puede seleccionar uno</p>
                    <p><strong>checkbox:</strong> Para crear una casilla de check tiene los mismos atributos de radio e implementa el indeterminate, que en vez de checkear la casilla la deja en un estado intermedio, por defecto se pueden encasillar tantos checkouts como te permita la web.</p>
                    <p><strong>drop-down boxes:</strong> Para crear un drop-down crearemos un select y dentro los options. Tienen varios atributos entre ellos multiple, disabled, autofocus, required...</p>
                    <p><strong>button:</strong> Para crear una botonera.</p>
                    <p><strong>label:</strong> Para crear un sub titulo asociado a una etiqueta html, se pueden concatenar utilizando for como atributo del label e id como atributo de la etiqueta html, las dos deben tener el mismo nombre.</p>
                    <p><strong>fieldset:</strong> Para agrupar varios elementos en un formulario.</p>
                    <p><strong>leyend:</strong> Para crear un titulo a un grupo asociado con fieldest, van dentro de la etiqueta fieldset.</p>
                    <br/>
  
          <br/>
          <br/>
          </div>
          
          
  
  
          <div className="col-5  textoderecho ">
                  
  
                    <div  className="bigtitle font"><center><strong>Css</strong></center></div><br/>
  
                    <br/>
                    <hr></hr>
                    <br/>
                    
                    <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Estructura inicial
                    </button>

                    <br/>
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Métodos</h2>
                    <br/>
  
  
                    <p><strong>background-color: #5555:</strong> Para definir el color de fondo, los colores se pueden definir en #, rgb(), rgba(), hsl(), hsla(), .</p>
                    <p><strong>background-image: url():</strong> Para definir una imagen de fondo.</p>
                    <p><strong>background-repeat:</strong> Para definir la repetición de la imagen.</p>
                    <p><strong>background-position:</strong> Para definir la posición de la imagen.</p>
                    <p><strong>opacity: 0.5:</strong> Para definir la opacidad.</p>
                    <p><strong>display:</strong> Para definir el nodo en el que se muestra un elemento, imagen o texto sus parámetros pueden ser none, block, inline,table...</p>
                    <p><strong>color:</strong> Para definir el color del texto.</p>
                    <p><strong>width:</strong> Para definir el ancho.</p>
                    <p><strong>height:</strong> Para definir el alto.</p>
                    <p><strong>padding:</strong> Para definir el borde desde dentro del elemento.</p>
                    <p><strong>marggin:</strong> Para definir el margen desde fuera del elemento..</p>
                    <p><strong>border:</strong> Para definir el borde desde fuera del elemento.</p>
                    <p><strong>border-radius:</strong> Para rodear el borde del radio.</p>
                    <p><strong>font-sice:</strong> Para definir el tamaño del texto.</p>
                    <p><strong>text-align:</strong> Para definir el alineado del texto puede ser left, right, center y justify.</p>
                    <p><strong>text-decoration:</strong> Para definir la decoración del texto.</p>
                    <p><strong>letter-spacing:</strong> Para definir el espacio entre componentes.</p>
                    <p><strong>line-height:</strong> interlineado entre la altura del texto, es muy utilizado para alinear los botones verticalmente.</p>
                    <p><strong>vertical-align:</strong> Para definir la alineación vertical del texto; middle, bottom, sub...</p>
                    <p><strong>z-index:</strong> Para definir la posición de un elemento o imagen en eje z.</p>
                    <p><strong>position:</strong> Para definir la posición del elemento, sus atributos son; static, relative, fixed, absolute, sticky.</p>
                    <p><strong>marggin:</strong> Para definir el margen.</p>
                    <p><strong>justify-content:</strong> Para definir la alineación de todos los elementos en el eje principal.</p>
                    <p><strong>align-items:</strong> Para definir la alineación de todos los elementos en el eje transversal.</p>
                    <p><strong>align-self:</strong> Controla la alineación de un elemento flexible en el eje transversal.</p>
                    <p><strong>align-content:</strong> Controla el espacio entre lineas en el eje transversal.</p>
  
                    <p><strong>box-shadow:</strong> Para definir la sombra de una caja.</p>
                    <p><strong>float:</strong> Para definir ele flujo de posición.</p>
                    <p><strong>transition:</strong> Para definir la duracion de un efecto transitivo.</p>
                    <p><strong>overflow:</strong> Para definir un texto cuando es demasiado grande tiene valores como scroll, visible, hidden y auto.</p>
                    <p><strong>visibility:</strong> Para definir si un elemento debe ser visible.</p>
  
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Listas, tablas</h2>
                    <br/>
  
  
                    <p><strong>list-style-type:</strong> Para definir el tipo de estilo de vista.</p>
                    <p><strong>list-style-image:</strong> Para definir el valor de la imagen.</p>
                    <p><strong>list-style-position:</strong> Para definir el valor de la position.</p>
                    <p><strong>border-collapse:</strong> Para definir el borde de una tabla.</p>
                    <p><strong>border-spacing:</strong> Para definir el margen de bordes entre tablas siguientes. </p>
  
  
  
                    <br/>
                    <hr></hr><br/>
                    <h2  className="bigtitle">Position</h2>
                    <br/>
  
  
                    <p><strong>position:static:</strong> Para definir la posición por defecto.</p>
                    <p><strong>position:relative:</strong> Para definir la posición por defecto, su posición no repercute en la posición del elemento consiguiente pero si conserva su espacio como si fuese position:static.</p>
                    <p><strong>position:absolute:</strong> Para definir la posición por defecto, su posición no repercute en la posición del elemento consiguiente y no conserva su espacio como si fuese position:static.</p>
                    <p><strong>position:fixed:</strong> Para definir la posición por defecto y sin crear espacios entre el elemento consiguiente, su función es como un bloque contendor.</p>
                    <p><strong>clear:</strong> Para definir si un elemento podría estar cerca de un elemento flotante, sus valores pueden ser; none, left, right, both, inline-start, inline-end.</p>
  
          <br/>
          <br/>
          </div>
  
          </div>


          <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'I n i c i a r - e s t r u c t u r a - d e - C s s'
            >
              <img src={imageone} alt="imagen del modal" className="imagecarbon"></img>
          </Modal>



        </React.Fragment>
  
      );}


}

export default htmlyCss;
