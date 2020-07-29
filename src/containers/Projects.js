import React, {Component} from 'react';
import { Container, Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard';

// content changes here with router
// need Many of these
// will become a container component

export default class Projects extends Component{
    render(){
        return(
            <>
            <Button> Add project </Button><br></br><br></br>
            <ProjectCard/>
            
            </>
        )
    }
}