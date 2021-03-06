import React from 'react';
import Modal from './Modal';
import imageuna from "../source/codezen 8.png";


class controllerLaravel extends React.Component{

  state={
    openModal: false
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      <React.Fragment>
                  <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Crud, --resource
                  </button>



                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'C r u d'
                      >
                         <img src={imageuna } className="imagecarbon"></img>
                  </Modal>

      </React.Fragment>

    );



  }


}

export default controllerLaravel;
