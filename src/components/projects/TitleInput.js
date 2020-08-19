import React from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

const TitleInput = (props) => {
        return(
            <Form.Input type="text" onChange={event => props.handleOnChange(event)} value={props.title} name="title" placeholder={props.title}/>
        )
}

export default TitleInput