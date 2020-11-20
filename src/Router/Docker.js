import React from 'react';
import image from "../source/imagedocker.png";

function Docker(){

    return (

      <React.Fragment>
        <div className="container">
          

          <h2  className="bigtitle font">Comandos de docker</h2><br/>
          <p className="subrayado">Si se esta utilizando un emulador de la consola (mintty) tendremos que añadir al inicio del comando <strong>winpty</strong>; winpty docker run -it ubuntu.</p>
          <p>Docker utiliza el docker daemon para crear las imagenes.</p>
          <br/>
          <p><strong>docker run: </strong>Sirve para crear nuevas imagenes, existen distintas imagenes predeterminadas que se pueden buscar en docker.hub <a href="https://hub.docker.com/search?type=image" target="https://hub.docker.com/search?type=image" className="Link">Hub.docker</a>; el mas conocido es <strong>docker run ubuntu</strong>. Tambien se puede elegir un nombre directamente en vez de por defeccto; <strong>docker run --name hola-mundo hello-word</strong></p>
          <p><strong>docker ps -a:</strong> para ver las imagenes y sus especificaciones.</p>
          <p><strong>docker inspect "nombre o id del contenedor":</strong> para inspeccionar el contenedor de la imagen, tambien podemos inspeccionar un solo elemento con; <strong>docker inspect -f "entre doble llave la ruta" "nombre o id del contenedor"</strong>.</p>
          <p><strong>docker rename "antiguo nombre" "viejo nombre":</strong> para cambiar el nombre de una imagen.</p>
          <p><strong>docker logs "nombre o id del contenedor":</strong> para ver el proyecto.</p>
          <p><strong>docker rm "nombre o id del contenedor":</strong> para borrar un contenedor, existe un atajo <strong>docker rm $(docker ps -aq) </strong>para borra todos los contenedores.</p>
          <p><strong>docker run -it ubuntu:</strong> el it nos corre en nuestra terminal como si estubiesemos dentro de la terminal del contenedor emulado, pero como entramos como run estamos tambien creando una nueva distribucion ubuntu.</p>
          <ul>
            <li><p><strong>+ ls -lac:</strong> muestra todos los archivos de dentro del contenedor, como por ejemplo ubuntu.</p></li>
            <li><p><strong>+ exit:</strong> para salir del contenedor emulado.</p></li>
            <li><p><strong>+ uname -a:</strong> es un comando de linux para ver los detalles de la distribucion.</p></li>
          </ul>
          <p><strong className="subrayado">docker exect -it "nombre o id del contenedor" bash: </strong> para entrar en la terminal de un contenedor ya creada, para su correcto funcionamiento tendremos que <strong>inicializar la imagen</strong> en otra consola.</p>
          <ul>
            <li><p><strong>+ docker start "nombre o id del contenedor":</strong> para inicializar la imagen del contenedor.</p></li>
            <li><p><strong>+ ps -fea:</strong> para poder ver todos los procesos que se estan corriendo. El proceso virtual del contenedor siempre se mostrara con un 1.</p></li>
            <li><p><strong>+ docker kill "nombre o id del contenedor":</strong> para poder finalizar la inicializacion de una imagen/contenedor, esta es la unica forma de para la inicializacion.</p></li>
          </ul>
          <p><strong>docker run -d --name server -p 8080:00 "nombre o id del contenedor":</strong> los contenedores por defecto ya tienen atribuido un host virtual desde dentro del contenedor, para redirigir los puertos del contenedor a los del pc, dos contenedores distintos no se podran redirigir a los mismos puertos .</p>      

          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Bases de datos docker</h2><br/>

          <p>Hay una tecnica que es <strong>volume </strong>(-v) para que los datos sobrevivan a la vida del contenedor, es decir que aunque se haya borrado la imagen del contenedor virtual si volvemos a crear esa misma imagen los datos de la imagen borrada prevaleceran en la nueva. <div className="subrayado">Los volume es una forma de persistir los datos que se crean en tu contenedor</div></p>

      
          <p><strong>docker volume ls:</strong> para ver los volumenes que tenemos.</p>
          <p><strong>docker volume prune:</strong> para borrar los volumenes de los contenedores que no estamos usandolos en ningun contenedor.</p>
          <p><strong>docker volume create dbdata:</strong> para crear un nuevo volumen con el nombre dbdata. Lo que se escriba en este volume no se va a perder entre contenedores.</p>
          <p><strong>docker run -d --name db --mount src=dbdata,dst=/data/db mongo: </strong> para crear una imagen mongo con el nombre db, el apostrofe --mount para montar un volume, tenemos que señalizar el nombre del volume y el destino/(en que parte del filesystem/contenedor vamos a montar ese volume).</p>
          <p><strong>docker exect -it db bash:</strong> una vez ya creado el volume podemos entrar con mongo, creamos la base de datos, borramos el contenedor con docker rm -f db, volvemos a montar el contenedor docker run -d --name db --mount src=dbdata,dst=/data/db mongo y al intentar acceder a la base de datos que hemos creado en el contendor borrado tendra que aparecer por la persistencia de los datos.</p>
          
       
          <hr></hr><br/>
          <h2  className="bigtitle">Image docker</h2>

          <p><strong>docker pull redis:</strong> lo que va hacer docker pull es traerno una imagen que no tenemos. Por defecto nos va a instalar la ultima version pero podemos instalar una imagen con la version que elijamos de hub.docker; docker pull ubuntu:18.04</p>
          <p><strong>docker image ls:</strong> nos va a mostrar las imagenes que tenemos en nuestra computadora y las que podemos instalar, si necesitamoss alguna otra lo haremos con docker pull eligiendo la imagen existente del repositorio <a href="https://hub.docker.com/search?type=image" target="https://hub.docker.com/search?type=image" className="Link">Hub.docker</a></p>
          <p><strong>Crear una imagen: </strong> touch Dockerfile para crear el archivo;
          <br/>
          <img src={image} className="imagehtml col-12"></img> <br/>
          <ul>
            <li><p><strong>+ docker build -it ubuntu:hola-mundo:</strong> crear una imagen. Si usamos el comando docker ps -a veremos nuestra imagen creada, la construccion de una imagen va a ser; Docker-file --> (build) --> Imagen _--> (run) --> Contenedor.</p></li>
            <li><p><strong>+ docker run -it ubuntu:hola-mundo:</strong> para crear un nuevo contenedor de nuestra imagen creada. Si vamos a ls -lac /usr/src veremos nuestro hola mundo, que es lo que hemos creado en la imagen.</p></li>
            <li><p><strong>+ (docker tag ubuntu:hola-mundo gvilarino/ubuntu:hola-mundo) + (docker push "nombre del hub.docker"/ubuntu:hola-mundo):</strong> para mandar una imagen a hub.docker, primero creamos un atajo, un tag y despues lo puseamos.</p></li>
          </ul>
          </p>
          <br/>
          <p><strong>docker history ubuntu:hola-mundo: </strong>nos muestra todas las capas que tiene esta imagen .</p>
          <p><strong><a href="https://github.com/wagoodman/dive" target="https://github.com/wagoodman/dive" className="Link">--> dive</a>:</strong> dive es un plugin open source, <strong>dive ubuntu:hola-mundo</strong> para analizar en varias vistas como esta contruida esa imagen, si pulsamos <strong> cntrol + u</strong> podemos ver que archivos han cambiado.</p>
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
          <p><strong>git stash:</strong> crea un estado de memoria. Se utiliza por ejemplo cuando queremos ir a otro hash pero no queremos hacer commit.<p/>
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

          </p>
        
          
        </div>

        
      </React.Fragment>

    );


}

export default Docker;
