import React from 'react';

import imageone from "../source/diagramadevenn1.png";
import imagetwo from "../source/diagramadevenn2.png";
import imagethree from "../source/diagramadevenn3.png";
import imagefour from "../source/diagramadevenn4.png";
import imagefive from "../source/diagramadevenn5.png";
import mysqlTabla from "../source/mysqlTabla.png";

import imagetuplas from "../source/tuplas.png";
import imagetuplasdos from "../source/tuplasdos.png";
import imagetuplastres from "../source/tuplastres.png";


function Mysql(){
  
    return (

      <React.Fragment>
        <div className="container">
          <h2  className="bigtitle font">Instalación</h2><br/>
          <p><strong>Descargar Mysql Windows :</strong> <a href="https://dev.mysql.com/downloads/windows/installer/" target="https://dev.mysql.com/downloads/windows/installer/" className="Link">Descargar Mysql aquí</a>, también podemos elegir una version anterior como /downloads/windows/installer/5.6.html para descargar la version 5.6.</p>
          <hr></hr><br/>
          <h2  className="bigtitle font">Normalización</h2><br/>

          <p><strong>Diagrama físico: </strong>para hacer la Normalización, tienen que tener todas las tablas una cardinalidad de uno a muchos. La normalización nos ayuda a dejar todo de una forma normal, hay cuatro reglas de Cold para lograr esto;</p>
          <ul>
          <li><p><strong>-Primera forma normal: sin campos repetidos. </strong></p></li>
          <li><p><strong>-Segunda forma normal: cada campo de la tabla debe depender de un id único. (Primary key) </strong></p></li>
          <li><p><strong>-Tercera forma normal: campos que no son clave no deben de tener dependencias. </strong></p></li>
          <li> <p><strong>-Cuarta forma normal: los campos multivaluados se identifican por una llave única. Donde es muchos a muchos hay que meter entre las dos tablas una <strong>tabla intermedia</strong> con un identificador propio y los id´s de cada tabla independiente. (Foreign key) </strong></p></li>
          <br/>
          <center>
            <img src={mysqlTabla} className="imagehtml col-12" title="imagen tablas"></img> <br/>
          </center>
          <li> <span className="subrayado"> En la normalización la tabla que tiene muchos es donde se meten las llaves foráneas. Otra forma de verlo es la tabla que tenga la normalización, la que concatene el id (user_id) es donde vamos a crear la llave foránea.</span></li>
          
          </ul>

          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Ddl</h2><br/>
          <br/>
          <p><strong>Create :</strong> se pulsa el botón derecho y se crea.</p>
          <p><strong>Alter :</strong> se pulsa el botón derecho y se modifica.</p>
          <p><strong>Drop:</strong> se pulsa el botón derecho y se elimina.</p>
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
          <h2  className="bigtitle">Foreign keys</h2><br/>
          <br/>
          <p>Las Foreign Keys sirven para concatenar con la primary Key de otra tabla, deben ser NN, las foreign keys desde la interfaz gráfica vamos a calcinarlas en la cardinalidad de muchos,<u className="subrayado">esto lo hace automáticamente pensando que donde vamos a concatenar <strong>la llave foránea del id</strong> de la otra tabla (user_id) <strong>va a ser la parte de a muchos.</strong></u> cuando una de las dos se borra o se actualiza se puede hacer;</p>
          <p><strong>cascade: </strong> es para que cada vez que cambie un dato lo va a cambiar también también en la otra tabla por ejemplo un mismo id o para cuando lo vayamos a borrar que se borre en las dos tablas.</p>
          <p><strong>restrict: </strong>es para cada vez que tenemos una tabla asociada no nos va a dejar borrarla hasta que borremos todos los pertenecientes a la otra tabla.</p>
          <p><strong>set null: </strong>significa que cada vez que borremos un id el que pertenezca a esa tabla nos va a poner un null.</p>
          <p>** En las tablas transitivas la llave foránea es donde tiene una cardinalidad de uno y a la tabla donde va es de muchos, </p>
          <p>** database/Reverse engineer nos va a generar un gráfico virtual de la bases de datos para poder diferenciar su cardinalidad y parámetros.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Diagramas de Venn</h2><br/>
          <br/>
          <span className="subrayado"> Toma como ejemplo las imágenes como tabla de la izquierda -&gt; Usuario y la de la derecha -&gt; Post</span><br/><br/>
          <img src={imageone} className="Vendiagram"></img>

          <p><strong>SELECT * FROM Usuarios LEFT JOIN Post ON usuarios_id = Post.Usuario_id: </strong></p>
          <p><strong>Left join:</strong> es para tomar la tabla que esta a la izquierda (Usuario) y es la primera que metimos. También se puede usar right join.</p>
          <p><strong>Post: </strong>es para indicar que vamos a unirla con esa tala. Pero recuerda que no se unen por arte de magia, vamos a utilizar las llaves foráneas.</p>
          <p><strong>ON: </strong>es la sentencia que vamos a utilizar para saber que campo pertenece a cual, en este caso decimos que la tabla usuarios la concatenamos la llave primaria (id) con la llave foránea (usuario_id) de la tabla post.</p>
          <br/><br/><br/><br/><br/>
          <img src={imagetwo} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios INNER JOIN Post ON usuarios_id = Post.Usuario_id WHERE post.usuario_id IS NULL: </strong></p>
          <p><strong>WHERE post.usuario_id IS NULL:</strong> trae solo los usuarios que no tengan ningún post.</p>
          
          <br/><br/><br/><br/><br/>

          <img src={imagethree} className="Vendiagram"></img>
          <p><strong>SELECT * FROM Usuarios INNER JOIN Post ON usuarios_id = Post.Usuario_id: </strong></p>
          <p><strong>INNER JOIN:</strong> nos trae solo lo que esta ligado, trae solo los que tienen dependencias de ambos lados, (los que no están huérfanos).</p>
          
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
 
          <h2  className="bigtitle">Métodos de un query</h2><br/>
          <br/>
          <span className="subrayado"> El orden de colocar los métodos son los siguientes.</span><br/><br/>
          <p><strong>SELECT: </strong>lo que quieres mostrar.</p>
          <li><p><strong>-AS: para poner un sub-nombre. </strong></p></li>
          <li><p><strong>-* : un atajo para seleccionar todos los atributos. </strong></p></li>
          <li><p><strong>-AVG(): calcula el promedio. </strong></p></li>
          <li><p><strong>-COUNT(): cuenta los registros de un campo. </strong></p></li>
          <li><p><strong>-SUM(): suma los valores de un campo. </strong></p></li>
          <li><p><strong>-MAX(): devuelve el máximo de un campo. </strong></p></li>
          <li> <p><strong>-MIN(): devuelve el mínimo de un campo. </strong></p></li>
          <li> <p><strong>-YEAR(): para mostrar solo el año de la fecha, también podemos usar MONTHNAME() para saber solo el mes. </strong></p></li>
          <li> <p><strong>-GROUP_CONCAT(): devuelve su resultado separándolos por comas. </strong></p></li>
          
          <p><strong>FROM:</strong> de donde voy a tomar los datos.</p>
          <p><strong>WHERE:</strong> los filtros de los datos que quieres mostrar.</p>
          <li><p><strong>-LIKE %algo%: para los que contengan el valor algo. %algo traerá los que terminen por el valor algo, algo% traera los que empiecen con el valor algo.  </strong></p></li>
          <li><p><strong>-BETWEEN: donde estén entre dos valores, where fecha_publicacion between '2020-01-01' an '2020-12-13'. </strong></p></li>
          <li><p><strong>-IS NULL: donde el valor es nulo. </strong></p></li>
          <li><p><strong>-IS NOT NULL: donde el valor no es nulo. </strong></p></li>
          <li><p><strong>-AND: (y) para agregar mas valores al método IS NULL or IS NOT NULL. </strong></p></li>
          <p><strong>ORDER BY: </strong>el orden en el que quiero presentar la información.</p>
          <li><p><strong>-ASC: sirve para ordenar de forma ascendente. </strong></p></li>
          <li><p><strong>-DESC: sirve para ordenar de forma descendente. </strong></p></li>
          <li><p><strong>-LIMIT: se usa para limitar la cantidad de resultados que arroja el query. </strong></p></li>

          
          <p><strong>GROUP BY: </strong>agrupa conjuntos del mismo valor de la tupla asignada. Por ejemplo; <u className="subrayado">SELECT apellido, avg(nota) AS conjunto FROM alumnos GROUP BY apellido</u> -&gt; haz una media de las notas agrupando los que se apelliden igual.</p>
          <img src={imagetuplasdos} ></img>
          <img src={imagetuplas}></img>
          
          <br/><br/>
          <p><strong>HAVING: </strong>los filtros que quiero que tengan mis datos pertenecientes y con dependencia de ORDER BY, se pone después de group by. (Funciona como WHERE pero en el capsulamiento de GROUP BY). 
          <u className="subrayado"> SELECT apellido, avg(nota) AS conjunto FROM alumnos GROUP BY apellido HAVING apellido="jaime"</u>.</p>
          <img src={imagetuplastres}></img>
          <br/><br/>
          <hr></hr><br/>
          <p><strong>NESTED QUERIES: </strong> son queries anidados, es decir una consulta dentro de otra, dentro de el método que elijamos lo encapsularemos dentro de paréntesis y dentro iniciaremos otra consulta. FROM( SELECT ...). WHERE date_public = ( SELECT ...).</p>
          
          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle font">Exportar la base de datos</h2><br/>

          <span className="subrayado">En la parte derecha de Workbench buscamos Administrador, a la izquierda de schemas y le damos a <strong>Data Export</strong> y buscamos la base de datos que queramos exportar.</span>
          <p><strong>Export to self-contained File: </strong>Aquí vamos a elegir el nombre y la ruta donde queremos guardar nuestra base de datos exportada. <span className="subrayado"> Es recomendable utilizar esta opción, ya que nos lo exporta en un archivo SQL.</span></p>
          <p><strong>Include Create Schema: </strong>Para crear un esquema que nos permita crear la base de datos, si queremos insertar la base de datos antes de insertar los valores de la base de datos. <span className="subrayado"> Es recommendable utilizarla si vamos a exportar para crear esa base de datos, NO para cuando queramos agregar esos valores a una base de datos ya creada.</span></p>
          <p>* Error --&gt; Para poder exportar la base de datos en Workbench es necesario tener una vérsion especifica para esto nos vamos a descargar la vérsion que nos especifica. Vamos a Edit - Preferences - Administration y en el Path to mysqldump Tool entramos dentro de la carpeta descargada de la versión indicada /bin/mysqldump</p>
          <br/>
          <br/>
          
        </div>
      </React.Fragment>

    );

}

export default Mysql;
