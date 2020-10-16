import React from 'react';

import {Link} from "react-router-dom";



class Error extends React.Component{

  render(){
    return (
      <div>
        <center>
          <code>
          <Link to="/inicio"><button type="submit" className="buttongetstart btn btn-secondary" >Inicio</button></Link>

            <p>Error: 404</p>
            
            <div class="spinner-grow text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>

            
          </code>
        </center>
      </div>
    );

  }


}

export default Error;
