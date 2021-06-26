import React from 'react';
import image from "../source/spam.png";




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
            {this.props.verifyLanguage && <p className="footertexto">Esta página ha sido diseñada para el estudio y producción del área de programación.</p>}
            {!this.props.verifyLanguage && <p className="footertexto">This page has been designed for the study and production of the programming area.</p>}

            <a href="mailto:codigoestrella7a@gmail.com">
               
                {!this.props.verifyLanguage && <button className="btn btn-secondary">Contact us ✉ </button>}
                {this.props.verifyLanguage && <button className="btn btn-secondary">Contactanos ✉ </button>}
              
            </a>
                  

          </div>
   
      </footer>
        

    
      </React.Fragment>
    );
    
  }



}

export default Footer;
