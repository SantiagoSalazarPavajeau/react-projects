import React from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

const DescriptionInput = (props) => {
        return(
            <Form.TextArea type="text" onChange={event => props.handleOnChange(event)} value={props.description} name="description" placeholder={props.description}/>
        )
}

export default DescriptionInput;