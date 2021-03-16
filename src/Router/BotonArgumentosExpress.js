import React from 'react';
import Modal from './Modal';


import { Link } from "react-router-dom";

class botonApiLumen extends React.Component{

  state={
    openModal: false,
    Methods:false,
    Application:false,
    Request: false,
    Response:false,
    Router:false,
  };

  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){

    return (

      <React.Fragment>
                  <button 
                      className="buttonphp btn btn-dark" 
                      onClick={this.openModal}
                    >
                     Argumentos de Express.js
                  </button>



                  <Modal
                      isOpen={this.state.openModal}
                      onClose={this.closeModal}
                      title = 'A r g u m e n t o s - d e - E x p r e s s . j s '
                      >
                          <div className="container">

                            <ul className="col-12">
                              <li>
                                <a 
                                  onClick={() => {this.state.Methods == true ? this.setState({ Methods:false }) : this.setState({ Methods:true })}} 
                                  className={this.state.Methods == true ? "Link-Express-red" : "Link-Express" }>- Methods
                                </a></li>

                                {this.state.Methods && 
                                  <ul className="nido">
                                   <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_funcion_padre), con <strong>this.$emit( "funcion", "parametro_de_la_funcion_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplegamos el componente hijo le pasamos como parámetro <strong>v-on:nombre_del_hijo_de_la_funcion_padre = "nombre_de_la_funcion_del_componente_padre" </strong> .</p></li>
                                   <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injector contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para desplegarlo englosaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
                                 
                                  </ul>
                                }

                              <li>
                                <a 
                                  onClick={() => {this.state.Application == true ? this.setState({ Application:false }) : this.setState({ Application:true })}} 
                                  className={this.state.Application == true ? "Link-Express-red" : "Link-Express" }>- Application
                                </a></li>

                                {this.state.Application && 
                                  <ul className="nido">
                                    <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_funcion_padre), con <strong>this.$emit( "funcion", "parametro_de_la_funcion_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplegamos el componente hijo le pasamos como parámetro <strong>v-on:nombre_del_hijo_de_la_funcion_padre = "nombre_de_la_funcion_del_componente_padre" </strong> .</p></li>
                                    <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para despegarlo englobáremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
                                
                                  </ul>
                                }

                              <li>
                                <a 
                                  onClick={() => {this.state.Request == true ? this.setState({ Request:false }) : this.setState({ Request:true })}} 
                                  className={this.state.Request == true ? "Link-Express-red" : "Link-Express" }>- Request
                                </a></li>

                                {this.state.Request &&
                                  <ul className="nido">
                                    <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_funcion_padre), con <strong>this.$emit( "funcion", "parametro_de_la_funcion_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplegamos el componente hijo le pasamos como parámetro <strong>v-on:nombre_del_hijo_de_la_funcion_padre = "nombre_de_la_funcion_del_componente_padre" </strong> .</p></li>
                                    <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para desplegarlo englobaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
                                
                                  </ul>
                                  }

                              <li>
                                <a 
                                  onClick={() => {this.state.Response == true ? this.setState({ Response:false }) : this.setState({ Response:true })}} 
                                  className={this.state.Response == true ? "Link-Express-red" : "Link-Express" }>- Response
                                </a></li>

                                {this.state.Response && 
                                  <ul className="nido">
                                    <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_funcion_padre), con <strong>this.$emit( "funcion", "parametro_de_la_funcion_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplgamos el componente hijo le pasamos como parametro <strong>v-on:nombre_del_hijo_de_la_funcion_padre = "nombre_de_la_funcion_del_componente_padre" </strong> .</p></li>
                                    <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para desplegarlo englobaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
                                
                                  </ul>
                                }

                              <li>
                                <a
                                  onClick={() => {this.state.Router == true ? this.setState({ Router:false }) : this.setState({ Router:true })}} 
                                  className={this.state.Router == true ? "Link-Express-red" : "Link-Express" }>- Router
                                </a></li>

                                {this.state.Router && 
                                  <ul className="nido">
                                    <li><p><strong>- del componente hijo al componente padre:</strong> la comunicación de padres a hijos es a traves de eventos, dentro del componente hijo con un this.$emit(nombre_del_hijo_de_la_funcion_padre), con <strong>this.$emit( "funcion", "parametro_de_la_funcion_por_defecto")</strong> enviamos un evento para avisar al componente padre. En el componente padre donde desplgamos el componente hijo le pasamos como parametro <strong>v-on:nombre_del_hijo_de_la_funcion_padre = "nombre_de_la_funcion_del_componente_padre" </strong> .</p></li>
                                    <li><p><u className="subrayado"><strong>- slots:</strong> nos va a permitir <strong>injectar contenido desde el componente padre al componente hijo</strong> en vez de propiedades como hasta ahora, por ejemplo html para esto usaremos los slots,</u> para desplegarlo englosaremos entre llaves con la palabra reservada slot como si fuese una etiqueta dentro del template, y para generar el contenido del texto lo pasaremos directamente entre un p directamente al componente. Para definir vario slots en la parte del template generaremos un nombre slot name="text" y en la parte del componente del html tenemos que agregar otra etiqueta entre llaves al que llamaremos template v-slot:"text" dentro el contenido y cerramos el <strong>template</strong>. </p></li>
                                
                                  </ul>
                                }
                            </ul>


                          </div>


                  </Modal>

      </React.Fragment>

    );



  }


}

export default botonApiLumen;
