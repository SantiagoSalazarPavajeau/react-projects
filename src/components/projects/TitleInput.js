import React, {Component} from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

export default class TitleInput extends Component{
    render(){
        return(
            <Form.Input type="text" onChange={event => this.props.handleOnChange(event)} value={this.props.title} name="title" placeholder={this.props.title}/>
        )
    }
}