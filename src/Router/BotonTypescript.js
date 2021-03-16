import React from 'react';
import Modal from './Modal';

import image1 from "../source/codezen 16.png";
import image2 from "../source/codezen static.png";

class Typescript extends React.Component{
  state = {
    openModal: false,
  }

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

  render(){

    return (

      <React.Fragment>
        <div >

          
          <button 
                      className="buttonTypescript btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Typescript
          </button>


        </div>


        
        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'T y p e s c r i p t'
            >
              <div className="container">

              <h2  className="bigtitle font">Instalación</h2><br/>


              <p><strong>npm install -g typescript: </strong>instalar el compilador tsc de typescript de manera global. <br/></p>
              <p><strong>tsc --version: </strong>Para ver la version del compilador tsc instalada. <br/></p>


              <br/>
              <hr></hr><br/>
              <h2  className="bigtitle">Usando el compilador tsc</h2><br/>

              <p><strong>tsc hello.ts</strong> lo compila y devuelve un archivo hello.js.</p>
              <p><strong>node hello.js</strong> para abrir directamente desde node el archivo hello.js.</p>
              <p><strong>tsc --watch your_file.ts</strong> para compilar automáticamente nuestro archivo .ts.</p>
              <br/>
              <p><strong>tsc --init</strong> para inicializar el archivo tsconfig.ts, una vez instalado el tsconfig.ts podemos copilar todo un proyecto llendo dentro del tsconfig.ts y buscamos el outdir y creamos una carpeta, <strong>"outDir": "./Dist",</strong> y solo con iniciar el comando <strong>tsc</strong> se compilara todo el proyecto dentro de la carpeta /Dist. O <strong>tsc --watch</strong> para automatizar el compilado.</p>
              <br/>
              <p><strong>Para evitar posibles errores vamos a inicializar el proyecto con un export de un objeto vacion</strong>.</p>

              <hr></hr><br/>

              <h2  className="bigtitle">Tipos en typescript</h2><br/>

              <p>Los valores son; <strong>Number, Boolean, String, Array, Tuple, Enum, Any, Void, Null, Undefined, Never, Object</strong>; </p>

              <img src={image1} className="imagehtml col-12"></img> <br/>

              <p><strong>Any: </strong> Para valores, dinámicos o valores que cambien en el tiempo, con Any el tipado puede contener cualquier tipo de valor. </p>
              <p><strong>Void :</strong> Es la ausencia de tipo de valor, es muy usado en retorno de funciones para no retornar un valor.</p>
              <p><strong>Never: </strong> Para valores que no ocurren como una Excepción, algún ciclo "infinito"... </p>
              <p><strong>Null :</strong> Cuando el tipo es Null.</p>
              <p><strong>Undefined: </strong> Cuando el tipo es Undefined. </p>
              <p className="subrayado"><strong>tsc --watch src/doc.ts --strictNullChecks :</strong> Con este flag solo se permite asignar valores de Null y Undefined a variables de tipo Any.</p>

              <p><strong>Object y object:</strong>Un objeto en javascript es lo que encerramos entre llaves. </p>
              <ul>
                <li><p><strong>+ Object:</strong> Instancia de la clase Object de javascript.</p></li>
                <li><p><strong>+ object:</strong> Con este tipo NO se puede acceder a las propiedades del objeto.</p></li>
              </ul>
              <p><strong>Array:</strong> Para crear un tipo de array hay dos maneras;</p>
              <ul>
                <li><p><strong>+ string[]:</strong> Crea un tipo de array exclusivo solo de tipos string.</p></li>
                <li><p><strong>+ Array"menor que"string, number"mayor que":</strong> Crea un tipo de array de diferentes tipos number, string, booleano...</p></li>
              </ul>
              <p><strong>Tupla:</strong> Una tupla sirve para darle a un array diferentes tipos -&gt; <strong>[string, booleano]</strong> definiendo cada uno de estos valores.</p>
              <p><strong>Enum:</strong> cuando queremos enumerar para anidar constantes a traves de un objeto, podemos acceder a las instancias pero no sobrescribirías.</p>


              <strong>Unión de Tipos, Alias y Tipos Literales :</strong> <br/>
              <ul>
                <li><p><strong>+ Unión de Tipos:</strong> Para unir tipos lo aremos a traves de | "pipe" o &. let User: number | string =... let User: number & string =... (Son los Operadores de typescript & es como && y | es como || en javascript pero con tipeados). </p></li>
                <li><p><strong>+ Alias:</strong> Los alias suelen ser usados para concatenar una union de tipos con un nuevo nombre que conforman ese conjunto de tipos se hace a traves de <strong>type</strong> -&gt; type Idvar= number|string; let IdUser:Idvar=  .</p></li>
                <li><p><strong>+ Tipos Literales:</strong> Para definir solo valores que ya tengamos definidos, por ejemplo; type Ej: '100x100' | '200x200; let ejercicio:Ej = '100x100' -&gt; En este ejemplo no puede tener otro valor que no sea 100x100 o 200x200, si nos da cualquier otro valor nos saldra error.</p></li>
              </ul>
              <p><strong>Aserciones de tipo:</strong>Conversion de tipos de datos, hay dos formas entre <strong>menor que y mayor que</strong> o <strong>la variable y la palabra reservada as</strong>; </p>
              <ul>
                <li><p>+ let username:any=<strong>("menor que" string "mayor que" 'codigoestrella')</strong>.length.</p></li>
                <li><p>+ let username:any=<strong>(username as string)</strong>.length.</p></li>
              </ul>

              <p><strong>Funciones:</strong> Hay varias formas de tipar una function, en base a los parámetros y tipando cada parámetro y también el tipo de dato que retorna ( string, boolean... ) si nuestra función no retorna ningún valor agregaremos el tipado void.</p>
              <ul>
                <li><p>+ function codigoestrella<strong>(color:string, codigo:string, visible?:boolean):</strong> El uso de colocar <strong>?</strong> después de valor, como es en el caso de visible? quiere decir que puede que ese valor no llegue a estar definido. Codigoestrella('red', 'typescript').</p></li>
                <li><p>+ Interface User =&gt; <strong>readonly id: number; username:string;</strong> El uso de colocar <strong>readonly</strong> después de valor, como es en el caso de readonly id: number; se usa para definir solo el valor dado y no poder ser sobrescrito varias veces.</p></li>
              </ul>

              <hr></hr><br/>

              <p>En typescript desde la version 3.8, si queremos tener un encapotamiento de private podemos usar <strong>#</strong> como seudónimo, haciendo anotación en todos y cada uno de sus usos.</p>
              <hr></hr>
              <img src={image2} className="col-12 imagehtml"></img>
              <p><strong>static: </strong>Los métodos static son dependientes de su propia clase y no de su instancia, en vez de anteponer la nomenclatura this. usaremos la clase. (Circle.) </p>
              <hr></hr><br/>


              <div  className="bigtitle">Webpack</div><br/>
              <br/>


              <p><strong>npm install typescript webpack webpack-cli --save-dev: </strong>Instalación de typescript y webpack. Primero iniciar el comando <strong>npm init -y</strong> y después <strong>npm install typescript webpack webpack-cli --save-dev</strong> y dentro de script escribir "build": "webpack", guardar y meter otro comando <strong>npm run build</strong> <br/><br/></p>
              <p><strong>npm install ts-loader --save-dev :</strong> Para cargar proyectos typescript en webpack...</p>


              <hr></hr><br/>

              <br/>
              <hr></hr><br/>

              </div>
        </Modal>

      </React.Fragment>

    );

}

}



export default Typescript;
