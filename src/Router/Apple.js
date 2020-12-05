import React from 'react';
import imagelogo from '../source/otroapple.png';



class Apple extends React.Component{
  state={
    temporizador: 0,
    desaparecer : false
  }

  
  componentDidMount = () => {
    this.primertemporizador = setTimeout(()=>{  this.setState({temporizador:1}) }, 1000);
    this.segundotemporizador = setTimeout(()=>{  this.setState({temporizador:2}) }, 1200);
    this.tercertemporizador = setTimeout(()=>{  this.setState({temporizador:3}) }, 3000);
    this.cuartotemporizador = setTimeout(()=>{  this.setState({temporizador:4}) }, 3090);
    this.quintotemporizador = setTimeout(()=>{  this.setState({temporizador:5, desaparecer:true}) }, 4000);
  }


  componentWillUnmount= () => {
    clearTimeout( this.primertemporizador );
    clearTimeout( this.segundotemporizador );
    clearTimeout( this.tercertemporizador );
    clearTimeout( this.cuartotemporizador );
    clearTimeout( this.quintotemporizador );
 }
      
  render(){

    return (
    <React.Fragment>
      <div className="apple">
      <div className="container">
    
      {this.state.desaparecer == true & this.props.lenguaje == "Spanish" && 
        <div>
          <br/> 
          <p className="aparecer">Pagina de apple en construccion.</p>
        </div>
        ||
        <div className="desaparecer"></div>
      }

      {this.state.desaparecer == true & this.props.lenguaje == "English" && 
        <div>
          <br/> 
          <p className="aparecer">Apple page under construction.</p>
        </div>
          ||
          <div className="desaparecer"></div>
      }

        <center>
          {this.state.desaparecer == false && <img src={imagelogo} className="logoapple" alt="imagen robot"/>}
          {this.state.desaparecer == true && <img src={imagelogo} className=" desaparecerimagen" />}
          
          {this.state.desaparecer == false &&
          <div id="lineagris" className="lineagris" >
          {this.state.temporizador == 0 && <div className="lineablanca-primera"></div>}
          {this.state.temporizador == 1 && <div className="lineablanca-segunda"></div>}
          {this.state.temporizador == 2 && <div className="lineablanca-tercera"></div>}
          {this.state.temporizador == 3 && <div className="lineablanca-cuarta"></div>}
          {this.state.temporizador == 4 && <div className="lineablanca-quinta"></div>}
          {this.state.temporizador == 5 && <div className="lineablanca-sexta"></div>}
        </div>
          ||
          this.state.desaparecer == true && <div id="lineagris" className="lineagrisdesaparecer"></div>}
          
        </center>

        
        

        <br/>
        <br/>
      </div>
      </div>
      
    </React.Fragment>

  );

}
    
}

export default Apple;
