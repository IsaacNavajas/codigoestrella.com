import React from 'react';
import Image from '../source/codezen 15.png';
import Archivos from '../source/archivos.zip';

class Inicio extends React.Component{

  render(){

    return (
      
      <React.Fragment>
        <div className="container">
      <h2 className="bigtitle font">Expresiones regulares </h2>    
      
          <div className=" col-12"><img src={Image} className="imagecarbon"></img></div>
          <ul>
            <li> <p><strong>- / :</strong> Sirve para iniciar y encerrar una expresion regular.</p></li>
            <li> <p><strong>- ^ :</strong> Se inicia con este patron para un codigo universal, en esencia para la compilacion en otros idiomas.</p></li>
            <li> <p><strong>- $ :</strong> Se finaliza con este simbolo.</p></li>
            <li> <p><strong>- - :</strong> El guion se utiliza para delimitar rangos, ej: 4-9 'del cuarto hasta el noveno'.</p></li>
            <li> <p><strong>- [] :</strong> Para delimitar un patron.</p></li>
            <li> <p><strong >- 'llaves' :</strong> Para definir una condición. 'llaves'6-9 -> seis elementos como minimo y nueve como maximo.</p></li>
    

         
          </ul>
          <hr></hr> 
          <hr className="imagestart"></hr> 
          
        </div >
      </React.Fragment>

    );
    
  }



}

export default Inicio;
