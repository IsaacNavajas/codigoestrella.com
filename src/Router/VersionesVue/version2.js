import React from 'react';

import image1 from '../../source/codezenPxAssetsTableVue.png';
import image2 from '../../source/codezenHomeJs.png';
import image3 from '../../source/codezenApiJs.png';

import image4 from '../../source/codezenVueProps1.png';
import image5 from '../../source/codezenVueProps2.png';
import image6 from '../../source/codezenVueProps3.png';
import image7 from '../../source/codezenVueProps4.png';


function Version2(){

    return (

      <React.Fragment>
        <div className="container col-12">
        <br/><br/>
        <p ><strong>script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js":</strong> CDN para instalar Vue.js.</p>
          <p><strong>npm install vue:</strong> Instalar Vue.js mediante npm.</p>
          <p><strong>npm install -g @vue/cli:</strong> Es el CLI de vue, instalar globalmente el creador de proyectos de Vue.js. Para crear un proyecto nuevo <strong>vue create nombreapp</strong> . Para crear un servidor virtual <strong>npm run serve</strong>.</p>
          <p><strong>La extension recomendada para VS Code es Vetur y las Vue.js devtools para el navegador.</strong></p>
          <p><strong>vue ui:</strong> crea una interfaz gráfica con todo lo instalado es nuestro proyecto.</p>
          <p><strong>vue add:</strong> agregar pluyins a vue.js.</p>
          <p><strong>vue add electron-builder:</strong> para cargar Electron dentro del trabajo para mas información aquí. Primero instalar electron-builder npm i vue-cli-plugin-electron-builder despues instalar electron-builder en el proyecto vue add electron-builder después instalar el proyecto, npm run electron:build para instalar en el ordenador. Para cambiar el icono del programa y del instalador creamos una carpeta en la raiz del proyecto build/icons/icon.ico y el icono "icon.ico" para windows y una imagen de 256 "256x256.png" para linux.</p>

          <u className="subrayado">
            <p><strong>npm run lint:</strong> Detectar errores de linteo. Un linter revisa tu código buscando errores y problemas de sintaxis, se asegura también que el código que escribes siga un estilo.</p>
          </u>
          
          <p><strong>npm run build:</strong> Generar la aplicación en modo producción. Genera una carpeta dist.</p>
          <p><strong>npm i -g serve:</strong> Permite generar un servidor web local.</p>
          <p><strong>serve -s dist:</strong> Levanta un localhost de nuestro Dist.</p>

          <p><strong>npm i-S vue-router:</strong> para instalar vue router en nuestro proyecto.</p>

          <br/>
          <hr></hr><br/>
          <h2  className="bigtitle col-12">Atributos de Vue.js</h2><br/>

          <div className="col-lg-6 col-sm-12 mitad">
            <center>En Html (y directivas)</center>
            <hr className="linea-discontinua" />
          <p><strong>"condicional" ? "Opción True" : "Opción False"</strong> es el <u class="subrayado">operador ternario</u> y se utiliza entre doble corcheas para meter condicionales como valores.</p>
          <p><strong>v-bind:</strong> v-bind:src="", v-bind:alt="name"... v-bind: sirve para bindear desde el html los valores de data() de dentro de new Vue. data() return name: 'Bitcoin'. Si queremos bindear un valor directamente lo englobaremos dentro de 'doble corcheas'. v-bind también se puede sustituir directamente por dos puntos <strong>:</strong> como por ejemplo :src="".</p>
          <p><strong>v-if=""</strong> para bindear una condicional, los valores los cogerá desde data().</p>
          <ul>
            <li><p><strong>+ v-else=""</strong> acción de vuelta para cuando no se cumple un condicional.</p></li>
            <li><p><strong>+ v-else-if=""</strong> para agregar mas de un condicional.</p></li>
          </ul>

          <p><strong>v-show:</strong> sirve para bindear, igual que v-bind, <u>pero vamos a utilizar v-show cuando queramos interactuar con código reactivo en vez de v-if o v-bind...</u></p>
          <p><strong>v-for="v in value" v-bind:key="v.key":</strong> un foreach para llamar a los elementos de un array, value es el array que renderizamos y bindeamos un key para distinguir cada valor. Para definir llave / valor, entre doble corcheas le damos el nombre de la llave o valor = value.key o value.value</p>
          <p><strong>v-on: :</strong> podemos sustituir el v-on: por @. @:click="".</p>
          <p><strong>v-on:click="function":</strong> para dar lógica cuando pulsemos click, la lógica se agregara en una function de vue en methods.</p>
          <p><strong>v-on:moseover="function":</strong> para dar lógica cuando dejamos el ratón en hover del componente.</p>
          <p><strong>v-on:moseout="function":</strong> para dar lógica cuando dejamos el ratón fuera del componente.</p>
          <p><strong>v-bind:Class:"change = 5 ? 'blue' : 'red' ":</strong> si la condición del operador ternario se cumple activara la clase blue de css sino se cumple activara la clase red.</p>
          <p><strong>v-bind:style=" background : 'color' "</strong> para agregar estilos css directamente.</p>
         
          <br/><hr></hr><br/>

          <p><strong>v-model=" value "</strong> es una de las técnicas de Two-Way Data Binding, el valor value sera definido en data() de vue.js y lo que nos permite es si lo declaramos por ejemplo en un input que nos muestre a tiempo real el los cambios del valor de ese input.</p>
         
          <p><strong>v-slot=" text "</strong> definir el tipo de slot donde queremos guardar el contenido, este ira dentro de una etiqueta llamada template.</p>
          
          </div>

          <div className="col-lg-6 col-sm-12 mitad">
          <center>En Vue.js</center>
          <hr className="linea-discontinua" />
          <p><strong>export default:</strong> para exportar el componente para poder ser importada.</p>
          
          <ul>
            <li><p><strong>+ name: "nombre_del_componente",:</strong> para darle el nombre al componente (es opcional).</p></li>
          </ul>

          <p><strong>new Vue():</strong> es la función constructora que se usa para instanciar una aplicación de Vue.js.</p>
          <ul>
            <li><p><strong>+ el:</strong> para concatenar el id o class del html, '#app'.</p></li>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores, podemos definir un valor que vamos a llamarlo en el html entre doble llave. Es semejante al state de React para persistir el valor.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones, si queremos accedes a valores de data lo aremos a traves de la keyword this. Para soltar sus funciones se hace como argumento dentro de la etiqueta del componente.</p></li>
          
            <li><p>+ Properties <strong>computed y watchers:</strong> Les podemos dar a estas funciones el nombre que prefiramos, <ul className="subrayado">La diferencia con <strong>methods</strong> y <strong>computed</strong> es que las propiedades computadas tienen caché es decir que van a ser definidas cuando queremos que cambien su valor, las propiedades computadas tampoco tienen parametros ni pueden ser llamadas por que se despliegan como instancias y no como metodos.</ul></p></li>
            <ul className="nido">
              <li><p><strong>- computed:</strong> son funciones que siempre devuelven un valor, podemos agregar un nuevo objeto dentro de la propiedad de data(). Se pasa entre doble llave como valor de la etiqueta HTML </p></li>
              <li><p><strong>- watchers:</strong> en vez de ser funciones que devuelven un valor estas ejecutan un código. Se define como watch:. El nombre de la función de dentro de watch tiene que ser un método de dentro de data(). Se UTILIZA para modificar o dar lógica a métodos de dentro de data(), podemos usar dos parametros dentro de estas funciones para coger el valor nuevo y el anterior function (val, oldval).  </p></li>
            </ul>

          </ul>
          <p><strong>Vue.component('nombre_del_componente', ... ):</strong> para crear un contenedor nuevo o componente hijo y darle un nombre, para llamar este componente al html lo bindearemos entre llaves como un componente.</p>
          <ul>
            <li><p><strong>+ data():</strong> vamos a retornnar todos los valores del componente.</p></li>
            <li><p><strong>+ template:</strong> para pasar el html como string invertido, todos el template ira dentro de un mismo div.</p></li>
            <li><p><strong>+ methods:</strong> para definir funciones del componente nuevo. Las funciones se definen como referencia del parámetro dentro de la etiqueta del HTML.</p></li>
            <li><p><strong>+ props:[] :</strong> cuales son las propiedades que se pueden enviar <strong>del componente padre al componente hijo</strong> simplemente definiendolo dentro del array. Para finalizar hay que bindear los props en el componente de html, b-vind:title="title" El primer valor es el del array y el que devuelve es el del componente padre. S tenemos muchos props que devolver podemos concatenar todos esos valores en el data() como un solo objeto del componente padre y devolverlo como un unico valor en el array.</p></li>
            <ul className="nido">
                <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_función_padre), con <strong>this.$emit( "función", "parámetro_de_la_función_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplegamos el componente hijo le pasamos como parámetro <strong>v-on:nombre_del_hijo_de_la_función_padre = "nombre_de_la_función_del_componente_padre" </strong> .</p></li>
                <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para despegarlo englobaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
              
              </ul>
          </ul>
          </div>


          
          
          <br/>
          
          <div className="col-12">
          <hr></hr><br/>
            <h2  className="bigtitle">Proyecto con Vue.js</h2><br/>

            
            <p>Etiqueta <strong>template:</strong> es donde englobaremos la parte del html que ira siempre dentro de una misma etiqueta como un div, un header...</p>
            <p>Etiqueta <strong>Style scoped</strong>: Para crear estilos que unicamente tengan un alcance unicamente para el template del componente al que estamos trabajando. </p>
            
            <p><strong>script:</strong> dentro del script meteremos los <strong>import</strong> y el export default. Al crear el import Vue nos da un atajo que es la letra reservada @ que nos lleva directamente al src <u className="subrayado">import Example from <strong>"@/Example.png"</strong></u></p>
            <p><strong>export default:</strong> es donde englosaremos nuestro componente, dentro de este con la etiqueta <strong>name:""</strong> le daremos el nombre de nuestro componente.</p>
            <ul>
              <li><p><strong>+ name:"":</strong> para darle el nombre del componente.</p></li>
              <li><p><strong>+ components:</strong> devuelve un objeto y aquí vamos a definir los componentes que queremos usar dentro de este template en forma de etiqueta que habremos importado.</p></li>
              <li><p><strong>+ props:</strong> nos devuelve un objeto, .</p></li>
              <ul className="nido">
              <li><p><u className="subrayado">-  dentro del <strong>nombre del prop que has pasado:</strong> podemos definir el tipo de props que esperamos dentro de otro objeto.</u></p></li>
              <li><p><strong>- Type:</strong> el tipado esperado, como array, string...</p></li>
              <li><p><strong>- default:</strong> el valor por defecto que esperamos, si esperamos un objeto o un array lo devolvemos en forma de función. -default: () =&gt; [].</p></li>
            </ul>
            </ul>
            
            
            <br/>
            <hr></hr><br/>
          </div>


          <div className="col-12">
   
            <h2  className="bigtitle">Pertenecientes a Vue.js</h2><br/>

            <p><strong>this.$emit():</strong> Va a ejecutar el código que este dentro del paréntesis cada vez que se ejecute la función de donde permanece, si le pasamos una función el segundo parámetro va a ser su parámetro, this.$emit('función', 'argumento').</p>
            <p><strong>.$mount():</strong> se pone después de cerrar el paréntesis de new vue().$mount("#app") y tiene la misma acción que el: de dentro de new vue().</p>
            <p><strong>NuevoComponente:</strong> a la ahora de lanzar un componete si lo hemos separado por mayúsculas tenemos que deplegarlo usando un slug <strong>nuevo-componente</strong>.</p>
            <p><strong>this.$route.params:</strong> significa de esa ruta el parámetro que queramos señalar. this.$route.params.id .</p>
            <p><strong>this.$router:</strong> this.$router no es igual this.$route. Este nos permite acceder a distancia del routery poder navegar a traves de código como this.$router.push() .</p>
            <p><strong>template:</strong> se puede utilizar la etiqueta template dentro de otra etiqueta template para dejar en invisible una etiqueta html (funciona como react.component) .</p>
            <p><strong>this.$set(object, propertyName, value):</strong> para evitar problemas de reactividad en tareas asíncronas, por ejemplo en una petición fetch si encapsulamos un a con un método del fetch va a fallar . vm.$set() es un alias del global Vue.set()</p>
            <p><strong>Vue.filter()</strong> define un filtro que transforma el valor antes de que se vuelva a escribir en el modelo desde la vista .</p>
         
            <br/>
            <hr></hr><br/>
          </div>


          <div className="col-12">
            
            <h2  className="bigtitle">Enviar propiedades de un <strong>componente padre al hijo</strong> (props) "a traves de propiedades"</h2><br/>

              <div className=" col-6"> 
                <center><p>componente Hijo</p></center>  
                <img src={image4} className="imagecarbon" alt="Componente hijo"></img>
              </div>

              <div className=" col-6"> 
                <center><p>componente Padre</p></center> 
                <img src={image5} className="imagecarbon" alt="Componente padre"></img>
              </div>
              
            <br/>
            
          </div>

          <div className="col-12">
            
            <h2  className="bigtitle">Enviar propiedades de un <strong>componente hijo al padre</strong> "a traves de eventos"</h2><br/>

            <div className=" col-6"> 
                <center><p>componente Hijo</p></center>  
                <img src={image7} className="imagecarbon" alt="Componente hijo"></img>
              </div>

              <div className=" col-6"> 
                <center><p>componente Padre</p></center> 
                <img src={image6} className="imagecarbon" alt="Componente padre"></img>
              </div>
              
            <p><strong>this.$emit():</strong> el primer valor es la función que vamos a pasar del v-on:"función" del componente padre al desplegar el hijo en este caso (click) (v-on:click) pero podemos darle cualquier otro nombre y el segundo es el valor que queremos enviar que se pasa al componente padre como parametro de la funcion "en este casso info", por eso tenemos que volver a llamar a la funcion en el componente padre y crear un v-on: en el componente hijo de llamada .</p>

            <br/>
            <hr></hr><br/>
            <br/>
            
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
            
            <h2  className="bigtitle">Vue Router.js</h2><br/>

            <p><strong>npm i-S vue-router:</strong> para instalar vue router en nuestro proyecto.</p>
            <p><strong>Router.js:</strong> vamos a crear un archivo roter.js para crear nuestro vue router, vamos a importar nuestro componentes. En nuestro archivo principal del proyecto, el main.js importamos nuestro router con import router from "@/router" y <strong>dentro de new Vue() definimos nuestro router con <u className="subrayado">router : "nombre_del_componente_que_hemos_importado",</u></strong> .</p>
              
              <ul className="nido">
                  <p><strong>+ Vue.use(VueRouter):</strong> lo escribimos después de los imports de los componentes para poder utilizar el Router. Para utilizar Vue tenemos que impportarlo <strong>import Vue from "vue"; import VueRouter from 'vue-router'</strong> .</p>
                  <p><strong>+ const router = new VueRouter():</strong> devuelve un objeto para crear nuestro router. necesitamos exportarlo <strong>export default router</strong></p>
              </ul>

            <ul className="nido">
                <li><p><strong>- mode:"history"</strong> para crear el history de html, para lograr la navegación URL sin recargar la página.</p></li>
                <li><p><strong>- router:</strong> vamos a crear un array y un objeto de cada ruta y en cada objeto tendremos <strong>path, name, component</strong> path para darle la ruta path:'/' name para darle el nombre y component el nombr del componente importado <u className="subrayado"> para especificar la ruta de error pondremos en el path una estrella y le asociaremos el componente de error <strong>path:'*'',</strong></u>.</p></li>
              
            </ul>
            <p>Etiqueta <strong>router-link:</strong> es una propiedad de vue router que en cualquier template podemos generar como si fuese un a reactivo y sustituiremos href= por to="/".</p>
            <p>Etiqueta <strong>router-view:</strong> es una propiedad de vue router que funciona como layout, por ejemplo en nuestro componente layout vamos a agregar esta etiqueta en medio del header y del footer.</p>

            <p><strong>rutas dinámicas o con id:</strong> a la hora de crear el objeto de ruta dentro del array routes: el path llevara el valor dinamico -&gt; <strong>path:'/ruta/:id'</strong> .</p>
            <ul >
                <li><p><strong>+ params:</strong> la propiedad params nos va a definir la parte dinámica del route que pertenece al path del componente router y a quien hace referencia. La agregamos en un :to bindeado de router-link "entre llaves".<strong> router-link :to" "abrimos llaves" name:"name_del_componente_router", params:"id: f.id" "cerramos llaves" " </strong>.</p></li>
                <li><p><strong>+ this.$shet(object, propertyName, value):</strong> para evitar problemas de reactividad en tareas asíncronas, por ejemplo en una petición fetch si encapsulamos un a con un método del fetch va a fallar . vm.$set() es un alias del global Vue.set()</p></li>
            </ul>
            <br/>
            <hr></hr><br/>
          </div>

          <div className="col-12">
            
            <h2  className="bigtitle">Api con Vue.js</h2><br/>
           

            <div  className="imagecarbon col-12">

              <div className=" col-6">
                <center><p>tercero - PxAssetsTable.vue</p></center>  
                <img src={image1} className="imagecarbon" alt="Imagen 1"></img>
              </div>

              <div className=" col-6">
                <center><p>segundo - Home.js</p></center>  
                <img src={image2} className="imagecarbon" alt="Imagen 2"></img>
              </div>

              <div className=" col-6">
                <center><p>primero - api.js</p></center>  
                <img src={image3} className="imagecarbon" alt="Imagen 3"></img>
              </div>
          
            <br/>
            </div>

            <br/>
            <hr></hr><br/>
          </div>

          <br/>
          <br/>
          
        </div>

        
      </React.Fragment>

    );
       

}

export default Version2;
