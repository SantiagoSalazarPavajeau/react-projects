import React, {Component, useEffect, useState} from 'react';
import { Header, Image, Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';
import Task from './Task'

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import {editProject} from '../../actions/projectActions'
import {loginUser, deletePerson} from '../../actions/peopleActions'
import {addTask, deleteTask, editTask} from '../../actions/tasksActions'
import { useDispatch, useSelector } from 'react-redux';


const TasksModal = (props) => {
    
    const [project, setProject] = useState(props.project)
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    const [percent, setPercent] = useState(0)

    const people = useSelector(state => state.people)
    const projects = useSelector(state => state.projects)
    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()
    
    const calculatePercent = () => {
        const projectTasks = tasks.filter(task => task.project_id === project.id)
        let percent =  0
        let numberCompleted = 0
        let numberInProgress = 0
        for(let i=0; i<projectTasks.length;i++){
            if(projectTasks[i].completed === true){
                numberCompleted++
                // console.log(numberCompleted)
            }else{
                numberInProgress++
                // console.log(numberInProgress)
            }
            percent = numberCompleted / (numberInProgress + numberCompleted)
        }
        // console.log(percent)
        setPercent(percent * 100)
    }

    useEffect(
        () => {
            calculatePercent()
        }, []
    )
    
    const startEdit = () => {
        setEdit(true)
    }

    const cancelEdit = () => {
        setEdit(false)
    }

    const saveEdit = (event) => {
        event.preventDefault()
        dispatch(editProject(project))
        setEdit(false)
    }

    const handleOnChange = (event) => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        })
    }

    const renderEdit = (project) => {
        return (
            <Modal.Description>
                <Form onSubmit={(event) => saveEdit(event)}>
                    <Form.Input type="text" onChange={event => handleOnChange(event)} value={project.title} name="title" />
                    <Form.TextArea type="textarea" onChange={event => handleOnChange(event)} value={project.description} name="description" />
                    <Button icon="save" type="submit" ></Button>
                    <Button icon="close" onClick={cancelEdit}></Button>
                </Form>
            </Modal.Description>
        )
    }
    const renderDescription = (project) => {
        return (
            <>
                <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                    <Button basic secondary content="Edit Project" labelPosition='right' icon="pencil" onClick={e => startEdit(e)} ></Button>                               
                    </Grid.Column>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                    <Button basic content="Exit Project Page"  onClick={ e => props.handleHideTasksModal(e)} secondary ></Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid> 
                <Header>{project.title}</Header>
                <p>{project.description}</p>

                      
            </>          
        )
    }

    const renderTasks = () => {// filter tasks for current project only
        const projectTasks = tasks.filter(task => task.project_id === project.id)
        return projectTasks.map(task => <Task key={task.id} people={people} person_id={task.person_id} deleteTask={deleteTask} project_id={project.id} editTask={editTask} id={task.id} description={task.description} completed={task.completed}/>)
    }

    const handleAddTask = () => {
        // console.log('a')
        dispatch(addTask(project.id))
        // console.log('g')
    }

    const renderModal = () => {
        if(!loading){
            return(
                <>
                    <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal size={"large"} dimmer={"inverted"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image scrolling>
                                    <Image size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' wrapped/>
                                    <Modal.Description>
                                    {edit ?  renderEdit(project) : renderDescription(project)}
                                    <Progress type="circle" width={30} percent={percent} status="success" />
                                    <Divider horizontal>Tasks</Divider>
                                    <Button basic secondary onClick={handleAddTask}>Add Task</Button>
                                    <br></br>
                                    {renderTasks()}


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

    return( 
        <>
        {renderModal()}
        </>
    )
    
  }

export default withRouter(TasksModal)