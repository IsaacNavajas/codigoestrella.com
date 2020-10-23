import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './Router/Layout';
import Error from './Router/load/Error';
import Git from './Router/Git';
import Javascript from './Router/Javascript';
import Inicio from './Router/Inicio';
import Pagereact from './Router/React';
import Laravel from './Router/Laravel';
import htmlyCss from './Router/htmlyCss';
import Mysql from './Router/Mysql';
import JQuery from './Router/JQuery';
import Json from './Router/Json';
import Wordpress from './Router/wordpress';
import Reactrouter from './Router/Reactrouter';
import BuildEnglish from './Router/English/buildEnglish';


class Router extends React.Component {
  
  state={
    verifyLanguage: true,
    count: 0,
    language: 'Spanish'
  }

  render(){
    console.log(this.state.count)
    console.log(this.state.language)
    console.log(this.state.verifyLanguage)

    this.handleClick = () => {

      this.setState(state => ({
        count : state.count +1,
        
      }));



      if(this.state.count === 0){
        this.setState(() => ({
          language : 'English',
          verifyLanguage : false
        }));
        }
      
      else if(this.state.count % 2){
        this.setState(() => ({
          language : 'Spanish',
          verifyLanguage : true
        }));
      }

      else if(this.state.count ** 1){
        this.setState(() => ({
          language : 'English',
          verifyLanguage : false
        }));
      }

    }
  
    return (
      <React.Fragment>

            <BrowserRouter>
                <Layout verifyLanguage = {this.state.verifyLanguage}  >

                  <React.Fragment>
                    <div className="col-12 ">
                      <div className="col-7">
                        <div className=" toggle custom-control custom-switch  ">
                          <input onClick={this.handleClick} type="checkbox" class=" checkboxtoggle custom-control-input " id="customSwitches"></input>
                          <label class="custom-control-label " for="customSwitches"> <img className=" America" src="https://i.postimg.cc/s2Xz8CmJ/40ab7a26c90ee682a23e2dd55f978a65.jpg"></img></label>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>

                    <Switch>
                      <Route exact path="/" component={Inicio}/>
                      
                      {this.state.verifyLanguage && <Route exact path="/git" component={Git}/> || <Route exact path="/git" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/javascript" component={Javascript}/> || <Route exact path="/javascript" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/react" component={Pagereact}/> || <Route exact path="/react" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/laravel" component={Laravel}/> || <Route exact path="/laravel" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/htmlycss" component={htmlyCss}/> || <Route exact path="/htmlycss" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/mysql" component={Mysql}/> || <Route exact path="/mysql" component={BuildEnglish}/>}
                      
                      {this.state.verifyLanguage && <Route exact path="/jquery" component={JQuery}/> || <Route exact path="/jquery" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/json" component={Json}/> || <Route exact path="/json" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/react-router" component={Reactrouter}/> || <Route path="/react-router" component={BuildEnglish}/>}

                      {this.state.verifyLanguage && <Route exact path="/wordpress" component={Wordpress}/> || <Route exact path="/wordpress" component={BuildEnglish}/>}

                      
                      
                      <Route path="*" component={Error}/>
            
                    </Switch>

                </Layout>
          
            </BrowserRouter>

      </React.Fragment>
    );
  }
  
}

export default Router;
