import React, {Component} from 'react';
import { Header, Image, Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import Task from './Task'


class TasksModal extends Component{
    state = {
        title: this.props.project.title,
        started: this.props.project.started,
        description: this.props.project.description,
        id: this.props.project.id,
        edit: false,
        loading: false
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
            started: this.props.project.started,
            id: this.props.project.id,
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

    renderEdit = (project) => {
        return (
            <Modal.Description>
                <Form onSubmit={(event) => this.saveEdit(event)}>
                    <Form.Input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title" />
                    <Form.TextArea type="textarea" onChange={event => this.handleOnChange(event)} value={this.state.description} name="description" />
                    <Button icon="save" type="submit" ></Button>
                    <Button icon="close" onClick={this.cancelEdit}></Button>
                </Form>
            </Modal.Description>
        )
    }
    renderDescription = (project) => {
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
                <Header>{project.title}</Header>
                <p>{project.description}</p>

                      
            </>          
        )
    }

    renderTasks = () => {// filter tasks for this project only
        const projectTasks = this.props.tasks.filter(task => task.project_id === this.state.id)
        return projectTasks.map(task => <Task key={task.id} people={this.props.people} person_id={task.person_id} deleteTask={this.props.deleteTask} project_id={this.state.id} editTask={this.props.editTask} id={task.id} description={task.description} completed={task.completed}/>)
    }

    handleAddTask = () => {
        this.props.addTask(this.state.id)
        console.log(this.props.tasks)
    }

    renderModal = () => {
        // console.log(this.props)
        if(!this.props.loading){
            const project = this.props.project
            return(
                <>
                    <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal size={"large"}dimmer={"inverted"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image scrolling>
                                    <Image size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' wrapped/>
                                    <Modal.Description>
                                    {this.state.edit ?  this.renderEdit(project) : this.renderDescription(project)}
                                    <Divider horizontal>Tasks</Divider>
                                    <Button basic secondary onClick={this.handleAddTask}>Add Task</Button>
                                    <br></br>
                                    {this.renderTasks()}
                                    {/* {console.log(this.props.tasks.filter(task => task.projectId === this.state.id))} */}
                                    {/* {console.log(project)} */}

                                    </Modal.Description>
                                </Modal.Content>


                            </Modal>
                        </div>
                    </div>
                
            </>
            )
        }else{
            return (
                <>
                    <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal size={"large"}dimmer={"inverted"} open={true} >
                               <p>Loading</p> 


                            </Modal>
                        </div>
                    </div>
                </>
                
            )
        }
    }

    render(){
        return( 
            <>
            {this.renderModal()}
            </>
        )
    }
    
  }

export default withRouter(TasksModal)