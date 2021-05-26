import { render } from '@testing-library/react';
import React from 'react';

import WPGeneral from './wordpress/general';
import WPPlugins from './wordpress/plugins.js';
import WPPermisos from './wordpress/permisos.js';

class wordpress extends React.Component{
  
  state={

    value : 1

  };

  render(){

    return (

      <React.Fragment>

        <div className="container">
          
          <h2  className="bigtitle font col-8">Wordpress</h2><br/>

            <select className="centrarTexto col-4" onChange={(e) => this.setState({value : e.target.value})}>
              <option id="wordpress1" value="1">WP General</option>
              <option id="wordpress2" value="2">WP Plugins y metodologías</option>
              <option id="wordpress3" value="3">WP Permisos al cliente</option>
            </select>

              <div>

                  {this.state.value == 1 && <WPGeneral/>}
                  {this.state.value == 2 && <WPPlugins/>}
                  {this.state.value == 3 && <WPPermisos/>}

              </div>

          </div>
        
      </React.Fragment>

    );
    }    

}

export default wordpress;
