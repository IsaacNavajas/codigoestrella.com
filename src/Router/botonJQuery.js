import React from 'react';




function Pagereact(){

    return (

      <React.Fragment>
        <div className="container">

          <div  className="bigtitle font">Instalacion</div><br/>
  

          <strong>npm install jquery: </strong>instalar libreria de jquery. <br/>

          <br/>
          <hr></hr><br/>
          <div  className="bigtitle">Funcionalidad</div><br/>

          <span className="subrayado"> JQuery funciona agregando el simbolo <strong>$</strong> y concatenando el id o class sobre el que queremos trabajar y el metodo de la libreria.</span>
          <br/><br/>
        
          <strong>$('li.hot').addClass('complete') :</strong> vamos a trabajar sobre lso elementos li que tengan la clase hot (.hot), y ademas vamos a agregarle la clase complete. (si querriamos trabajar sobre un id seria = $(#hot)).<br/>
          <strong>$(document): </strong>crea un objeto jquery representando la pagina.<br/><br/>

          <hr></hr><br/>


          <div  className="bigtitle">Libreria</div><br/>
          <br/>
          <strong>$('ul').text():</strong> .<br/>
          <strong>$('ul').html():</strong> .<br/>
          <strong>$('ul').remove(): </strong>.<br/>
          <strong>$('ul').replaceWith(): </strong>.<br/>
          <hr></hr><br/>

          <strong>$('ul').append():</strong> .<br/>
          <strong>$('ul').before():</strong> .<br/>
          <strong>$('ul').after():</strong> .<br/>
          <strong>$('ul').prepend):</strong> .<br/>
          <hr></hr><br/>

          <strong>attr():</strong> .<br/>
          <strong>removeAttr():</strong> .<br/>
          <strong>addClass():</strong> .<br/>
          <strong>removeClass():</strong> .<br/>
          <hr></hr><br/>

          <strong>.each():</strong> .<br/>
          <strong>this <code>or</code> $(this):</strong> .<br/>
          <hr></hr><br/>

          <strong>.find():</strong> .<br/>
          <strong>.closets():</strong> .<br/>
          <strong>.parent():</strong> .<br/>
          <strong>.parents():</strong> .<br/>
          <strong>.children():</strong> .<br/>
          <strong>.siblings():</strong> .<br/>
          <strong>.next():</strong> .<br/>
          <strong>.pnextAll():</strong> .<br/>
          <strong>.prev():</strong> .<br/>
          <strong>.prevAll():</strong> .<br/>
          <strong>.add():</strong> .<br/>
          <strong>.filter():</strong> .<br/>
          <strong>.parent():</strong> .<br/>
          <strong>.parents():</strong> .<br/>
          <hr></hr><br/>

          <div  className="bigtitle">Selectores</div><br/>
          <br/>
          <strong>:button:</strong> .<br/>
          <strong>:checkbox:</strong> .<br/>
          <strong>:checked: </strong>.<br/>
          <strong>:disabled: </strong>.<br/>
          <hr></hr><br/>

          <br/>
          <hr></hr><br/>

        </div>
      </React.Fragment>

    );


}

export default Pagereact;
