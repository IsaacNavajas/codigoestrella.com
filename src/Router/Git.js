import React from 'react';

function Git(){

    return (

      <React.Fragment>
        <div className="container">
          

          <h2  className="bigtitle font">Comandos de consola básicos</h2><br/>
   

          <p><strong>ls: </strong>para hacer una raíz de los elementos que tenemos. Podemos usar ls -lha como parámetros.</p>
          <p><strong>cd:</strong> para entrar entre carpetas.[ . / define la carpeta actual, . . / va una carpeta atrás.].</p>
          <p><strong>pwd:</strong> para ver en que directorio estamos.</p>
          <p><strong>clear:</strong> limpia la consola.</p>
          <p><strong>mkdir:</strong> para crear una carpeta.</p>
          <p><strong>touch:</strong> nos permite crear archivos.</p>
          <p><strong>rmdir:</strong> nos permite borrar una carpeta.</p>
          <p><strong>rm: </strong>nos permite borrar un archivo.</p>
          <p><strong>history:</strong> nos muestra el historial de comandos.</p>
          <p><strong>cat:</strong> para abrir el archivo.</p>
          <p><strong>code:</strong> para abrir el archivo con nuestro editor de código.</p>
          <p><strong>code . :</strong> para abrir todo el proyecto desde el editor de código seleccionado pro defecto.</p>
          <p><strong>vi:</strong> nos muestra el editor de código.</p>
          <p><strong>esc + i: </strong>para inicializar la escritura dentro de vi.</p>
          <p><strong>esc + sift + z + z:</strong> para salir y guardar el archivo vi.</p>

          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Comandos básicos de Git</h2><br/>
      
          <p><strong>git init:</strong> da inicio al repositorio de git.</p>
          <p><strong>git add . :</strong> agrega el archivo al entorno de memoria staging. con git add . Agregamos todos los archivos. También podemos agregar un solo archivo; git add index.html</p>
          <p><strong>git commit -m"MENSAJE_DEL_COMMIT":</strong> enviamos los archivos al repositorio</p>
          <p>-m sirve para mandar un mensaje, si solo escribimos git commit nos enviara al editor vi para que guardemos desde ahi el commit</p>
          <p><strong>git config --global user.name: </strong>la primera vez que hagamos un commit tenemos que definir nuestro email y nombre; git config --global user.name "suma" git config --global user.email "suma@gmail.com". si queremos cambiar estos valores una vez metidos; git config --global --unset user.name para borrar un dato de config global o git config --global -replace-all user.name "NEW_USER_NAME" para reemplazar un valor.</p>
          <p><strong>git status: </strong>nos enseña el estado de la base de datos del repositorio.</p>
          <p><strong>git show: </strong>muestra toda la historia del archivo; git show index.html.</p>
          <p><strong>git log:</strong> nos muestra el historial de commits encrestados en hash.</p>
          <p><strong>git diff: </strong>nos muestra las diferencias entre dos hash de commits distintos.</p>
          <p><strong>git push:</strong> envía el archivo a un repositorio remoto.</p>
          <p><strong>git pull:</strong> nos permite borrar un archivo.</p>
          <br/>
          <p><strong>git branch: </strong>para crear una rama nueva. Podemos agregar una rama de pruebas como fix-typo.</p>
          <p><strong>git branch -d:</strong> para borrar la rama.</p>
          <p><strong>git merge:</strong> para juntar mas de una rama. Primero posicionarte en la rama que queremos juntar las ramas y después llamar a la otra rama; $master: git marge supercabecera</p>
          <br/>
          <p><u className="subrayado"><strong>--help</strong> podemos agregar el parámetro help para buscar un comando o interpretar su funcionamiento.</u></p>
          <p><strong>gitk:</strong> nos TODOS los detalles de los commits con una interfaz gráfica.</p>
          <p><strong>git rebase:</strong> es una mala practica. Agarra toda la rama y la agrega a la otra rama, al hacer rebase se solapan TODOS los archivos. Siempre es mejor hacer un git merge.</p>
          <p>Directorio ---------------------------- Staging ---------------------------- Repositorio</p>
          <p>git init -------(git add . )------- valor trackeado ----(git commit -m" ")------- ' '</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Git rm y Git reset</h2><br/>

          <p><strong>git rm:</strong> elimina archivos de git sin eliminar el historial de sistema de versiones.</p>
          <p><strong>git rm --cached:</strong> elimina archivos del commit y del área de staging pero los mantiene el disco duro.</p>
          <p><strong>git rm --force: </strong>elimina los archivos de git y del disco duro.</p>
          <p><strong>git reset: </strong>nos ayuda a volver en el tiempo, (SIN LA POSIBILIDAD DE VOLVER a un commit futuro).</p>
          <p><strong>git rm --soft:</strong> borramos el historial y los registros de git pero mantenemos los estados de staging.</p>
          <p><strong>git rm --hard:</strong> borra TODO. Git reset --hard "branch" para ir y guardar la rama, es una buena practica primero con checkout ir a la rama que se quiere y después de testearla y ver que queremos volver a una rama anterior hacer el reset --hard.</p>
          <p><strong>git checkout:</strong> para cambiar entre ramas, también podemos usarlo para ir a otro estado de memoria de git show para ver ese commit y volver después al master. También podemos volver a otro commit, trackearlo, hacer otro commit para guardar un commit anterior como nuevo, sin tener que borrar los commits anteriores.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">GitHub</h2><br/>

          <p><strong>PULL REQUEST: </strong>Se accede desde github y es un merge de pruebas, en el que el dueño del proyecto decide si hacer el mergue o devolver los fallos.</p>
          <p><strong>npm install: </strong>cuando clonas un proyecto de github hay que volver a descargar las dependencias para que funcione la aplicación correctamente.</p>
          <p><strong>git remote add origin "URL_DEL_REPOSITORIO": </strong>crea un origen remoto de nuestros archivos.</p>
          <p><strong>git remote: </strong>para ver lo git remotos.</p>
          <p><strong>git remote -v: </strong>muestra los remotos de forma verbal.</p>
          <p><strong>git pull origin master:</strong> para traer los datos de github al ordenador, es una buena practica primero hacer un git pull y después un git push.</p>
          <p><strong>git push origin master: </strong>envía la rama master al origen remoto del repositorio.</p>
          <p><strong>git push origin master --allow-unrelated-histories: </strong>la primera vez que hagamos un push a nuestro repositorio tenemos que enviar el --allow-unrelated-histories, nos entra en vi, para salir y guardar pulsamos esc+sift+z+z, después de hacer esto volvemos a hacer un git push origin master normal.</p>
          <p><strong>git tag:</strong> para crear los tags.</p>
          <p><strong>git tag -a NOMBRE-DEL-TAG -m"MENSAJE" HASH_DEL_COMMIT: </strong>la primera vez que hagamos un push a nuestro repositorio tenemos que enviar el --allow-unrelated-histories, nos entra en vi, para salir y guardar pulsamos esc+sift+z+z, después de hacer esto volvemos a hacer un git push origin master normal.</p>
          <p><strong>Git tag -d "NOMBRE_DEL_TAG" / Git push origin :refs/tags"NOMBRE_DEL_TAG":</strong> borra un tag del repositorio, primero Git tag -d "NOMBRE_DEL_TAG" y después Git push origin :refs/tags"NOMBRE_DEL_TAG".</p>
          <p><strong>git clone "PEGAR_URL_DEL_REPOSITORIO":</strong> cuando queremos clonar un repositorio. Se suele utilizar cuando no tenemos permisos del proyecto en github</p>
          <p><strong>git reflog:</strong> es una buena practica, te va a resumir todos los detalles de tu proyecto.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">GitHub (comandos elitistas)</h2><br/>
          <br/>
          <p><strong>git stash:</strong> crea un estado de memoria. Se utiliza por ejemplo cuando queremos ir a otro hash pero no queremos hacer commit.</p>
          <p><strong>git stash drop: </strong>para borrar un stash.</p>
          <p><strong>git stash pop:</strong> abrimos el stash.</p>
          <p><strong>git stash list:</strong> nos enseña nuestros stash.</p>
          <p><strong>git clean: </strong>limpia tu proyecto de archivos no deseados.</p>
          <p><strong>git clean --dry-run: </strong>simula lo que va a borrar sin borrarlo.</p>
          <p><strong>git clean -f: </strong>borra todos los archivos listados.</p>
          <p><strong>git cherry-pick:</strong> traer commits viejos al head de mi rama master. git cherry-pick HASH_DEL_COMMIT</p>
          <p><strong>git commit --amend: </strong>para traernos lo que estábamos haciendo a nuestro commit anterior. Esto es una buena practica, ya que no tenemos por qué hacer otro commit nuevo.</p>
          <p><strong>git shortlog -sn -all --no-merges: </strong>nos muestra las personas que han echo commits</p>
          <p><strong>git config --global alias.stats "shortlog -sn --all --no-merges": </strong>le digo a git que me agregue en mi maquina actual un alias llamado stats y que haga shortlog -sn --all --no-merges.</p>
          <p><strong>git blame css/estilos.css -l35,60:</strong> nos dice quien hizo los cambios del archivo css dese la linea 35 a la 60.</p>
          <p><strong>git grep:</strong> sirve para buscar.</p>
          <p><strong>git grep -n gato:</strong> aparecerá un output diciéndonos en que linea esta la palabra gato.</p>
          <p><strong>git grep -c gato: </strong>aparecerá un output diciéndonos cuantas veces se repíte la palabra gato.</p>

      
          <br/>
          <br/>
          
        
          
        </div>

        
      </React.Fragment>

    );


}

export default Git;
