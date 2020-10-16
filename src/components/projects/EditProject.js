import React from 'react';
import { Modal, Form, Button} from 'semantic-ui-react'


const EditProject = (props) => {
    return (
        <Modal.Description>
            <Form onSubmit={(event) => props.saveEdit(event)}>
                <Form.Input type="text" onChange={event => props.handleOnChange(event)} value={props.project.title} name="title" />
                <Form.TextArea type="textarea" onChange={event => props.handleOnChange(event)} value={props.project.description} name="description" />
                <Button icon="save" type="submit" ></Button>
                <Button icon="close" onClick={props.cancelEdit}></Button>
            </Form>
        </Modal.Description>
    )
}

export default EditProject;