import React, {Component} from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

export default class CloseModal extends Component{
    render(){
        return(
            <Form.Button onClick={this.props.closeModal} type="submit" >Cancel</Form.Button>
        )
    }
}