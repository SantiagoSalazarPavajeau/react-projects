import React, {Component} from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import {   useRouteMatch } from 'react-router-dom';




const TasksModal = ({match}) => {
    console.log(match)
    // let index = projects.findIndex( project => project.id === match.params.projectId)
    // let title = projects[index].title
    // let description = ''
    // let showModal = true

    // handleOnChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addProject(this.state)
        this.setState({
            title: '',
            description: '',
            showModal: false
        })
    }

    // openModal = () => {
    //     this.setState({
    //         showModal: true
    //     })
    // }

    const closeModal = () => {
        this.setState({
            showModal: false
        })
    }
        return(
            <>
            <div class="ui grid container">
                        <div class="eight wide column" >
                            <Modal  open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image>
                                    <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                                    <Modal.Description>
                                        <Form>
                                        <Header>Title</Header>
                                        <Header>Description:</Header>
                                                Task1
                                            <Form.Button onClick={(event) => handleOnSubmit(event)} type="submit" >Submit</Form.Button>
                                            <Form.Button onClick={closeModal} type="submit" >Cancel</Form.Button>                               
                                        /* </Form>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                
            </>
        )
}

export default TasksModal