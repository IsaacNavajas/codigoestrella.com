import React from 'react';

function Vue(){

    return (

      <React.Fragment>
        <div className="container">
          

          <h2  className="bigtitle font">Instalación</h2><br/>

          <p><strong>script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js":</strong> CDN para instalar Vue.js.</p>
          <p><strong>npm install vue:</strong> Instalar Vue.js mediante npm.</p>
          <p><strong>npm install -g @vue/cli:</strong> Instalar globalmente el creador de proyectos de Vue.js. Para crear un proyecto nuevo <strong>vue create nombreapp</strong> . Para crear un servidor virtual <strong>npm run serve</strong>.</p>
          <p><strong>La extension recomendada para VS Code es Vetur y las Vue.js devtools para el navegador.</strong></p>
          <p><strong>vue ui:</strong> crea una interfaz grafica con todo lo instalado es nuestro proyecto.</p>
          <p><strong>npm run lint:</strong> Detectar errores de linteo.</p>
          <p><strong>npm run build:</strong> Generar la aplicación en modo producción. Genera una carpeta dist.</p>
          <p><strong>npm i -g serve:</strong> Permite generar un servidor web local.</p>
          <p><strong>serve -s dist:</strong> Levanta un localhost de nuestro Dist.</p>


          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Atributos de Vue.js</h2><br/>
      
          <div className="col-lg-6 col-sm-12 mitad">
            <center>En Html (y directivas)</center>
            <hr className="linea-discontinua" />
          <p><strong>"condicional" ? "Opcion True" : "Opcion False"</strong> es el <u class="subrayado">operador ternario</u> y se utiliza entre doble corcheas para meter condicionales como valores.</p>
          <p><strong>v-bind:</strong> v-bind:src="", v-bind:alt="name"... v-bind: sirve para bindear desde el html los valores de data() de dentro de new Vue. data() return name: 'Bitcoin'. Si queremos bindear un valor directamente lo englobaremos dentro de 'doble corcheas'.</p>
          <p><strong>v-if=""</strong> para bindear una condicional, los valores los cogera desde data().</p>
          <ul>
            <li><p><strong>+ v-else=""</strong> accion de vuelta para cuando no se cumple un condicional.</p></li>
            <li><p><strong>+ v-else-if=""</strong> para agregar mas de un condicional.</p></li>
          </ul>

          <p><strong>v-show:</strong> sirve para bindear, igual que v-bind, <u>pero vamos a utilizar v-show cuando queramos interactuar con codigo reactivo en vez de v-if o v-bind...</u></p>
          <p><strong>v-for="v in value" v-bind:key="v.key":</strong> un foreach para llamar a los elementos de un array, value es el array que renderizamos y bindeamos un key para distinguir cada valor. Para definir llave / valor, entre doble corcheas le damos el nombre de la llave o valor = value.key o value.value</p>
          <p><strong>v-on:click="function":</strong> para dar logica cuando pulsemos click, la logica se agregara en una function de vue en methods.</p>
          <p><strong>v-on:moseover="function":</strong> para dar logica cuando dejamos el raton en hover del componente.</p>
          <p><strong>v-on:moseout="function":</strong> para dar logica cuando dejamos el raton fuera del componente.</p>
          <p><strong>v-bind:Class:"change = 5 ? 'blue' : 'red' ":</strong> si la condicion del operador ternario se cumple activara la clase blue de css sino se cumple activara la clase red.</p>
          <p><strong>v-bind:style=" background : 'color' "</strong> para agregar estilos css directamente.</p>
         

          <p><strong>v-model=" value "</strong> es una de las tecnicas de Two-Way Data Binding, el valor value sera definido en data() de vue.js y lo que nos permite es si lo declaramos por ejemplo en un input que nos muestre a tiempo real el los cambios del valor de ese input.</p>
         
          <p><strong>v-slot=" text "</strong> definir el tipo de slot donde queremos guardar el contenido, este ira dentro de una etiqueta llamada template.</p>
         
          </div>

          <div className="col-lg-6 col-sm-12 mitad">
          <center>En Vue.js</center>
          <hr className="linea-discontinua" />
          <p><strong>new Vue:</strong> para concatenar el id o class del html.</p>
          <ul>
            <li><p><strong>+ el:</strong> para concatenar el id o class del html, '#app'.</p></li>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores, podemos definir un valor que vamos a llamarlo en el html entre doble llave.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones, si queremos accedes a valores de data lo aremos a traves de la keyword this. .</p></li>
          
            <li><p>+ Properties <strong>computed y watchers:</strong> Les podemos dar a estas funciones el nombre que prefiramos;</p></li>
            <ul className="nido">
              <li><p><strong>- computed:</strong> son funciones que siempre devuelven un valor, podemos agregar un nuevo objeto dentro de la propiedad de data().</p></li>
              <li><p><strong>- watchers:</strong> en vez de ser funciones que devuelven un valor estas ejecutan un codigo. Se define como watch:.</p></li>
            </ul>

          </ul>
          <p><strong>Vue.component('nombre_del_componente', ... ):</strong> para crear un contenedor nuevo o componente hijoo y darle un nombre, para llamar este componente al html lo bindearemos entre llaves como un componente.</p>
          <ul>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores del componente.</p></li>
            <li><p><strong>+ template:</strong> para pasar el html como string invertido, todos el template ira dentro de un mismo div.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones del componente nuevo.</p></li>
            <li><p><strong>+ props:[] :</strong> cuales son las propiedades que se pueden enviar <strong>del componente padre al componente hijo</strong> simplemente definiendolo dentro del array. Para finalizar hay que bindear los props en el componente de html, b-vind:title="title" El primer valor es el del array y el que devuelve es el del componente padre. S tenemos muchos props que devolver podemos concatenar todos esos valores en el data() como un solo objeto del componente padre y devolverlo como un unico valor en el array.</p></li>
            <ul className="nido">
                <li><p><strong>- del componente hijo al componente padre:</strong> la comunicacion de padres a hijos es a traves de eventos, dentro del componente del html vamos a asociar un evento para avisar al componente padre que tiene que cambiar con v-on:evento="Funcion-del-componente-padre" para definir el evento se puede usar this.$emit().</p></li>
                <li><p><strong>- slots:</strong> nos va a permitir injectar contenido <strong>desde el componente padre al componente hijo</strong> en vez de propiedades como hasta haora por ejemplo html para esto usaremos los slots, para desplegarlo englosaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
              
              </ul>
          </ul>
          </div>

          <br/>
          
          <div className="col-12">
          <hr></hr><br/>
            <h2  className="bigtitle">Pertenecientes a Vue.js</h2><br/>

            <p><strong>this.$emit():</strong> Va a ejecutar el codigo que este dentro del parentesis cada vez que se ejecute la funcion de donde permanece, si le pasamos una funcion el segundo parametro va a ser su parametro, this.$emit('funcion', 'argumento').</p>
            <p><strong>.$mount():</strong> se pone despues de cerrar el parentesis de new vue().$mount("#app") y tiene la misma accion que el: de dentro de new vue().</p>

            
            <br/>
            <hr></hr><br/>
          </div>
          
          <div className="col-12">
            <h2  className="bigtitle">Ciclo de Vida y Hooks</h2><br/>

            <a 
            href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" 
            target="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram" 
            className="Link">
              Ciclo-de-vida-Vue-js.
          </a><br/><br/>
            <u className="subrayado">Los ciclos de vida se van posicionar justo debajo de data(), Los Hooks nos permite conocer como se crea, actualiza y se destruye un componente.</u><br/><br/>
            <p><strong>A continuación vamos a ver los hooks que nos ofrece Vue:</strong> </p>
            <ul>
              <li><p>1. beforeCreate.</p></li>
              <li><p>2. <strong>created</strong>.</p></li>
              <li><p>3. beforeMount.</p></li>
              <li><p>4. <strong>mounted</strong>.</p></li>
              <li><p>5. beforeUpdate.</p></li>
              <li><p>6. <strong>updated</strong>.</p></li>
              <li><p>7. beforeDestroy.</p></li>
              <li><p>8. <strong>destroyed</strong>.</p></li>
            </ul>

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
