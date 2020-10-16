import React from 'react';
import Modal from './Modal';

import data from './Javascript.json';
import JQuery from './JQuery';

import image from "../source/image javascript.png";

class Javascript extends React.Component{
  state = {
    openModal: false,
    data: {
      titles:{},
      results:{
        results_atributosjavascript:[],
        results_arrayenjavascript:[],
        results_mapjavascript:[],
        results_installjavascript:[]
      }
    },

  };

  componentDidMount() {
    this.dataCharacters();
  }

  dataCharacters = () => {

    if(data){
      this.setState({  data: data });
    }else{
      this.setState({  data: null });
    }
  };

  
  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}


  render(){

    return (

      <React.Fragment>
        <div className="container">

        <br/><br/><br/>


        <br/>

        <div className="bigtitle">{this.state.data.titles.title_four}</div>
        <br/>
        {this.state.data.results.results_installjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}

          <br/><br/>
          
          <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     JQuery
          </button>

        <hr></hr>

        
        <div className=" col-12">
          <img src={image} className="imagejavascript"></img>
          <hr></hr><br/>
        </div><br/>
      


        <div className="bigtitle">{this.state.data.titles.title_two}</div>
        <br/>
        {this.state.data.results.results_arrayenjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}

        <br/>
        <hr></hr><br/>

        <div className="bigtitle">{this.state.data.titles.title_three}</div>
        <br/>
        {this.state.data.results.results_mapjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}
        <br/>
        <hr></hr><br/>

        <div className="bigtitle">{this.state.data.titles.title_one}</div>
        <br/>
        {this.state.data.results.results_atributosjavascript.map(badge => 
        <ul key={badge.id}>
          <div >
            <p> <strong>{badge.name} </strong> {badge.description}</p>
          </div>
        </ul>)}

        <br/>
        <hr></hr><br/>

        <br/><br/><br/>

        </div>


        
        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'J Q u e r y'
            >
              <JQuery/>
        </Modal>

      </React.Fragment>

    );

}

}



export default Javascript;
