import React, {Component} from 'react';
import { Header, Image, Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'
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
        // console.log(this.props.projects)
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
                        <Button icon="close" onClick={this.cancelEdit}></Button>
                </Form>
            </Modal.Description>
        )
    }

    renderTasks = () => {// filter tasks for this project only
        const projectTasks = this.props.tasks.filter(task => task.projectId === this.state.id)
        return projectTasks.map(task => <Task key={task.id} people={this.props.people} peopleId={task.peopleId} deleteTask={this.props.deleteTask} projectId={this.state.id} editTask={this.props.editTask} id={task.id} description={task.description} completed={task.completed}/>)
    }


    renderDescription = () => {
        return (
            <>
                <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                    <Button basic secondary content="Edit Project" labelPosition='right' icon="pencil" onClick={e => this.startEdit(e)} ></Button>                               
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                    <Button basic content="Exit Project Page"  onClick={this.props.history.goBack} secondary ></Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid> 
                <Header>{this.state.title}</Header>
                <p>{this.state.description}</p>

                      
            </>          
        )
    }

    handleAddTask = () => {
        this.props.addTask(this.state.id)
        // console.log(this.state.id)
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
                                    <Button basic secondary onClick={this.handleAddTask}>Add Task</Button>
                                    <br></br>
                                    {this.renderTasks()}
                                    {/* {console.log(this.props.tasks.filter(task => task.projectId === this.state.id))} */}
                                    
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