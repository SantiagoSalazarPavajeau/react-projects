import React, {Component} from 'react';
import { Header, Image, Modal, Form, Button, Divider } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import Task from './Task'


class TasksModal extends Component{
    // let index = this.props.projects.findIndex( project => project.id === this.props.match.params.id)
    state = {
        title: this.props.projects[this.props.index].title,
        started: this.props.projects[this.props.index].started,
        description: this.props.projects[this.props.index].description,
        id: this.props.projects[this.props.index].id,
        edit: false
    }
    


    startEdit = () => {
        this.setState({
            edit: true
        })
    }

    cancelEdit = () => {
        this.setState({
            edit: false
        })
    }

    saveEdit = (event) => {
        event.preventDefault()
        this.props.editProject({
            title: this.state.title,
            started: this.state.started,
            id: this.state.id,
            description: this.state.description
        })
        this.setState({
            edit: false
        })
        console.log(this.props.projects)
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderEdit = () => {
        return (
            <Modal.Description>
                <Form>
                        <Form.Input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title" placeholder={this.state.title}/>
                        <Form.TextArea type="textarea" onChange={event => this.handleOnChange(event)} value={this.state.description} name="description" placeholder={this.state.description}/>
                        <Button icon="save" onClick={(event) => this.saveEdit(event)}></Button>
                        <Button icon="close icon" onClick={this.cancelEdit}></Button>
                </Form>
            </Modal.Description>
        )
    }

    renderTasks = () => {
        return this.props.tasks.map(task => <Task description={task.description} completed={task.completed}/>)
    }

    renderDescription = () => {
        return (
            <>
                <Header>{this.state.title}</Header>
                    <p>{this.state.description}</p>
                    <Button content="Edit" labelPosition='right' icon="pencil" onClick={e => this.startEdit(e)} ></Button>                               
                    <Button content="Exit" labelPosition='right' icon="close icon" onClick={this.props.history.goBack} ></Button>      
            </>          
        )
    }

    handleAddTask = () => {
        this.props.addTask(this.state.id)
        console.log(this.state.id)
    }

    render(){
        return( 
            <>
            <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal size={"large"}dimmer={"inverted"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image scrolling>
                                    <Image size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' wrapped/>
                                    <Modal.Description>
                                    {this.state.edit ?  this.renderEdit() : this.renderDescription()}
                                    <Divider horizontal>Tasks</Divider>
                                    <Button onClick={this.handleAddTask}>Add Task</Button>
                                    <br></br>
                                    {this.renderTasks()}

                                    </Modal.Description>
                                </Modal.Content>


                            </Modal>
                        </div>
                    </div>
                
            </>
        )
}
    
  }

export default withRouter(TasksModal)