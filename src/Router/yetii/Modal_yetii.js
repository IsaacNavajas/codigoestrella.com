import React from 'react';
import ReactDOM from 'react-dom';


function Modal_yetii(props){
  if(props.isOpen === false){return null};

    return ReactDOM.createPortal(
    <div className="ModalYetiI" tabIndex="-1" role="dialog" >
        <div className="modal-content-yetii">

          <div className="modal-body-yetii">
              <center>
                {props.children}
                <input type="button" className="button_yetii btn btn-light" value="Salir" onClick={props.onClose} ></input>
                {props.acces == true && <p className="aviso">** Ya tienes acceso al toggle**</p>}
              </center>
            
          </div>

          </div>
    </div>
    
      
      
      , document.getElementById('Modal_yetii')
    )



}

export default Modal_yetii;
