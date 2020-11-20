import React from 'react';
import Image from '../source/archivocomprimido.png';
import Archivos from '../source/archivos.zip';

class Inicio extends React.Component{

  render(){

    return (
      <React.Fragment>
        <div className="container">

        <div className="col-12 imagestart">
          <form>

            <img src={Image} className="col-3"></img>


            <br/>
            <div className="row">
            <br/>
              <a href={Archivos} download className="col-8"><input type="button" value="Descargar" className="col-12 btn btn-secondary bigtitle"/></a>
            </div>


          </form>

        </div>
        </div>
      </React.Fragment>
    );
    
  }



}

export default Inicio;
