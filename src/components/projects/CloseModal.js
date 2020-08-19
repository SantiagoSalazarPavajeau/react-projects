import React from 'react';
// import ProjectCard from './ProjectCard';
import { Form } from 'semantic-ui-react'

const CloseModal = (props) => { 
        return(
            <Form.Button onClick={props.closeModal} type="submit" >Cancel</Form.Button>
        )
}

export default CloseModal;