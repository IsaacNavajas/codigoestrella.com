import React from 'react';

import celtics from "../../source/celtics.png";

class CelticsModule extends React.Component{

  render(){

    return (
      <React.Fragment>
          <div className="container-fluid">
            <div className="row">
          
              <div className="banderaverde">
                <img src={celtics} className="celtics"></img>
                <ul className="listaceltics">
                  <li><p><a href="https://www.nba.com/celtics/?tmd=1" target="_blank">+ celtics.com</a></p></li>
                  <li><p><a href="https://nbastream.net/" target="_blank">+ nbastream.net</a></p></li>
                  <li><p><a href="http://nbastream.tv/" target="_blank">+ nbastream.tv</a></p></li>
                  <li><p><a href="http://firstrowsportes.com/basketball" target="_blank">+ firstrowsportes.com/basketball</a></p></li>
                  <li><p><a href="http://crickfree.be/" target="_blank">+ crickfree.be</a></p></li>
                </ul>
              </div>
            </div>
          </div>


      </React.Fragment>
    );
    
  }



}

export default CelticsModule;
