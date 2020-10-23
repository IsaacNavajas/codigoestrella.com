import React from 'react';
import image from "../source/spam.png";
import {Link} from 'react-router-dom';



class Footer extends React.Component{

  render(){

    return (
      <React.Fragment>

      <footer className="col-12 footer"> 
 
          <div className=" col-5 footerpago">
            <img src={image} className="imagefooter"></img>
          </div>

          <div className=" col-1 linea"> </div>

          <div className=" col-6 footerdescripcion"> 

            <h1 className="footercodigoestrella col-12">Codigoestrella.com</h1>
            <p className="footertexto">Esta pagina ha sido diseñada para el estudio y producción del área de programación.</p>
            <a href="mailto:codigoestrella7a@gmail.com"><button class="btn btn-secondary"> Contáctanos ✉  </button></a>
                  

          </div>
   
      </footer>
        

     
      </React.Fragment>
    );
    
  }



}

export default Footer;
