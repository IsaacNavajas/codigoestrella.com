import React from 'react';
import Modal from './Modal';

import GetTypescript from './Typescript';

class Typescript extends React.Component{
  state = {
    openModal: false,
  }

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}

  render(){

    return (

      <React.Fragment>
        <div >

          
          <button 
                      className="buttonTypescript btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Typescript
          </button>


        </div>


        
        <Modal
            isOpen={this.state.openModal}
            onClose={this.closeModal}
            title = 'T y p e s c r i p t'
            >
              <GetTypescript/>
        </Modal>

      </React.Fragment>

    );

}

}



export default Typescript;
