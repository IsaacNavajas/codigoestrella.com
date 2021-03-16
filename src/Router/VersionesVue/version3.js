import React from 'react';

import Image1 from '../../source/codezen Vue_1.png';
import Image2 from '../../source/codezen Vue_2.png';
import Image3 from '../../source/codezen 20.png';

function Version3(){

    return (

      <React.Fragment>
        <div className="container col-12">
          <br/><br/>
          <p><strong>npm install -g @vue/cli:</strong> Es el CLI de vue, instalar globalmente el creador de proyectos de Vue.js. Para crear un proyecto nuevo <strong>vue create nombreapp</strong> y elegir la opción <strong>Vue 3</strong>. Para crear un servidor virtual <strong>npm run serve</strong>.</p>
          <br/><br/>

          <h2  className="bigtitle col-12">Diferencias entre Vue 2 y Vue 3</h2><br/>
          <br/><br/>
          <hr className="linea-discontinua" />

          <div  className="imagecarbon col-12">
 
            <div className=" col-6">
                <center>Vue.js 2</center>
                  <br></br>
                  <img src={Image1} className="imagecarbon"  title="imagen api externa"></img>
                  
                  
              </div>

            <div className=" col-6">
                <center>Vue.js 3</center>
                  <br></br>
                  <img src={Image2} className="imagecarbon"  title="imagen api interna"></img>
                  <center>Hay que importar los nuevos atributos de Vue.js 3</center>
                  <img src={Image3} className="imagecarbon"  title="imagen api interna"></img>
            </div>
          <br/>
          </div>

          
          <h2  className="bigtitle col-12">Atributos de Vue.js 3</h2><br/>


          <div className="col-lg-12">
          <center>En Vue.js 3, Composition API.</center>
          <hr className="linea-discontinua" />
          <p><strong>const app = createApp( ):</strong> es la nueva forma de inicializar el proyecto de Vue 3 es equivalente a newVue() de Vue 2.</p>
          <p><strong>app.component():</strong> es la forma de crear un componente en vue 3 es equivalente a export default directamente de Vue 2, Creamos un return al final del componente donde vamos a ir llamando a los métodos.</p>
        
          <p><strong>setup():</strong> La setup opción de nuevo componente se ejecuta antes de que se cree el componente, una vez que los props se resuelven, y sirve como punto de entrada para las API de composición, tiene dos argumentos. Es por esto que todo lo que este dentro de setup no hace falta englobarlo en el ciclo de vida de create o beforeCreated porque ya se esta ejecutando de esta manera. <strong>Es equivalente al data() de Vue.js 2 y dentro vamos a poder llamar tambien directamente a las funciones; codigoestrella().</strong></p>
          <ul>
              <li><p><strong>+ props:</strong> props va a hacer referencia a los props:[] en referencia. </p></li>
              <li><p><strong>+ context:</strong> context hace referencia a quien es this. ya que no podemos utilizar this. .</p></li>
          </ul>
          <p><strong>data():</strong> Todo lo que hay dentro de data() corresponde a un new Proxy(), es decir va a ser la parte reactive de Vue pendiente a los cambios de valores.</p>
          <p><strong>reactive():</strong> cuando queremos reagrupara valores reactivos en un solo estado. Para retornarlo hay que importar a toRefs() y en return( ...toRefs(nombre_del_método_reactive()) );</p>
          <ul>
              <li><p>+ Solo puede tomar objetos, no string, number, boolean... Usa reactive() cuando sea un objeto y no se quiera sobrecargar a ref(). </p></li>
              <li><p>+ no la tiene una .value y por lo tanto NO PUEDE ser reasignada.</p></li>
          </ul>
          <p><strong>ref():</strong> coge un valor y devuelve un objeto reactivo, se usa cuando estamos trabajando fuera de data() pero seguimos queriendo un valor reactivo, ref() va a guardar el value del código y si hay cambiaos los va a mutar, después de definir un ref() tenemos que definirnos en el return. const active = ref(0)  ---> nos va a dar un valor cero que va a ir cambiando. Si queremos devolver varios valores lo englosaremos dentro de un objeto, un array...</p>
          <ul>
              <li><p>+ toma tanto objetos como valores primitivos. </p></li>
              <li><p>+ tiene una propiedad .value.</p></li>
          </ul>

          <p><strong>computed():</strong> cuando queremos una propiedad computada, podemos definir esta propiedad dentro de propiedades como setup, reactive... Ej ---> const price = computed(() => ...) dentro de setup(). Necesitamos importarlo</p>


          <p><strong>@keyup.enter="apply($event)":</strong> se pasa como parámetro por ejemplo de un input y referencia que quieres hacer al pulsar la tecla enter.</p>

          <p><strong>emits[""]:</strong> para definir props de un hijo a un padre. para definir el evento de la función del padre se puede usar this.$emit().</p>
          
          
          
          </div>






          <p>beforeCreate: Apenas se está iniciando nuestro componente. corresponde al setup() todo lo que contenga el setup() ya se esta almacenando aquí.
          created: Ya está disponible toda la información reactiva del componente. corresponde al setup() todo lo que contenga el setup() ya se esta almacenando aquí, por lo que si inicializamos un <strong>fetch()</strong> en setup() es como si lo hiciéramos en created() o beforecreated().
          Validaciones para decidir cómo renderizar aplicaciones en el DOM
          beforeMount: Antes de que la aplicación sea montada en el documento
          mounted: La aplicación ya está montada en el documento
          beforUpdate: Ya que el componente está montado, cuando algo cambia, ANTES de que dicho valor sea actualizado se ejecutará este ciclo de vida.
          updated: Ya que el componente está montado, cuando algo cambia, DESPUÉS de que dicho valor sea actualizado se ejecutará este ciclo de vida.
          beforeUnmount: Antes de que el componente sea destruido
          unmounted: Después de que el componente fue destruido</p>
                  
                  </div>

        
      </React.Fragment>

    );
       

}

export default Version3;
