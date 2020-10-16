import React from 'react';
import Modal from './Modal';
import Json from './Json';


class ModalJson extends React.Component{

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
                     Crear un Json
                  </button>



                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'C o m o - c r e a r - u n - J s o n'
                      >
                        <Json/>
                  </Modal>

      </React.Fragment>

    );



  }


}

export default ModalJson;
