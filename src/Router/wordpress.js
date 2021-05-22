import React from 'react';
import Modal from './Modal';

import BotonWordpress from "./botonwordpress";

class Wordpress extends React.Component{
  state = {
    openModal: false,
  };

  
  closeModal = () => {this.setState({openModal: false})}
  openModal = () => {this.setState({openModal: true})}




  render(){
  
    return (

      <React.Fragment>
        <div className="container">
          <h2  className="bigtitle font">Primeros pasos</h2><br/>
          <p><strong>SiteGround :</strong> .</p>
          <p><strong>Ajustes/Lectura/Disuadir a los motores de búsqueda de indexar este sitio :</strong> Activar esta casilla para <u className="subrayado"><strong>NO</strong> aparecer en los motores de búsqueda</u>, activarla mientras este en producción.</p>
          <p><strong>Yoast SEO/General - WebMaster Tools/Código de verificación de Google - Search Console de Google:</strong> Para <u className="subrayado">aparecer en el motor de búsqueda de google</u> mas rápido, lo que hace es aligerar el tiempo de hacer el enlace (antes de hacer esto hay que activar la casilla del punto anterior).</p>
          
          <br/>
            <button 
              className="buttonphp btn btn-dark" 
              onClick={this.openModal}
              >
                Wordpress general
            </button>
          <br/>
          <br/><hr></hr><br/>


          <h2  className="bigtitle font">Plugins</h2><br/>
          <br/>
          <p><u className="subrayado"><strong>Plugins con los que trabajar actualmente: </strong> </u> </p>
          <ul>
            <li><p><strong>WPS Hide Login: </strong>Para cambiar el nombre de la carpeta de admin aunque es recomendable cambiar el nombre de la carpeta wp-admin de public_html.</p></li>
            <li><p><strong>WP 2FA - Two-factor authentication for WordPress: </strong>Agregar el factor 2fa. </p></li>
            <li><p><strong>SiteOrigin CSS: </strong>Para generar CSS usando las mismas clases. </p></li>
            <li><p><strong>White label cms: </strong>Es el plugin que utilizamos para dar permisos y para editar el dashboard (la pagina principal del backoffice). </p></li>
            <li><p><strong>WP 2FA - Two-factor authentication for WordPress: </strong>Agregar el factor 2fa. </p></li>
            <li><p><strong>Salon Booking System: </strong>Plugin para pedir citas en Wordpress. </p></li>
            <li><p><strong>Elementor: </strong>Es el maquetador mas famoso en Wordpress. </p></li>
            <li><p><strong>SG Optimizer: </strong>para poder gestionar la configuración y mejorar la integración con el servicio SuperCacher de Siteground. </p></li>
            <li><p><strong>Siteground migration: </strong>Para hacer una migracion del proyecto y la base de datos con el Hosting de Siteground en un solo click. </p></li>
            <li><p><strong>Yoast-SEO: </strong>Es el plugin para dar SEO a nuestra pagina web. </p></li>
          </ul>
          <br/>
          <p><u className="subrayado"><strong>Plugins de WooCommerce: </strong> </u> </p>
          <ul>
            <li><p><strong>Woocommerce: </strong>Para implementar una tienda dentro de Wordpress.</p></li>
            <li><p><strong>WooLentor - WooCommerce Elementor Addons + Builder: </strong>Para agregar nuevas funciones de Woocommerce a Elementor PRO.</p></li>
            <li><p><strong>Yith Woocommerce catalog manager: </strong>Para crear un catálogo en woocommerce.</p></li>
          </ul>
          <br/>
          <p><u className="subrayado"><strong>Plugins de Get Engine: </strong> </u> </p>
          <ul>
            <li><p><strong>Get Engine: </strong>Es un maquetador para trabajar en paralelo con Elementor es decir va a dar mas opciones desde dentro del plugin de Elementor.</p></li>
          </ul>
          <br/>
          <p><u className="subrayado"><strong>Otros Plugins: </strong> </u> </p>
          <ul>
            <li><p><strong>Advanced acces manager: </strong>Otro plugin para dar permisos.</p></li>
            <li><p><strong>Page Restrict: </strong>Para restringir solo con usuarios registrados ciertas páginas.</p></li>
            <li><p><strong>Master Slider: </strong>Para crear un slider diferente.</p></li>
            <li><p><strong>Smart Slider: </strong>para meter un slider mas complejo con efectos de movimiento discontinuos etc.</p></li>
            <li><p><strong>Cookie notice & complance for GDPR/CCVA: </strong>Otro plugin para el aviso de Cookies.</p></li>
            <li><p><strong>Ninja Forms: </strong> Para crear formularios en Wordpress.</p></li>

          </ul>
          <br/>
          <hr></hr><br/>

          <h2  className="bigtitle">Paquetes de trabajo</h2><br/>
          <br/>
          <p><u className="subrayado"><strong>Paquete de trabajo con Elementor: </strong> </u> </p>
          <ul>
            <li><p><strong>Theme Elementor: </strong>Utilizar el tema de Elementor.</p></li>
            <li><p><strong>Elementor PRO: </strong>El maquetador Elementor PRO.</p></li>
          </ul>
          <br/>

          <p><u className="subrayado"><strong>Paquete de trabajo con Colibri: </strong> </u> </p>
          <ul>
            <li><p><strong>Theme de Colibri: </strong>Instalar el tema de Colibri.</p></li>
            <li><p><strong>Plugin Colibri Page Builder: </strong>Maquetador para el tema de Colibri (No influye con Elementor pero si hay anomalías desactivar colibri mientras se trabaja con Elementor).</p></li>
            <li><p><strong>Elementor: </strong>Maquetador para trabajar en las paginas individuales.</p></li>
          </ul>
          <br/>

          <p><u className="subrayado"><strong>Paquete de trabajo con Neve: </strong> </u> </p>
          <ul>
            <li><p><strong>Theme de Neve: </strong>Utilizar el tema de Neve.</p></li>
            <li><p><strong>Plugin Orbit Fox: </strong>Son un conjunto de plantillas a elegir con una interfaz mas destacada a la de un Wordpress habitual.</p></li>
            <li><p><strong>Elementor: </strong>Maquetador para trabajar en las paginas individuales.</p></li>
          </ul>
          <br/>

          <p><u className="subrayado"><strong>Paquete de trabajo con Blocksy: </strong> </u> </p>
          <ul>
            <li><p><strong>Theme Blocksy: </strong>El tema de Blocksy.</p></li>
            <li><p><strong>Blocksy Companion: </strong>cuando se este instalando conjuntamente elegir uno de los temas recomendado el 'Product Reviews'.</p></li>
          </ul>
          <br/>
          <br/>
          <hr></hr><br/>







          
        </div>

            <Modal
                isOpen={this.state.openModal}
                onClose={this.closeModal}
                title = 'W O R D P R E S S - G E N E R A L'
                >
                  <BotonWordpress/>
            </Modal>

      </React.Fragment>

    );
  }

}

export default Wordpress;
