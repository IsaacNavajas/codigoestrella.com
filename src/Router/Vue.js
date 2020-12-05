import React from 'react';




function Vue(){

    return (

      <React.Fragment>
        <div className="container">
          

          <h2  className="bigtitle font">Instalación</h2><br/>
   

          <p><strong>script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js":</strong> CDN para instalar Vue.js.</p>
          <p><strong>npm install vue:</strong> Instalar Vue.js mediante npm.</p>


          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Atributos de Vue.js</h2><br/>
      
          <div className="col-6 mitad">
            <center>En Html</center>
            <hr className="linea-discontinua" />
          <p><strong>"condicional" ? "Opcion True" : "Opcion False"</strong> es el <spam class="subrayado">operador ternario</spam> y se utiliza entre doble corcheas para meter condicionales como valores.</p>
          <p><strong>v-bind:</strong> v-bind:src="", v-bind:alt="name"... v-bind: sirve para bindear desde el html los valores de data() de dentro de new Vue. data() return name: 'Bitcoin'. Si queremos bindear un valor directamente lo englobaremos dentro de 'doble corcheas'.</p>
          <p><strong>v-if=""</strong> para bindear una condicional, los valores los cogera desde data().</p>
          <ul>
            <li><p><strong>+ v-else=""</strong> accion de vuelta para cuando no se cumple un condicional.</p></li>
            <li><p><strong>+ v-else-if=""</strong> para agregar mas de un condicional.</p></li>
          </ul>

          <p><strong>v-show:</strong> sirve para bindear, igual que v-bind, pero vamos a utilizar v-show cuando queramos interactuar con codigo reactivo.</p>
          <p><strong>v-for="v in value" v-bind:key="v.key":</strong> un foreach para llamar a los elementos de un array, value es el array que renderizamos y bindeamos un key para distinguir cada valor. Para definir llave / valor, entre doble corcheas le damos el nombre de la llave o valor = value.key o value.value</p>
          <p><strong>v-on:click="function":</strong> para dar logica cuando pulsemos click, la logica se agregara en una function de vue en methods.</p>
          <p><strong>v-on:moseover="function":</strong> para dar logica cuando dejamos el raton en hover del componente.</p>
          <p><strong>v-on:moseout="function":</strong> para dar logica cuando dejamos el raton fuera del componente.</p>
          <p><strong>v-bind:Class:"change = 5 ? 'blue' : 'red' ":</strong> si la condicion del operador ternario se cumple activara la clase blue de css sino se cumple activara la clase red.</p>
          <p><strong>v-bind:style=" background : 'color' "</strong> para agregar estilos css directamente.</p>
         
          </div>

          <div className="col-6 mitad">
          <center>En Vue.js</center>
          <hr className="linea-discontinua" />
          <p><strong>new Vue:</strong> para concatenar el id o class del html.</p>
          <ul>
            <li><p><strong>+ el:</strong> para concatenar el id o class del html, '#app'.</p></li>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones, si queremos accedes a valores de data lo aremos a traves de la keyword this. .</p></li>
          
            <li><p><strong>+ properties y watchers:</strong> Les podemos dar a estas funciones el nombre que prefiramos;</p></li>
            <ul>
              <li><li><p><strong>- properties:</strong> son funciones que siempre devuelven un valor, podemos agregar un nuevo objeto dentro de la propiedad de data().</p></li></li>
              <li><li><p><strong>- watchers:</strong> en vez de ser funciones que devuelven un valor estas ejecutan un codigo.</p></li></li>
            </ul>

          </ul>
          <p><strong>Vue.component('nombre_del_componente', ... ):</strong> para crear un contenedor nuevo y darle un nombre, para llamar este componente al html lo bindearemos entre llaves como un metodo.</p>
          <ul>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores del componente.</p></li>
            <li><p><strong>+ template:</strong> para pasar el html como string invertido.</p></li>
            <li><p><strong>+ methods:</strong> .</p></li>
          </ul>
          </div>

          <br/>
          
          <div className="col-12">
          <hr></hr><br/>
            <h2  className="bigtitle">Git rm y Git reset</h2><br/>

            <p><strong>git rm:</strong> elimina archivos de git sin eliminar el historial de sistema de versiones.</p>
            <p><strong>git rm --cached:</strong> elimina archivos del commit y del área de staging pero los mantiene el disco duro.</p>
            <p><strong>git rm --force: </strong>elimina los archivos de git y del disco duro.</p>
            <p><strong>git reset: </strong>nos ayuda a volver en el tiempo, (SIN LA POSIBILIDAD DE VOLVER a un commit futuro).</p>
            <p><strong>git rm --soft:</strong> borramos el historial y los registros de git pero mantenemos los estados de staging.</p>
            <p><strong>git rm --hard:</strong> borra TODO.</p>
            <p><strong>git checkout:</strong> para cambiar entre ramas, también podemos usarlo para ir a otro estado de memoria de git show para ver ese commit y volver después al master. También podemos volver a otro commit, trackearlo, hacer otro commit para guardar un commit anterior como nuevo, sin tener que borrar los commits anteriores.</p>
            <br/>
            <hr></hr><br/>
          </div>
          
          <div className="col-12">
            <h2  className="bigtitle">Git rm y Git reset</h2><br/>

            <p><strong>git rm:</strong> elimina archivos de git sin eliminar el historial de sistema de versiones.</p>
            <p><strong>git rm --cached:</strong> elimina archivos del commit y del área de staging pero los mantiene el disco duro.</p>
            <p><strong>git rm --force: </strong>elimina los archivos de git y del disco duro.</p>
            <p><strong>git reset: </strong>nos ayuda a volver en el tiempo, (SIN LA POSIBILIDAD DE VOLVER a un commit futuro).</p>
            <p><strong>git rm --soft:</strong> borramos el historial y los registros de git pero mantenemos los estados de staging.</p>
            <p><strong>git rm --hard:</strong> borra TODO.</p>
            <p><strong>git checkout:</strong> para cambiar entre ramas, también podemos usarlo para ir a otro estado de memoria de git show para ver ese commit y volver después al master. También podemos volver a otro commit, trackearlo, hacer otro commit para guardar un commit anterior como nuevo, sin tener que borrar los commits anteriores.</p>
            <br/>
            <hr></hr><br/>
          </div>
          <br/>
          <br/>
          
        </div>

        
      </React.Fragment>

    );


}

export default Vue;
