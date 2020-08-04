import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import Profile from './components/Profile';


function App() {
  return (
    <>
      <Router>
        <div class="flexbox">
            <SideBar/>

            <div class="main">
            <NavBar/>


              <div class="ui container">

                  <Switch>
                    <Route path="/login">
                      <p>Login</p>
                    </Route>
                    <Route path="/projects" render={routerProps => <Projects {...routerProps}/>}/>
                    <Route>
                      <Profile/>
                    </Route>
                    <Route path="/">
                      <Profile/>
                    </Route>
                  </Switch> 
              </div>                                           
            </div>
        </div>
      </Router>
    </>
  );
}

export default App;
