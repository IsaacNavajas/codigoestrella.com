import React from 'react';

import '../styles.css';
import image from '../source/image 1.png';

import {Link} from "react-router-dom";

 

class Navbar extends React.Component{


  render(){

    //window.addEventListener("scroll", function(){
    //  var body= document.querySelector("body");
     // body.classList.toggle("sticky", window.scrollY > 0);
    //})

    //$(window).scroll(function() {        
      //var scroll = $(window).scrollTop();    
      //if (scroll >= 262) {
      //   $(".menu").addClass("menu-fixed"); 

      //}else{
      //   $(".menu").removeClass("menu-fixed");
      //}
  //});
    

    return (
      <React.Fragment>


     
          <div className="imag col-12 container-fluid">

            <div className="position col-7">
     

                  <h1 className="title-codigoestrella col-12">Codigoestrella.com</h1>

           

       
                  <div className="position_button col-12">
                    <Link to="/javascript"><button type="submit" className="button btn btn-secondary" >Javascript</button></Link>
                  </div>
             
            </div>
  
              <img src={image} className="imagen col-5" alt="k2"></img>

          </div>

          

        <nav className="menu col-12">
            <ul>
              <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/wordpress">WORDPRESS</Link></li>
              <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/htmlycss">HTML & CSS</Link></li>
              <li className=" col-2"><Link className="menubuttons btn btn-dark laravel" to="/laravel">LARAVEL</Link></li>
              <li className=" col-2"><Link className="menubuttons btn btn-dark react" to="/react">REACT</Link></li>
              <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/git">GIT</Link></li>
              <li className=" col-2"><Link className="menubuttons btn btn-dark" to="/mysql">MYSQL</Link></li>
            </ul>
            
        </nav>
     


        




      </React.Fragment>
    );
    
  }



}

export default Navbar;
