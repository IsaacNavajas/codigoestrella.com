import React from 'react';

class botonMongodb extends React.Component{

  state={
    openModal: false
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      <React.Fragment>
                  <br/>
                  <h2  className="bigtitle">Operadores</h2><br/>
                  <br/>
                  <p><strong>$eq :</strong> = .</p>
                  <p><strong>$gt :</strong> &gt; .</p>
                  <p><strong>$gte :</strong> &gt;= .</p>
                  <p><strong>$lt :</strong> &lt; .</p>
                  <p><strong>$lte :</strong> &lt;= .</p>
                  <p><strong>$ne :</strong> != .</p>
                  <p><strong>$in :</strong> valores dentro de un rango.</p>
                  <p><strong>$nin :</strong> valores que no están dentro de un rango.</p>
                  <hr className="linea-discontinua"></hr>
                  <p><strong>$and :</strong> Une queries con un AND lógico .</p>
                  <p><strong>$not :</strong> Invierte el efecto de un query.</p>                  
                  <p><strong>$nor :</strong> Une queries con un NOR lógico.</p>
                  <p><strong>$or :</strong> Une queries con un OR lógico.</p>
                  <hr className="linea-discontinua"></hr>
                  <p><strong>$exist :</strong> Documentos que cuentan con un campo especifico.</p>
                  <p><strong>$type :</strong> Documentos que cuentan con un campo de un tipo especifico.</p>
                  <hr className="linea-discontinua"></hr>
                  <p><strong>$all :</strong> Arreglos que contengan todos los elementos del query.</p>                
                  <p><strong>$elemMatch :</strong> Documentos que cumplen la condición del $elemMatch en uno de sus elementos.</p>
                  <p><strong>$size :</strong> Documentos que contienen un campo tipo arreglo de un tamaño especifico.</p>
                  <hr className="linea-discontinua"></hr>


                  <p><strong>ObjectId:</strong> ObjectId("athy9edfgt...").</p>
                  <p><strong>Date:</strong> ISODate("2019-02-18T...").</p>
                  <p><strong>Number;</strong> </p>
                  <p><strong>Strings :</strong> "algún texto".</p>
                  <p><strong>Boolean :</strong> True / False.</p>
                  <p><strong>ObjectId:</strong> ObjectId("athy9edfgt...").</p>
                  <p><strong>Date:</strong> ISODate("2019-02-18T...").</p>
                  <p><strong>Number;</strong> </p>
                    
                    
                  <hr></hr><br/>

                  <br/><h2  className="bigtitle">Tipados con Mongodb</h2><br/>
                  <br/>
                  <p><strong>Strings :</strong> "algún texto".</p>
                  <p><strong>Boolean :</strong> True / False.</p>
                  <p><strong>ObjectId:</strong> ObjectId("athy9edfgt...").</p>
                  <p><strong>Date:</strong> ISODate("2019-02-18T...").</p>
                  <p><strong>Number;</strong> </p>
                    <ul>
                      <li><p><strong>Double:</strong> para guardar información que tenga punto decimal (su tamaño es de 64 bits).</p></li>
                      <li><p><strong>Integer 32 bits:</strong> para guardar información entera (su tamaño es de 32 bits).</p></li>
                      <li><p><strong>Integer 64 bits:</strong> para guardar información entera (su tamaño es de 64 bits).</p></li>
                      <li><p><strong>Decimal:</strong> para guardar información de tipo financiera es decir cuando tenemos muchísimos datos que almacenar (son de 128 bits).</p></li>
                    </ul>
                  <p><strong>Documento embebido:</strong> es cuando encapsulamos un documento Bson dentro de otro documento, esto se hace encapsulando un objeto Json en un valor o si queremos varios objetos encapsulando un array y dentro varios objetos, los arrays nos ayudan de escribir uno a muchos de forma muy sencilla y no pueden ocupar mas de 16 mb.</p>
                  <br/>

      </React.Fragment>

    );



  }


}

export default botonMongodb;
