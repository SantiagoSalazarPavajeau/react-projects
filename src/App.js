import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import Profile from './components/Profile';


function App() {
  return (
    <div>
        <div class="ui segment pushable">
          <Router>

            <SideBar/>

            <div class="pusher">
              <NavBar/>



              <div class="ui basic segment">
                  <Switch>
                    <Route path="/login">
                      <p>Login</p>
                    </Route>
                    <Route path="/projects">
                      <Projects/>
                    </Route>
                    <Route>
                      <Profile/>
                    </Route>
                  </Switch>
                
                
                
              </div>
            </div>
            </Router>
        </div>
    </div>
  );
}

export default App;
