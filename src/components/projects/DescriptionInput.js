import React, {Component} from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

export default class TitleInput extends Component{
    render(){
        return(
            <Form.TextArea type="text" onChange={event => this.props.handleOnChange(event)} value={this.props.description} name="description" placeholder={this.props.description}/>
        )
    }
}