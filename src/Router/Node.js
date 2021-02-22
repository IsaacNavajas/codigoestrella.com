import React from 'react';
import image from "../source/codezen 11.png";

class Node extends React.Component{

  render(){
    
    return (
      
      <React.Fragment>
        <div className="container">

          <br/>

          <h2  className="bigtitle font">Instalación</h2><br/>
  
          <br/>
          <p><strong>Instalación: </strong> 
          
           Se recomienda instalar la version de LTS. <a 
            href="https://nodejs.org/en/" 
            target="https://nodejs.org/en/" 
            className="Link">
              Pagina_de_Node
          </a>
          </p>

          <p><strong>npm install -g nodemon:</strong> Para automatizar los procesos del proyecto desde el lado del desarroyo, de esta forma introducimos el codigo nodemon en vez de node y no hay que validar con node constantemente. En windows npx nodemon archivo.js.</p>
          <p><strong>npm install pm2 -g:</strong> Es igual que nodemon pero desde el lado de produccion en vez de desarroyo y con muchas mas opciones. Lo iniciamos con pm2 start "nombre de la aplicacion".</p>


          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">Variables de entorno:</h2>

          <br/><br/>
          <p>let nombre = <strong>process.env.NOMBRE:</strong> Para acceder a las variables de entrono.</p>
          <p><strong>$env:NOMBRE="Carlos":</strong> .</p>

      
          <br/>
          <hr></hr><br/><br/>

          <h2  className="bigtitle">General</h2>

          <br/><br/>
          <p>console.log(<strong>global</strong>):  Node tiene el objeto global que contiene los metodos y propiedades de Node, que en el navegador tiene una igualdad en referencia a this.</p>
          <p><strong>console.time(code)</strong>:  nos va a contar en ms lo que tarda en ejecutarse una trea asincrona, la parte de codigo que queremos contar la cerraremos con un <strong>console.timeEnd(code)</strong>.</p>
          <br/>
          <hr className="linea-discontinua" /><br/>
          <p>ARCHIVOS DE SISTEMA:</p>
          <p><strong>const fs = require('fs'):</strong> Para llamar como referencia fs a ese mismo archivo.</p>

          <p>fs.<strong>readFile():</strong> Para leer los archivos.</p>
          <p>fs.<strong>writeFile():</strong> Para escribir archivos.</p>
          <p>fs.<strong>unLink():</strong> desligar o borrar.</p>
          <p><u classname="subrayador">Hay muchisimas mass funciones que estas para modificar los archivos pero estas son las mas basicas.</u></p>
          <br/>
          <hr className="linea-discontinua" /><br/><br/>
          <p>CONSOLE:</p>
          <p><strong>console.:</strong> Pueden ser .log, .info, .error, .warn, .table, .count, .countReset, .time, .timeEnd, .group, .groupEnd, .clear.</p>
          <br/>

          <hr className="linea-discontinua" /><br/><br/>
          <p>PROCESOS HIJO:</p>
          <p><strong>const "abro llaves" spawn, exec "cierro llaves" = require('child_process');:</strong> </p>
          <ul>
            <li><p><strong>spawn:</strong> devuelve un stream.</p></li>
            <li><p><strong>exec:</strong> devuelve un buffer.</p></li>
          </ul>
          <br/>

          <hr className="linea-discontinua" /><br/><br/>

          <p>HTTP:</p>
          <p><strong>http.createServer((req, res) => ...):</strong> Node nos ofrece un http para crear un sistema de rutas, uno de los metodos principales es createServer que nos permite abrir un puerto para crear un servidor. </p>
          <ul>
            <li><p><strong>.listen(3000):</strong> para fijar el puerto.</p></li>
            <li><p><strong>res.end():</strong> terminará el proceso de respuesta.</p></li>
            <li><p><strong>res.write():</strong> escribe una respuesta en el usuario del htttp.</p></li>
            <li><p><strong>req.url():</strong> depende de la url especificada.</p></li>
            <li><p> Hay mas opciones estas son basicas...</p></li>        
          </ul>
          <br/>

          <hr className="linea-discontinua" /><br/><br/>

          <p>OS:</p>
          <p><strong>os.:</strong> Como acceder a TODO lo que tenemos en el sistema del ordenador.</p>
          <ul>
            <li><p><strong>os.arch():</strong> el tip ode archivo del sistema ya sea de 64 bits o de 32.</p></li>
            <li><p><strong>os.plataform():</strong> para saber tu plataforma de sistema como Linux, Windows o Mac.</p></li>
            <li><p><strong>os.cpus():</strong> para conocer los detalles de las cpus de tu sistema, se suele usar desde os.cpus.lenght().</p></li>
            <li><p><strong>os.constants():</strong> muesrtra todos lo errores y señales del sistema.</p></li>
            <li><p><strong>os.freemen():</strong> para saber la memoria libre que tenemos, tambien podemos usar <strong>os.totalmen()</strong> para saber la memoria total que tenemos.</p></li>
            <li><p><strong>os.homedir():</strong> para saber tu direccion, tambien podemos crear el <strong>os.tmpdir()</strong> para crear un archivo temporal.</p></li>
            <li><p><strong>os.hostname():</strong> para conocer el nombre del host.</p></li>
            <li><p><strong>os.networkinterfaces():</strong> nos va a traer todas las interfaces de red que tenemos en nuestra maquina.</p></li>
               
          </ul>
          <br/>

          <hr className="linea-discontinua" /><br/><br/>
          <p>PROOCESOS:</p>
          <p><strong>process.:</strong> Señales de procesos que puedes escuchar cuando pasen .</p>

          <p><strong>process.on('exit', () => ...):</strong> Que quieres hacer cuando el proceso a terminado, no se puede usar un time dentro. Tambien podmeos usar <strong>process.on('beforeexit', () => ...):</strong> para justo antes de cuando termina.</p>
          <p><strong>process.on('uncaughtException', (error, origen) => console.log(error, origen));:</strong> Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado. Tambien existe <strong>process.on('uncaughtRejecption', (error, origen)</strong>.</p>
 
          <br/>




          <hr></hr><br/><br/>

          <h2  className="bigtitle">Modules</h2>

          <br/><br/>

      
          <p><strong>const llamar = require('./llamada');:</strong>llamar al componente que queremos mencinar para soltar el valor como por ejemplo llamar.hola(). es semejante al export default de es6. Los archivos de node_modules podemos llamarlo directamente como const llamar = require('bcrypt'); a los archivos creado habra que llamarlos como el del titulo..</p>
        
          <p><strong>module.exports="abre_llaves" hola "cierra_llaves":</strong> para exportar los mmodulos que queramos de ese mismo componente;  una funcion, una constnte... es semejante al import llamar from './llamada'; de es6</p>
       
          <br/><br/>

          <p><strong>Un buffer es un montón de datos y un stream es un proceso donde pasan un montón de datos.</strong> </p>

          <p><strong>Buffers:</strong> Nos permite trabajar con el dato en su forma mas pura antes de ser modificado, cada espacio de buffer contiene dos digitos 00.</p>
          <ul>
            <li><p><strong>Buffer.alloc(1):</strong> Nos va a traer los espacios en memoria que les indiquemos, en este caso un espacio en memoria.</p></li>
            <li><p><strong>Buffer.from([1, 2, 3]):</strong> La informacion que queremos guardar en nuestro espacio de buffer.</p></li>
            <li><p><strong>Buffer.alloc(10):</strong> nos va a traer diez espacios de memoria.</p></li>
          </ul>
          <p><strong>Streams:</strong> un paso de datos desde un punto a otro.</p>
          <ul>
            <li><p><strong>createReadStream():</strong> Para empezar a leer los datos.</p></li>
            <li><p><strong>readFile():</strong> Para leer los archivos.</p></li>
          </ul>
         
          <br/>
         


        </div>

      </React.Fragment>

    );



  }

}

export default Node;
