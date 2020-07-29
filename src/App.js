import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Content from './components/Content';


function App() {
  return (
    <div>
        <div class="ui segment pushable">
          <SideBar/>

          <div class="pusher">
            <NavBar/>



            <div class="ui basic segment">
              <Content/> 
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
