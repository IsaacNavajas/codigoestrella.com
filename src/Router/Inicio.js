import React from 'react';
import Image from '../source/codezen 15.png';
import ImageTCP from '../source/imageTCP.png';
import ImageDNS from '../source/imagenExplicacionDNS.png';

import imagelogo from '../source/spam.png';
import imageElectron from '../source/codezenElectron.png';


class Inicio extends React.Component{
  state={
    temporizador: 0,
    desaparecer : false
  }

  componentDidMount = () => {
    this.primertemporizador = setTimeout(()=>{  this.setState({temporizador:1}) }, 1000);
    this.segundotemporizador = setTimeout(()=>{  this.setState({temporizador:2}) }, 1200);
    this.tercertemporizador = setTimeout(()=>{  this.setState({temporizador:3}) }, 3000);
    this.cuartotemporizador = setTimeout(()=>{  this.setState({temporizador:4}) }, 3090);
    this.quintotemporizador = setTimeout(()=>{  this.setState({temporizador:5, desaparecer:true}) }, 3600);
  }

  componentWillUnmount= () => {
    clearTimeout( this.primertemporizador );
    clearTimeout( this.segundotemporizador );
    clearTimeout( this.tercertemporizador );
    clearTimeout( this.cuartotemporizador );
    clearTimeout( this.quintotemporizador );
 }
      
  render(){
    return (
    <React.Fragment>
      
  
      <div className="container">
      
    
      {this.state.desaparecer == true && 
        <div>
          <br/> 

          <h2 className="bigtitleWhite">Expresiones regulares </h2>    
      
          <div className=" col-12"><img src={Image} className="imagecarbon"></img></div>
          <ul>
            <li> <p><strong>- / :</strong> Sirve para iniciar y encerrar una expresión regular.</p></li>
            <li> <p><strong>- ^ :</strong> Se inicia con este patron para un codigo universal, en esencia para la compilación en otros idiomas.</p></li>
            <li> <p><strong>- $ :</strong> Se finaliza con este símbolo.</p></li>
            <li> <p><strong>- - :</strong> El guion se utiliza para delimitar rangos, ej: 4-9 'del cuarto hasta el noveno'.</p></li>
            <li> <p><strong>- [] :</strong> Para delimitar un patron.</p></li>
            <li> <p><strong >- 'llaves' :</strong> Para definir una condición. 'llaves'6-9 -> seis elementos como mínimo y nueve como máximo.</p></li>
    
          </ul>
          <br/>
          <hr></hr> 
          <br/>


      <h2 className="bigtitleWhite font">PC </h2>    
      
        <p><strong>- CPU :</strong> es el corazón de la maquina y una de las partes mas caras, se encarga de procesar todos los datos.</p>
        <p><strong>- RAM :</strong> en ella se utiliza la información que esta utilizando en el momento.</p>
        <p><strong>- PLACA BASE :</strong> va acorde con la CPU y tendremos que colocar una con el mismo socket que ella.</p>
        <p><strong>- DISCO DURO :</strong> donde se guarda la información de manera permanente, afecta al rendimiento a la hora de abrir y cargar archivos, hay dos tipos HDD (mecánicos y SDD).</p>
        <p><strong>- TARJETAS GRÁFICAS :</strong> dedicada exclusivamente a la interfaz gráfica.</p>
        <p><strong>- FUENTE DE ALIMENTACIÓN :</strong> estabilidad en el equipo y una vida mas larga de los componentes.</p>

          <br/>
          <hr></hr> 
          <br/>

        <p><strong>- RSS :</strong> para distribuir contenido en la web a otras plataformas, para difundir información actualizada frecuentemente.</p>
        <p><strong>- HTTPS / SSL :</strong> SSL certificado para dominio, permite autentificar, encrustation y desincrustación. HTTPS protocolo de transferencia de hipertexto, la version segura HTTP.</p>
        <p><strong>- HOSTING :</strong> es el espacio donde se aloja una pagina web para poder verse a traves de un dominio, es el uso de los servidores web con todos sus recursos.</p>
        <p><strong>- DNS :</strong> es el sistema de nomenclatura jerárquico que se ocupa de la administración del espacio de nombre del dominio, resuelve las peticiones de asignación de nombres, usa los navegadores web para saber el sitio (ip) por su nombre (www.ejemplo.com).</p>
        <p><strong>- DOMINIO :</strong> es el nombre único que se le da a un sitio web.</p>

        <br/>
        <br/>
          <center><div><img src={ImageDNS} ></img></div></center>

        <br/>
        <hr></hr> 
        <br/>
        
        
      <h2 className="bigtitleWhite font">Protocolos de red </h2> 

      <div><img src={ImageTCP} className="col-5 mitad"></img></div>

      <div className="col-7 mitad">
      
      <p><strong>- FTP :</strong> protocolo de transferencia de archivos, proporciona una interfaz y servicios para la transferencia de archivos en la red.</p>
      <p><strong>- SMTP :</strong> protocolo simple de transferencia de correo, proporciona servicios de correo electrónico en las redes de internet e IP.</p>
      <p><strong>- TCP :</strong> protocolo de control de transmisión, orientado a la conexión, gestión la conexión entre las computadoras emisora y receptora de forma parecida al desarrollo de llamadas telefónicas.</p>
      <p><strong>- UDP :</strong> El protocolo UDP se utiliza para transmitir datagram de forma rápida en redes IP y funciona como una alternativa sencilla y sin retardos del protocolo TCP. Se usa principalmente para consultas DNS, conexiones VPN y para el streaming de audio y vídeo.</p>
      <p><strong>- IP :</strong> protocolo de internet, es la base para todo el direccionamiento que se produce en las redes TCP / IP y proporciona un protocolo orientado a la capa de red sin conexión.</p>
      <p><strong>- ARP :</strong> protocolo de resolución de direcciones, hace corresponder las direcciones IP con las direcciones MAC de hardware.</p>
      <p><strong>- Dirección MAC :</strong> identificador de 48 bits que corresponde de forma única a una tarjeta o dispositivo de red. Se la conoce también como dirección física, y es única para cada dispositivo.</p>
      <p><strong>- IPX / SPX :</strong> intercambio de paquetes entre redes.</p>

      <br/>
      <br/>

      </div>   


      <h2 className="bigtitleWhite font">ELECTRON </h2> 

      <br/><br/>
      <div className="col-12">

      <p><strong>- Hola mundo :</strong> Creamos una nueva carpeta para electron.</p>
      <p><strong>- npm init :</strong> iniciaríamos npm dentro de la nueva carpeta.</p>
      <p><strong>- package.json :</strong> abrimos el package.json y dentro del script escribimos <strong>"start": "electron .",</strong> que nos va iniciar electron en esta misma carpeta.</p>
      <p><strong>- npm i electron@latest :</strong> instalamos la nueva version de electron. (Si no sale error puede ser por el nombre del package.json, sino cambialo).</p>
      <p><strong>- index.js :</strong> creamos un nuevo archivo javascript para programar la lógica de electron.</p>
        
          <div><img src={imageElectron} className="col-12"></img></div>
        
      <p><strong>-  npm start:</strong> con npm start o electron . en la consola podremos ver nuestra aplicacion.</p>
      <br/><br/>
      <p><strong>- npm install -g electron-packager :</strong> Para empaquetar la aplicación vamos a instalar electron-packager con el siguiente comando.</p>
      <p><strong>- npm install  :</strong> para instalar los módulos de nodejs y todas las dependencias.</p>
      <p><strong>- electron-packager . :</strong> para terminar de empaquetar, nos va a crear una carpeta dependiendo el sistema, si por ejemplo lo hemos instalado para windows nos creara una carpeta <strong>holamundo-win32-x64</strong> dentro de esta carpeta tendremos el ejecutable <strong>holamundo.exe</strong>.</p>

      <br/>
      <br/>

      </div>  


 
        </div>
        ||
        <div className="desaparecer"></div>
      }


  

        <center>
          {this.state.desaparecer == false && <img src={imagelogo} className="logoCodigoEstrellla " alt="imagen robot"/>}
          {this.state.desaparecer == true && <img src={imagelogo} className=" desaparecerimagen" />}
          
          {this.state.desaparecer == false &&
          <div id="lineagris" className="lineagris" >
          {this.state.temporizador == 0 && <div className="linea-amarilla-primera"></div>}
          {this.state.temporizador == 1 && <div className="linea-amarilla-segunda"></div>}
          {this.state.temporizador == 2 && <div className="linea-amarilla-tercera"></div>}
          {this.state.temporizador == 3 && <div className="linea-amarilla-cuarta"></div>}
          {this.state.temporizador == 4 && <div className="linea-amarilla-quinta"></div>}
          {this.state.temporizador == 5 && <div className="linea-amarilla-sexta"></div>}
          
        </div>
        
          ||
          this.state.desaparecer == true && <div id="lineagris" className="lineagrisdesaparecer"></div>}
          
        </center>

        <br/>
        <br/>
      </div>
     
    </React.Fragment>
  );
}   
}

export default Inicio;









