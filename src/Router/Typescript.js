import React from 'react';
import image1 from "../source/codezen 16.png";


function Typescript(){

    return (

      <React.Fragment>
        <div className="container">

          <h2  className="bigtitle font">Instalación</h2><br/>
  

          <p><strong>npm install -g typescript: </strong>instalar el compilador tsc de typescript de manera global. <br/></p>
          <p><strong>tsc --version: </strong>Para ver la version del compilador tsc instalada. <br/></p>


          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Usando el compilador tsc</h2><br/>

          <p><strong>tsc hello.ts</strong> lo compila y devuelve un archivo hello.js.</p>
          <p><strong>node hello.js</strong> para abrir directamente desde node el archivo hello.js.</p>
          <p><strong>tsc --watch your_file.ts</strong> para compilar automaticamente nuestro archivo .ts.</p>
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
          <p><strong>Never: </strong> Para valores que no ocurren como una Excepcion, algun ciclo "infinito"... </p>
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
          <p><strong>Tupla:</strong> Una tupla sirve para darle a un array diferentes tipos -> <strong>[string, booleano]</strong> definiendo cada uno de estos valores.</p>
          <p><strong>Enum:</strong> cuando queremos enumerar un conjunto de valores a traves de un objeto.</p>

        
          <strong>Unión de Tipos, Alias y Tipos Literales :</strong> <br/>
          <ul>
            <li><p><strong>+ Unión de Tipos:</strong> Para unir tipos lo aremos a tra ves de |. let User: number | string =. </p></li>
            <li><p><strong>+ Alias:</strong> Los alias suelen ser usados para concatenar una union de tipos con un nuevo nombre que conforman ese conjunto de tipos se hace a traves de <strong>type</strong> -> type Idvar= number|string; let IdUser:Idvar=  .</p></li>
            <li><p><strong>+ Tipos Literales:</strong> Para definir solo valores que ya tengamos definidos, por ejemplo; type Ej: '100x100' | '200x200; let ejercicio:Ej = '100x100' -> En este ejemplo no puede tener otro valor que no sea 100x100 o 200x200, si nos da cualquier otro valor nos saldra error.</p></li>
          </ul>
          <p><strong>Aserciones de tipo:</strong>Conversion de tipos de datos, hay dos formas entre <strong>menor que y mayor que</strong> o <strong>la variable y la palabra reservada as</strong>; </p>
          <ul>
            <li><p>+ let username:any=<strong>("menor que" string "mayor que" 'codigoestrella')</strong>.lenght.</p></li>
            <li><p>+ let username:any=<strong>(username as string)</strong>.lenght.</p></li>
          </ul>

          <p><strong>Funciones:</strong> Hay varias formas de de tipar una function .</p>
          <ul>
            <li><p>+ function codigoestrella<strong>(color:string, codigo:string, visible?:boolean):</strong> El uso de colocar <strong>?</strong> despues de valor, como es en el caso de visible? quiere decir que puede que ese valor no llegue a estar definido. Codigoestrella('red', 'typescript').</p></li>
            <li><p>+ Interface User => <strong>readonly id: number; username:string;</strong> El uso de colocar <strong>readonly</strong> despues de valor, como es en el caso de readonly id: number; se usa para definir solo el valor dado y no poder ser sobrescrito varias veces.</p></li>
          </ul>

          <hr></hr><br/>

          <p>En typescript desde la version 3.8, si queremos tener un encapsulamiento de private podemos usar <strong>#</strong> como pseudonimo, haciendo anotacionn en todos y cada uno de sus usos.</p>

          <hr></hr><br/>


          <div  className="bigtitle">Webpack</div><br/>
          <br/>


          <p><strong>npm install typescript webpack webpack-cli --save-dev: </strong>Instalación de typescript y webpack. Primero iniciar el comando <strong>npm init -y</strong> y despues <strong>npm install typescript webpack webpack-cli --save-dev</strong> y dentro de script escribir "build": "webpack", guardar y meter otro comando <strong>npm run build</strong> <br/><br/></p>
          <p><strong>npm install ts-loader --save-dev :</strong> Para cargar proyectos typescript en webpack...</p>


          <hr></hr><br/>

          <br/>
          <hr></hr><br/>

        </div>
      </React.Fragment>

    );


}

export default Typescript;
