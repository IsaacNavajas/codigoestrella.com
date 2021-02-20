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
          <p><strong>vue add:</strong> agregar pluyins a vue.js.</p>
          <p><strong>npm run lint:</strong> Detectar errores de linteo.</p>
          <p><strong>npm run build:</strong> Generar la aplicación en modo producción. Genera una carpeta dist.</p>
          <p><strong>npm i -g serve:</strong> Permite generar un servidor web local.</p>
          <p><strong>serve -s dist:</strong> Levanta un localhost de nuestro Dist.</p>

          <p><strong>npm i-S vue-router:</strong> para installar vue router en nuestro proyecto.</p>


          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle">Atributos de Vue.js</h2><br/>
      
          <div className="col-lg-6 col-sm-12 mitad">
            <center>En Html (y directivas)</center>
            <hr className="linea-discontinua" />
          <p><strong>"condicional" ? "Opcion True" : "Opcion False"</strong> es el <u class="subrayado">operador ternario</u> y se utiliza entre doble corcheas para meter condicionales como valores.</p>
          <p><strong>v-bind:</strong> v-bind:src="", v-bind:alt="name"... v-bind: sirve para bindear desde el html los valores de data() de dentro de new Vue. data() return name: 'Bitcoin'. Si queremos bindear un valor directamente lo englobaremos dentro de 'doble corcheas'. v-bind tambien se puede sustituir directamente por dos puntos <strong>:</strong> como por ejemplo :src="".</p>
          <p><strong>v-if=""</strong> para bindear una condicional, los valores los cogera desde data().</p>
          <ul>
            <li><p><strong>+ v-else=""</strong> accion de vuelta para cuando no se cumple un condicional.</p></li>
            <li><p><strong>+ v-else-if=""</strong> para agregar mas de un condicional.</p></li>
          </ul>

          <p><strong>v-show:</strong> sirve para bindear, igual que v-bind, <u>pero vamos a utilizar v-show cuando queramos interactuar con codigo reactivo en vez de v-if o v-bind...</u></p>
          <p><strong>v-for="v in value" v-bind:key="v.key":</strong> un foreach para llamar a los elementos de un array, value es el array que renderizamos y bindeamos un key para distinguir cada valor. Para definir llave / valor, entre doble corcheas le damos el nombre de la llave o valor = value.key o value.value</p>
          <p><strong>v-on: :</strong> podemos sustituir el v-on: por @. @:click="".</p>
          <p><strong>v-on:click="function":</strong> para dar logica cuando pulsemos click, la logica se agregara en una function de vue en methods.</p>
          <p><strong>v-on:moseover="function":</strong> para dar logica cuando dejamos el raton en hover del componente.</p>
          <p><strong>v-on:moseout="function":</strong> para dar logica cuando dejamos el raton fuera del componente.</p>
          <p><strong>v-bind:Class:"change = 5 ? 'blue' : 'red' ":</strong> si la condicion del operador ternario se cumple activara la clase blue de css sino se cumple activara la clase red.</p>
          <p><strong>v-bind:style=" background : 'color' "</strong> para agregar estilos css directamente.</p>
         
          <br/><hr></hr><br/>

          <p><strong>v-model=" value "</strong> es una de las tecnicas de Two-Way Data Binding, el valor value sera definido en data() de vue.js y lo que nos permite es si lo declaramos por ejemplo en un input que nos muestre a tiempo real el los cambios del valor de ese input.</p>
         
          <p><strong>v-slot=" text "</strong> definir el tipo de slot donde queremos guardar el contenido, este ira dentro de una etiqueta llamada template.</p>
          <p><strong>v-filter()</strong> define un filtro que transforma el valor antes de que se vuelva a escribir en el modelo desde la vista .</p>
         
          </div>

          <div className="col-lg-6 col-sm-12 mitad">
          <center>En Vue.js</center>
          <hr className="linea-discontinua" />
          <p><strong>new Vue():</strong> para concatenar el id o class del html (se utiliza mas al usar un CDN). Si queremos crear un proyecto en vue.js suele ser sustituido por <strong>export default</strong> "y entre llaves", para poder importarlo despues a otro componente y con una propiedad para darle el nombre del componente <strong>name: "nombre_del_componente",</strong>.</p>
          <ul>
            <li><p><strong>+ el:</strong> para concatenar el id o class del html, '#app'.</p></li>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores, podemos definir un valor que vamos a llamarlo en el html entre doble llave.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones, si queremos accedes a valores de data lo aremos a traves de la keyword this. .</p></li>
          
            <li><p>+ Properties <strong>computed y watchers:</strong> Les podemos dar a estas funciones el nombre que prefiramos, <ul className="subrayado">La diferencia con <strong>methods</strong> y <strong>computed</strong> es que las propiedades computadas tienen caché es decir que van a ser definidas cuando queremos que cambien su valor, las propiedades computadas tampoco tienen parametros ni pueden ser llamadas por que se despliegan como instancias y no como metodos.</ul></p></li>
            <ul className="nido">
              <li><p><strong>- computed:</strong> son funciones que siempre devuelven un valor, podemos agregar un nuevo objeto dentro de la propiedad de data(). </p></li>
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
                <li><p><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta haora por ejemplo html para esto usaremos los slots, para desplegarlo englosaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
              
              </ul>
          </ul>
          </div>

          <br/>
          
          <div className="col-12">
          <hr></hr><br/>
            <h2  className="bigtitle">Proyecto con Vue.js</h2><br/>

            
            <p>Etiqueta <strong>template:</strong> es donde englosaremos la parte del html que ira siempre dentro de una misma etiqueta como un div, un header...</p>
            <p>Etiqueta <strong>Style</strong> scoped: Para crear estilos que unicamente tengan un alcanze unicamente para el template del componente al que estamos trabajando. </p>
            
            <p><strong>script:</strong> dentro del script meteremos los <strong>import</strong> y el componente. Al crear el import Vue nos da un atajo que es la letra reservada @ que nos lleba directamente al src <u className="subrayado">import Example from <strong>"@/Example.png"</strong></u></p>
            <p><strong>export default:</strong> es donde englosaremos nuestro componente, dentro de este con la etiqueta <strong>name:""</strong> le daremos el nombre de nuestro componente.</p>
            <ul>
              <li><p><strong>+ name:"":</strong> para darle el nombre del componente.</p></li>
              <li><p><strong>+ components:</strong> devuelve un objeto y aqui vamos a definir los componentes que queremos usar dentro de este template en forma de etiqueta que habremos importado.</p></li>
              <li><p><strong>+ props:</strong> nos devuelve un objeto, .</p></li>
              <ul className="nido">
              <li><p><u className="subrayado">-  dentro de <strong>assets:</strong> podemos definir el tipo de props que esperamos dentro de otro objeto.</u></p></li>
              <li><p><strong>- Type:</strong> el tipado esperado, como array, string...</p></li>
              <li><p><strong>- default:</strong> el valor por defecto que esperamos, si esperamos un objeto o un array lo devolvemos en forma de funcion. -default: () => [].</p></li>
            </ul>
            </ul>
            
            
            <br/>
            <hr></hr><br/>
          </div>


          <div className="col-12">
   
            <h2  className="bigtitle">Pertenecientes a Vue.js</h2><br/>

            <p><strong>this.$emit():</strong> Va a ejecutar el codigo que este dentro del parentesis cada vez que se ejecute la funcion de donde permanece, si le pasamos una funcion el segundo parametro va a ser su parametro, this.$emit('funcion', 'argumento').</p>
            <p><strong>.$mount():</strong> se pone despues de cerrar el parentesis de new vue().$mount("#app") y tiene la misma accion que el: de dentro de new vue().</p>
            <p><strong>NuevoComponente:</strong> a la hoora de lanzar un compoente si lo hemos separado por mayusculas tenemos que deplegarlo usando un slug <strong>nuevo-componente</strong>.</p>
            <p><strong>this.$route.params:</strong> significa de esa ruta el parametro que queramos señalar. this.$route.params.id .</p>
            <p><strong>this.$router:</strong> this.$router no es igual this.$route. Este nos permite acceder a distancia del routery poder navegar a trves de codigo como this.$router.push() .</p>
            <p><strong>template:</strong> se puede utilizar la etiqueta template dentro de otra etiqueta template para dejar en invisible una etiqueta html (funciona como react.component) .</p>
            <p><strong>this.$shet(object, propertyName, value):</strong> para evitar problemas de reactividad en tareas asincronas, por ejemplo en una peticion fetch si encapsulamos un a con un metodo del fetch va a fallar . vm.$set() es un alias del global Vue.set()</p>
            
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

          <div className="col-12">
            
            <h2  className="bigtitle">Vue Router</h2><br/>

            <p><strong>npm i-S vue-router:</strong> para installar vue router en nuestro proyecto.</p>
            <p><strong>Router.js:</strong> vamos a crear un archivo roter.js para crear nuestro vue router, vamos a importar nuestro componentes. En nuestro archivo principal del proyecto, el main.js importamos nuestro router con import router from "@/router" y dentro de new Vue() definimos nuestro router con router:router, .</p>
              
              <ul className="nido">
                  <p><strong>+ Vue.use(Router):</strong> lo escribimos despues de los imports de los componentes para poder utilizar el Router.</p>
                  <p><strong>+ Export default new Router():</strong> devuelve un objeto para crear nuestro router.</p>
              </ul>

            <ul className="nido">
                <li><p><strong>- mode:"history"</strong> para crear el history de html, para lograr la navegación URL sin recargar la página.</p></li>
                <li><p><strong>- router:</strong> vamos a crear un objeto de cada ruta y en cada objeto tendremos <strong>path, name, component</strong> path para darle la ruta path:'/' name para darle el nombre y component el nombr del componente importado <u className="subrayado"> para especificar la ruta de error pondremos en el path una estrella y le asociaremos el componente de error <strong>path:'*'',</strong></u>.</p></li>
              
            </ul>
            <p>Etiqueta <strong>router-link:</strong> es una propiedad de vue router que en cualquier template podemos generar como si fuese un a reactivo y sustituiremos href= por to="/".</p>
            <p>Etiqueta <strong>router-view:</strong> es una propiedad de vue router que funciona como layout, por ejemplo en nuestro componente layout vamos a agregar esta etiqueta en medio del header y del footer.</p>

            <p><strong>rutas dinamicas o con id:</strong> a la hora de crear el objeto de ruta dentro del array routes: el path llevara el valor dinamico -> <strong>path:'/ruta/:id'</strong> .</p>
            <ul >
                <li><p><strong>+ params:</strong> la propiedad params nos va a definir la parte dinamica del route y la agregamos en un :to bindeado de router-link "entre llaves".</p></li>
                <li><p><strong>+ this.$shet(object, propertyName, value):</strong> para evitar problemas de reactividad en tareas asincronas, por ejemplo en una peticion fetch si encapsulamos un a con un metodo del fetch va a fallar . vm.$set() es un alias del global Vue.set()</p></li>
            </ul>
            <br/>
            <hr></hr><br/>
          </div>

          <div className="col-12">
            
            <h2  className="bigtitle">Api con Vue.js</h2><br/>

            <p><strong>example:</strong> example.</p>

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
