import React from 'react';
import image from "../source/imagedocker.png";
import image2 from "../source/codezen docker 2.png";
import image3 from "../source/codezen docker 1.png";


function Docker(){

    return (

      <React.Fragment>
        <div className="container">
          

          <h2  className="bigtitle font">Comandos de docker</h2><br/>
          <p className="subrayado">Si se esta utilizando un emulador de la consola (mintty) tendremos que añadir al inicio del comando <strong>winpty</strong>; winpty docker run -it ubuntu.</p>
          <p>Docker utiliza el docker daemon para crear las imágenes.</p>
          <br/>
          <p><strong>docker run: </strong>Sirve para crear nuevas imágenes, existen distintas imágenes predeterminadas que se pueden buscar en docker.hub <a href="https://hub.docker.com/search?type=image" target="https://hub.docker.com/search?type=image" className="Link">Hub.docker</a>; el mas conocido es <strong>docker run ubuntu</strong>. También se puede elegir un nombre directamente en vez de por defecto; <strong>docker run --name hola-mundo hello-word</strong></p>
          <p><strong>docker ps -a:</strong> para ver las imágenes y sus especificaciones.</p>
          <p><strong>docker inspect "nombre o id del contenedor":</strong> para inspeccionar el contenedor de la imagen, también podemos inspeccionar un solo elemento con; <strong>docker inspect -f "entre doble llave la ruta" "nombre o id del contenedor"</strong>.</p>
          <p><strong>docker rename "antiguo nombre" "viejo nombre":</strong> para cambiar el nombre de una imagen.</p>
          <p><strong>docker logs "nombre o id del contenedor":</strong> para ver el proyecto.</p>
          <p><strong>docker rm "nombre o id del contenedor":</strong> para borrar un contenedor, existe un atajo <strong>docker rm $(docker ps -aq) </strong>para borra todos los contenedores.</p>
          <p><strong>docker run -it ubuntu:</strong> el it nos corre en nuestra terminal como si estuviésemos dentro de la terminal del contenedor emulado, pero como entramos como run estamos también creando una nueva distribución ubuntu.</p>
          <ul>
            <li><p><strong>+ ls -lac:</strong> muestra todos los archivos de dentro del contenedor, como por ejemplo ubuntu.</p></li>
            <li><p><strong>+ exit:</strong> para salir del contenedor emulado.</p></li>
            <li><p><strong>+ uname -a:</strong> es un comando de linux para ver los detalles de la distribución.</p></li>
          </ul>
          <p><strong className="subrayado">winpty docker run -it --name "nombre del contenedor" ubuntu bash: </strong> Para crear un ubuntu que se pueda acceder a la consola.</p>
         
          <p><strong className="subrayado">winpty docker exec -it "nombre o id del contenedor" bash: </strong> para entrar en la terminal de un contenedor ya creada, para su correcto funcionamiento tendremos que <strong>inicializar la imagen</strong>.</p>
          <ul>
            <li><p><strong>+ docker start "nombre o id del contenedor":</strong> para inicializar la imagen del contenedor.</p></li>
            <li><p><strong>+ ps -fea:</strong> para poder ver todos los procesos que se estan corriendo. El proceso virtual del contenedor siempre se mostrara el PID con un 1.</p></li>
            <li><p><strong>+ docker kill "nombre o id del contenedor":</strong> para poder finalizar la inicializacion de una imagen/contenedor, esta es la única forma de para la inicializacion, también podemos utilizar docker stop "nombre o id del contenedor".</p></li>
          </ul>
          <p><strong>docker run -d --name server -p 8080:00 "nombre o id del contenedor":</strong> los contenedores por defecto ya tienen atribuido un host virtual desde dentro del contenedor, para redirigir los puertos del contenedor a los del pc, dos contenedores distintos no se podrán redirigir a los mismos puertos .</p>      

          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Bases de datos docker</h2><br/>

          <p>Hay una técnica que es <strong>volume </strong>(-v) para que los datos sobrevivan a la vida del contenedor, es decir que aunque se haya borrado la imagen del contenedor virtual si volvemos a crear esa misma imagen los datos de la imagen borrada prevalecerán en la nueva. <div className="subrayado">Los volume es una forma de persistir los datos que se crean en tu contenedor</div></p>

      
          <p><strong>docker volume ls:</strong> para ver los volúmenes que tenemos.</p>
          <p><strong>docker volume prune:</strong> para borrar los volúmenes de los contenedores que no estamos usándolos en ningún contenedor.</p>
          <p><strong>docker volume create dbdata:</strong> para crear un nuevo volumen con el nombre dbdata. Lo que se escriba en este volume no se va a perder entre contenedores.</p>
          <p><strong>docker run -d --name db --mount src=dbdata,dst=/data/db mongo: </strong> para crear una imagen mongo con el nombre db, el apostrofe --mount para montar un volume, tenemos que señalizar el nombre del volume y el destino/(en que parte del filesystem/contenedor vamos a montar ese volume).</p>
          <p><strong>docker exect -it db bash:</strong> una vez ya creado el volume podemos entrar con mongo, creamos la base de datos, borramos el contenedor con docker rm -f db, volvemos a montar el contenedor docker run -d --name db --mount src=dbdata,dst=/data/db mongo y al intentar acceder a la base de datos que hemos creado en el contenedor borrado tendrá que aparecer por la persistencia de los datos.</p>
          
       
          <hr></hr><br/>
          <h2  className="bigtitle">Image docker</h2>

          <p><strong>docker pull redis:</strong> lo que va hacer docker pull es traernos una imagen que no tenemos. Por defecto nos va a instalar la ultima version pero podemos instalar una imagen con la version que elijamos de hub.docker; docker pull ubuntu:18.04</p>
          <p><strong>docker image ls:</strong> nos va a mostrar las imágenes que tenemos en nuestra computadora y las que podemos instalar, si necesitamos alguna otra lo haremos con docker pull eligiendo la imagen existente del repositorio <a href="https://hub.docker.com/search?type=image" target="https://hub.docker.com/search?type=image" className="Link">Hub.docker</a></p>
          <p><strong>Crear una imagen: </strong> touch Dockerfile para crear el archivo;</p>
          <br/>
          <img src={image} className="imagehtml col-12"></img> <br/>
          <ul>
            <li><p><strong>+ docker build -it ubuntu:hola-mundo:</strong> crear una imagen. Si usamos el comando docker ps -a veremos nuestra imagen creada, la construcción de una imagen va a ser; Docker-file --> (build) --> Imagen _--> (run) --> Contenedor.</p></li>
            <li><p><strong>+ docker run -it ubuntu:hola-mundo:</strong> para crear un nuevo contenedor de nuestra imagen creada. Si vamos a ls -lac /usr/src veremos nuestro hola mundo, que es lo que hemos creado en la imagen.</p></li>
            <li><p><strong>+ (docker tag ubuntu:hola-mundo gvilarino/ubuntu:hola-mundo) + (docker push "nombre del hub.docker"/ubuntu:hola-mundo):</strong> para mandar una imagen a hub.docker, primero creamos un atajo, un tag y después lo puseamos.</p></li>
          </ul>
  
          <br/>
          <p><strong>docker history ubuntu:hola-mundo: </strong>nos muestra todas las capas que tiene esta imagen .</p>
          <p><strong><a href="https://github.com/wagoodman/dive" target="https://github.com/wagoodman/dive" className="Link">--> dive</a>:</strong> dive es un plugin open source, <strong>dive ubuntu:hola-mundo</strong> para analizar en varias vistas como esta construida esa imagen, si pulsamos <strong> cntrol + u</strong> podemos ver que archivos han cambiado.</p>
          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Docker-compose</h2><br/>

          <p><strong>docker-compose.yml: </strong>creamos el archivo para declarar la arquitectura de docker.</p>
          

          <div className="col-12">
            <div className="col-6">
              <img src={image2} className="imagehtml col-12" title="imagen docker 1"></img> <br/>
            </div>
            <div className="col-6">
              <img src={image3} className="imagehtml col-12" title="imagen docker 2"></img> <br/>
            </div>
          </div>

          <p><strong>docker-compose up -d: </strong>nos va a correr el dockerfile pero no va a mostrar el output, nos lo va correr en segundo plano. Vamos a volver a escribir el código cada vez que queramos actualizarlo.</p>
          <p><strong>docker netowrk ls: </strong>para mostrar la lista de docker compose.</p>
          <p><strong>docker-compose logs "nombre del contenedor": </strong> el historia de ese contenedor.</p>
          <p><strong>docker-compose exec "nombre del contenedor" bash: </strong> para entrar a la consola del docker-compose.</p>
          <p><strong>docker-compose down: </strong> para eliminar los servicios.</p>
          <p><strong>docker-compose logs -f "nombre del contenedor": </strong> para vel la salida del contenedor.</p>
          <p><strong>docker netowrk ls: </strong>crea un origen remoto de nuestros archivos.</p>
          <p><strong>docker netowrk ls: </strong>crea un origen remoto de nuestros archivos.</p>
          <p><strong>docker netowrk ls: </strong>crea un origen remoto de nuestros archivos.</p>

          <br/>
          <br/>
          

        </div>

        
      </React.Fragment>

    );


}

export default Docker;
