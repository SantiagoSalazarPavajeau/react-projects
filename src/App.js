import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import Profile from './components/Profile';


function App() {
  return (
    <div>
        <div class="ui segment pushable">
          <SideBar/>

          <div class="pusher">
            <NavBar/>



            <div class="ui basic segment">
              <Projects/> 
              <Profile/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
