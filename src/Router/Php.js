import React from 'react';
import imagecarbon1 from "../source/codezen 9.png";
import imagecarbon2 from "../source/codezen 10.png";

function Pagereact(){

    return (

      <React.Fragment>
        <div>
        <h2>P.O.O</h2>    
          <hr></hr>      
          <p><strong>Herencia :</strong> para crear hijos entre clases, usaremos la palabra extends en la clase hija para heredar la clase padre, en php solo se puede heredar de un padre. Una vez echa la herencia vamos a compartir sus metodos o a sobreescribirlos. Para heredar vamos a utilizar la palabra reservada <code>extends</code> entre clases.</p>
          <p><strong>Abstracción :</strong> para aislar la clase en diferentes metodos.</p>
          <p><strong>Polimorfismo :</strong> la habilidad que tienen los metodos para dar distintos resultados entre clases.</p>
          <p><strong>Encapsulamiento :</strong> es el alcance; y puede ser public private y protected. Public habilitado para cualquier clase, private con un alcance unico de la clase en la que se define y protected con un alcance de su clase y sus hijas.</p>
          <p><strong>Modularidad :</strong> dividir todo el sistema en diferentes modulos para simplificar el codigo.</p>
          <hr></hr>

          <h4>Metodos de p.o.o</h4> 
          <hr></hr>     
          
          <p><strong>Abstract :</strong> los metodos abstract van al principio de una function o una clase y no se definen solo se declarar para poder definirlos en la herencia.</p>
          <p><strong>Interface :</strong> vamos a crear una interfaz completamente separada y para implementarla usaremos la palabra reservada <code>implements</code> en la clase, no se pueden definir solo se declarar para poder definirlo en la clase llamada como por ejemplo utilizando type hinting.</p>
          <hr></hr> 
          <p><strong>final :</strong> Si utilizamos la palabra reservada final al principio de una function o una clase no vamos a poder heredarla.</p>
          <hr></hr> 
          <p><strong>type hinting :</strong> Para pasar datos en un argumento de una function verificando en su llamada si son de esos datos, con type hinting cambia el scope de la function a dentro de la que estamos pasandolo como argumento, lo valores soportados son ; interfaces, clases, arrays, y callables. Pueden ser de dos tipos;</p>


          <ul>
            <li> <p><strong>- callable :</strong> Se pasa como parametro de una function y pueden ser funciones declarativas.</p></li>
            <li> <p><strong>- closure :</strong> Se pasa como parametro de una function y debe ser funciones anonimas.</p></li>
            <li> <p><strong>- Iterable :</strong> Se pasa como argumento de una function o retorno y sirve para recorrer sus valores en un bucle foreach().</p></li>
         
          </ul>
         <hr></hr>
               
         <h4>P.o.o</h4>
          <div className=" col-12"><img src={imagecarbon1} className="imagecarbon"></img></div>
          <hr></hr>
          <h4>Constructor, get y set</h4>
          <div className=" col-12"><img src={imagecarbon2} className="imagecarbon"></img></div>
          <hr></hr>
        </div>
        <div>
          <h2>Sintaxis</h2>    
          <hr></hr>      
          <p><strong>substr($post, 0, 20) :</strong> para substraer cuantos caracteres se quiere coger de dentro del parentesis.</p>
          <p><strong>explode(', ', $data) :</strong> pasa de un texto a un array directamente. Cada vez que tengas un espacio en $data transformalo en un array.</p>
          <p><strong>implode(', ', $data) :</strong> pasa de un array a un texto directamente. Cada vez que tenga un array en el $data transformalo en un espacio.</p>
          <hr></hr>
          <p><strong>trim($course) :</strong> para normalizar los espacios, tambien podemos utilizar ltrim y rtrim para normalizarlos a la izquierda o a la derecha exclusivamente.</p>
          <hr></hr>
          <p><strong>strtolower($text) :</strong> para transformar el string a minusculas.</p>
          <p><strong>strtoupper($text) :</strong> para transformar el string a mayusculas.</p>
          <p><strong>mb_strtoupper($text) :</strong> para transformar el string a mayusculas de valores multibyte como ñ, é...</p>
          <p><strong>ucfirst($text) :</strong> para transformar la primera letra del string a mayusculas.</p>
          <p><strong>lcfirst($text) :</strong> para transformar la primera letra del string a minusculas si esta el texto en mayusculas.</p>
          <hr></hr>
          <p><strong>str_remplace(' ', '-', $text) :</strong> para reemplazar un texto por otro, en este caso de la variable text vamos a reemplazar los espacios por guiones.</p>
          <p><strong>str_pad($code, 8, '#') :</strong> completa el caracter con ocho numerales -> ########, este ejemplo se utiliza en facturas, podemos agregar otro argumentos mas que sirve para especificar su direccion, STR_PAD_BOTH -> para agregarlo entre los dos lados, STR_PAD_LEFT -> para agregarlo a la izquierda, STR_PAD_RIGHT -> para agregarlo a la derecha.</p>
          <p><strong>strip_tags($text) :</strong> nos elimina las etiquetas del string, es mas utilizado para trabajar con las bases de datos.</p>
          <hr></hr>
          <p><strong>preg_match() :</strong> Utiliza expresiones regulares para devolver un 1 si la comparacion es verdadera y 0 si la comparacion es false.</p>

          <hr></hr>
          <p><strong>array_walk($course, 'upper') :</strong> es la mejor forma de correr un array, $course es el arreglo y upper es la function con la logica de que queremos hacer con ese arreglo.</p>
          <p><strong>array_key_exists('frontend', courses) :</strong> comprueba que el el key de frontend del array courses existe.</p>
          <p><strong>in_array('javascript', courses) :</strong> comprueba que el el value de javascript del array courses existe.</p>
          <p><strong>array_keys($courses) :</strong> comprueba que el el value de javascript del array courses existe.</p>
          <p><strong>array_values() :</strong> comprueba que el el value de javascript del array courses existe.</p>
          <p><strong>sort() :</strong> para ordenar un array, tambien se puede hacer con rsort(), krsort().</p>
          <p><strong>array_merge_recursive($arrayuno, $arraydos) :</strong> para juntar dos arrays distintos pudiendo tener los mismo keys.</p>




          <p><strong>function (&$value) :</strong> para pasar una variable ya existente como referencia del argumento de la function usarmos el ampersand (&) antes de la variable.</p>

        </div>
      </React.Fragment>

    );


}

export default Pagereact;
