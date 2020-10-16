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


function Router() {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
          
            <Route exact path="/" component={Inicio}/>
            <Route exact path="/git" component={Git}/>
            <Route exact path="/javascript" component={Javascript}/>
            <Route exact path="/react" component={Pagereact}/>
            <Route exact path="/laravel" component={Laravel}/>
            <Route exact path="/htmlycss" component={htmlyCss}/>
            <Route exact path="/mysql" component={Mysql}/>
            <Route exact path="/jquery" component={JQuery}/>
            <Route exact path="/json" component={Json}/>
            <Route exact path="/react-router" component={Reactrouter}/>
            <Route exact path="/wordpress" component={Wordpress}/>
            
            
            <Route path="/" component={Error}/>
  
          </Switch>
        </Layout>
   
   
    </BrowserRouter>
  );
}

export default Router;
