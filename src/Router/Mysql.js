import React from 'react';

import imageone from "../source/diagramadevenn1.png";
import imagetwo from "../source/diagramadevenn2.png";
import imagethree from "../source/diagramadevenn3.png";
import imagefour from "../source/diagramadevenn4.png";
import imagefive from "../source/diagramadevenn5.png";

import $ from "jquery";



function Mysql(){
  

    return (

      <React.Fragment>
        <div className="container">

          <h2  className="bigtitle font">Normalizacion</h2><br/>
  

          <p><strong>Diagrama fisico: </strong>para hacer la Normalizacion, tienen que tener todas las tablas una cardinalidad de uno a muchos. la normalizacion nos ayuda a dejar todo de una forma normal, hay cuatro reglas de Cold para lograr esto;</p>
          <ul>
          <li><p><strong>-Primera forma nomral: sin campos repetidos. </strong></p></li>
          <li><p><strong>-Segunda forma nomral: cada campo de la tabla debe depender de una id unica. (Primary key) </strong></p></li>
          <li><p><strong>-Tercera forma nomral: campos que no son clave no deben de tener dependencias. </strong></p></li>
          <li> <p><strong>-Cuarta forma nomral: los campos multivaluados se identifican por una llave unica. (Foreign key) </strong></p></li>
          <li> <code><i>En la normalizacion la tabla que tiene muchos es donde se meten las llaves foraneas. (se concatena con la otra tabla. ej; Usuario_id).</i></code></li>
          </ul>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Ddl</h2><br/>
          <br/>
          <p><strong>Create :</strong> se pulsa el boton derecho y se crea.</p>
          <p><strong>Alter :</strong> se pulsa el boton derecho y se modifica.</p>
          <p><strong>Drop:</strong> se pulsa el boton derecho y se elimina.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Dml</h2><br/>
          <br/>
          <p><strong>INSERT INTO people(last_name, first_name) VALUES('Hernandez', 'Laura'): </strong> crea una tabla llamada people con los atributos de last_name y first_name y sus valores.</p>
          <p><strong>UPDATE people SET last_name= 'Chavez' WHERE person_id = 1: </strong> modifica la tabla people, el nombre por chavez solo donde person_id es 1.</p>
          <p><strong>DELETE FROM people WHERE person_id = 1: </strong>elimina solo el person_id 1 de la tabla people.</p>
          <p><strong>SELECT first_name, Last_name FROM people: </strong>selecciona el first_name y el last_name de la tabla people. Mas adelante profundizaremos mas en el SELECT.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Diagramas de Venn</h2><br/>
          <br/>
          <code>Toma como ejemplo las imagenes como tabla de la izquierda -> Usuario y la de la derecha -> Post</code><br/><br/>
          <img src={imageone} className="Vendiagram"></img>

          <p><strong>SELECT * FROM Usuarios LEFT JOIN Post ON usuarios_id = Post.Usuario_id: </strong></p>
          <p><strong>Left join:</strong> es para tomar la tabla que esta a la izquierda (Usuario) y es la primera que metimos. Tambien se puede usar right join.</p>
          <p><strong>Post: </strong>es para indicar que vamos a unirla con esa tala. Pero recuerda que no se unen por arte de magia, vamos a utilizar las llaves foraneas.</p>
          <p><strong>ON: </strong>es la sentencia que vamos a utilizar para saber que campo pertenece a cual, en este caso decimos que la tabla usuarios usuarios la concatenamos la llave primaria (id) con la llave foranea (usuario_id) de la tabla post.</p>
          <br/><br/><br/><br/><br/>
          <img src={imagetwo} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios INNER JOIN Post ON usuarios_id = Post.Usuario_id WHERE post.usuario_id IS NULL: </strong></p>
          <p><strong>WHERE post.usuario_id IS NULL:</strong> trae solo los usuarios que no tengan ningun post.</p>
          
          <br/><br/><br/><br/><br/>


          <img src={imagethree} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios INNER JOIN Post ON usuarios_id = Post.Usuario_id: </strong></p>
          <p><strong>INNER JOIN:</strong> nos trae solo lo que esta ligado, trae solo los que tienen dependencias de ambos lados, (los que no estan huerfanos).</p>
          
          <br/><br/><br/><br/><br/>


          <img src={imagefour} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios LEFT JOIN Post ON usuarios_id = Post.Usuario_id UNION SELECT * FROM Usuarios RIGHT JOIN Post ON usuarios_id = Post.Usuario_id: </strong></p>
          <p><strong>UNION:</strong> junta las dos tablas de right join y left join.</p>

          
          <br/><br/><br/><br/><br/>

          <img src={imagefive} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios LEFT JOIN Post ON usuarios_id = Post.Usuario_id WHERE post.usuario_id IS NULL UNION SELECT * FROM Usuarios RIGHT JOIN Post ON usuarios_id = Post.Usuario_id WHERE post.usuario_id IS NULL : </strong></p>
          <p><strong>WHERE post.usuario_id IS NULL:</strong> nos va a traer un lado pero no lo del otro lado. No va a traer los usuarios que tengan post.</p>
          
          <br/><br/><br/><br/><br/>



          <br/>
          <hr></hr><br/>
 




          <h2  className="bigtitle">Metodos de un query</h2><br/>
          <br/>
          <code>El orden de colocar los metodos son los siguientes.</code><br/><br/>
          <p><strong>SELECT: </strong>lo que quieres mostrar.</p>
          <li><p><strong>-AS: para poner un subnombre. </strong></p></li>
          <li><p><strong>-* : un atajo para seleccionar todos los atributos. </strong></p></li>
          <li><p><strong>-AVG: calcula el promedio. </strong></p></li>
          <li><p><strong>-COUNT: cuenta los registros de un campo. </strong></p></li>
          <li><p><strong>-SUM: suma los valores de un campo. </strong></p></li>
          <li><p><strong>-MAX: devuelve el maximo de un campo. </strong></p></li>
          <li> <p><strong>-MIN: devuelve el minimo de un campo. </strong></p></li>
          <li> <p><strong>-GROUP_CONCAT: devuelve su resultado separandolos por comas. </strong></p></li>
  
          
          <p><strong>FROM:</strong> de donde voy a tomar los datos.</p>
          <p><strong>WHERE:</strong> los filtros de los datos que quieres mostrar.</p>
          <li><p><strong>-LIKE %algo%: para los que contengan el valor algo. </strong></p></li>
          <li><p><strong>-BETWEEN: donde esten entre dos valores, where fecha_publicacion between '2020-01-01' an '2020-12-13'. </strong></p></li>
          <li><p><strong>-IS NULL: donde el valor es nulo. </strong></p></li>
          <li><p><strong>-IS NOT NULL: donde el valor no es nulo. </strong></p></li>
          <li><p><strong>-AND: (y) para agregar mas valores al metodo IS NULL or IS NOT NULL. </strong></p></li>
          <p><strong>ORDER BY: </strong>el orden en el que quiero presentar la informacion.</p>
          <li><p><strong>-ASC: sirve para ordenar de forma ascendente. </strong></p></li>
          <li><p><strong>-DESC: sirve para ordenar de forma descendente. </strong></p></li>
          <li><p><strong>-LIMIT: se usa para limitar la cantidad de resultados que arroja el query. </strong></p></li>
          <p><strong>GROUP BY: </strong>los grupos por los que me interesa agrupar la informacion. por ejemplo; SELECT apellido, avg(nota) FROM alumnos GROUP BY apellido -> haz una media de las notas agrupando los que se apelliden igual.</p>
          
          <p><strong>HAVING: </strong>los filtros que quiero que tengan mis datos, son dependientes del ORDER BY, se pone despues de group by.</p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
        </div>
      </React.Fragment>

    );


}

export default Mysql;
