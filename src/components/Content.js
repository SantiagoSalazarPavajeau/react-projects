import React, {Component} from 'react';
import { Container, Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import ProjectCard from './ProjectCard';

// content changes here with router
// need Many of these

export default class Content extends Component{
    render(){
        return(
            <>
            <Button> Add project </Button><br></br><br></br>
            <ProjectCard/>
            <Header as='h2' icon textAlign='center'>
                <i aria-hidden="true" class="users icon left"></i>
                <Header.Content>Projects</Header.Content>
            </Header>
            <Header as='h2' icon textAlign='center'>
                <Icon name='settings' circular />
                <Header.Content>Tasks</Header.Content>
            </Header>
            <Header as='h2' icon textAlign='center'>
                <Icon name='plug' circular />
                <Header.Content>Processes</Header.Content>
            </Header>
            </>
        )
    }
}