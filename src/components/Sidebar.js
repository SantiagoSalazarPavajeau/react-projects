import React from 'react'
import { Container, Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import '../App.css';
import logo from '../logo.svg';


const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='scale down'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item> 
     
    </Sidebar>

    <Sidebar.Pusher>
        <Button> Login </Button>
        <Button> Sign up </Button>
        <Button> Add project </Button>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Projects</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
        <Header as='h2' icon textAlign='center'>
      <Icon name='settings' circular />
      <Header.Content>Tasks</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
        <Header as='h2' icon textAlign='center'>
      <Icon name='plug' circular />
      <Header.Content>Processes</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    />
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible;