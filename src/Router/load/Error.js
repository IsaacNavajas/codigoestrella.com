import React from 'react';

import {Link} from "react-router-dom";



class Error extends React.Component{

  render(){
    return (
      <div>
        <center>
          <code>
          <Link to="/"><button type="submit" className="buttongetstart btn btn-secondary" >Inicio</button></Link>

            <p>Error: 404</p>
            
            <div className="spinner-grow text-danger  Loading" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            
          </code>
        </center>
      </div>
    );

  }


}

export default Error;
