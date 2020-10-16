import React from 'react';

import imagejson from "../source/codezen 3.png";



function Json(){

    return (

      <React.Fragment>
        <div className="container">

          <div  className="bigtitle font">Json</div><br/>
   

            <p>Para crear un Json lo vamso a estructurar todo entre llaves y arrays, pondremos arrays cuando queramos desglosar un cojunto de valores que guarden la misma estructura y entre llaves cuando queramos demostrar pocos valores o valores en distintos tiempos.</p> <br/>

            
            <p>Cuando se crea el Json hay que pensar como va a quedar finalmente el proyecto, donde queremos desplegar cada elemento del json, si queremos desplegar todos los elementos en una sola peticion usarmeos un array, pero si lo que queremos es desplegar varios titulos en distintas lineas de tiempo en el codigo usarmos las llaves, dividiremos todos los datos en sus padres como se muestra en el ejeplo.</p> <br/>

            <p>Para desplegar los valores del json lo aremos dentro del return(), si esta dentro de una array tendremos que utilizar .map y dentro el valor key= para identificar;</p> <br/>
              <code>- this.state.data.json.titles.titleone => aqui estamos accediendo al json que lo hemos guardado en memoria del this.state.data, para acceder a la parte del json que esta entre llaves lo haremos desplazandonos entre puntos. </code><br/><br/>
              <code>- this.state.data.json.results.results.one.map(badge => ( ... badge.description)) => para acceder a la parte del array, sera necesario usar dentro del parentesis un elemento html que contenga el key= que nos va a posicionar una valor para diferenciar cada elemento, es recomendable utilizar un id, key="id". Dentro de array diferenciaremos cada cadena de valor entre llaves. </code><br/>
            
            <center><div className=" col-12"><img src={imagejson} className="imagecarbon"></img></div></center>

            <code>El ultimo objeto de un array nunca lleva coma.</code>
            


          </div>

      </React.Fragment>

    );


}

export default Json;
