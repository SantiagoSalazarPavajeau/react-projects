import React from 'react'
import { Container, Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import '../App.css';
import logo from '../logo.svg';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Content from './Content';


const Layout = () => (
    <>
      <div class="ui segment pushable">
      <SideBar/>

        <div class="pusher">
        <NavBar/>



          <div class="ui basic segment">
              <Content/> 
          </div>
        </div>
      </div>
    </>
)

export default Layout;