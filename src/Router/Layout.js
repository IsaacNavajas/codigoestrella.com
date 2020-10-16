import React from 'react';
import Navbar from './Navbar';



function Router(props){

    return (
      <React.Fragment>
        <Navbar/>
        {props.children}
      </React.Fragment>
    );


}

export default Router;
