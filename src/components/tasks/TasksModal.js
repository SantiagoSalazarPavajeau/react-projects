import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'



export default class TasksModal extends Component{
    state = {
        title: '',
        description: '',
        showModal: false
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addProject(this.state)
        this.setState({
            title: '',
            description: '',
            showModal: false
        })
    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }



    renderForm = () => {
        return (
            <>
                <Button onClick={this.openModal}> <i class="add icon center"></i></Button>
                <Modal  open={this.state.showModal} >
                    <Modal.Header>Project Title</Modal.Header>
                        <Modal.Content image>
                        <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                        <Modal.Description>
                            <Form>
                            <Header>Title:</Header>
                                    <Form.Input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title" placeholder={this.state.title}/>
                            <Header>Description:</Header>
                                    <Form.TextArea type="textarea" onChange={event => this.handleOnChange(event)} value={this.state.description} name="description" placeholder={this.state.description}/>
                                    <Form.Button onClick={(event) => this.handleOnSubmit(event)} type="submit" >Submit</Form.Button>
                                    <Form.Button onClick={this.closeModal} type="submit" >Cancel</Form.Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>


            </>
        )
    }
    render(){
        return(
            <>
            {/* {this.state.showForm ? this.renderForm() : <Button onClick={this.showForm}> Add project </Button>}   */}
            {this.renderForm()}
            </>
        )
    }
}