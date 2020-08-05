import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import Profile from './components/Profile';
import TasksModal from './components/tasks/TasksModal';



function App() {
  return (
    <>
      <Router>
        <div className="flexbox">
            <SideBar/>

            <div className="main">
            <NavBar/>


              <div className="ui container">

                  {/* <Switch> */}
                    <Route exact path="/" render={()=> <Profile/>}>
                    </Route>
                    <Route exact path="/login">
                      <p>Login</p>
                    </Route>

                    <Route exact path="/projects" render={routerProps => <Projects {...routerProps}/>}/> 
                    {/* I sent router props to have acces to match */}

                    <Route exact path={`/projects/:id`} >
                      <TasksModal/>
                      <p>Welcome</p>
                    </Route>
                    
                  {/* </Switch>  */}
              </div>                                            
            </div>
         </div> 
      </Router>
    </>
  );
}

export default App;
