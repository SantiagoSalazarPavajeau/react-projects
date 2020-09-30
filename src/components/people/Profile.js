import React, {Component, useState} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react'

// import Task from '../tasks/Task';
import { Link } from 'react-router-dom';



import TasksModal from '../tasks/TasksModal';
import { useSelector } from 'react-redux';

import {editProject} from '../../actions/projectActions'
import {addTask, deleteTask, editTask} from '../../actions/tasksActions'



const Profile = (props) => {

    // state = {
    //     showTasksModal: false,

    // }

    const [state, setState] = useState({showTasksModal: false})

    const people = useSelector(state => state.people)
    const projects = useSelector(state => state.projects)
    const tasks = useSelector(state => state.tasks)

    const handleShowTasksModal = () => {
        setState({
          showTasksModal: true
        })
      }
  
    const handleHideTasksModal = () => {
        setState({
          showTasksModal: false
        })
      }
    const handleDeletePerson = (e) => {
        // console.log(e.target.id)
        props.deletePerson(e.target.id)
        // localStorage.removeItem("token");
        props.handleLogout()
        props.history.push('/signup')
    }


    const renderTasks = () => {
        const myTasks= tasks.filter(task => task.person_id === props.currentUser.id) //still send current user as a prop
        // console.log(myTasks)
        let project;
        const list = myTasks.map((task) => {
                        project = projects.find(project => project.id === task.project_id )
                        // console.log(project.title)
                        // return <li key={task.id}> <Link to={`project-${project.id}`}>{project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}   </li>
                        return (
                            <li key={task.id}> 
                                <Link onClick={handleShowTasksModal}>{project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}
                            </li>
                            
                        )
                    })
        return <><ul>{list}</ul>{state.showTasksModal ? <TasksModal handleHideTasksModal={handleHideTasksModal} project_id={project.id} /> : null}</>

    }
    
    const person = people.find(person => person.username === props.currentUser.username) // find person that logged in
    return (
        <div>

            <Grid stackable container columns={2} >

                <Grid.Column>
                    <Card
                    image={person.image}
                    header={person.username}
                    />
                    <Button id={person.id} onClick={e => handleDeletePerson(e)}>Delete my Account</Button>
                </Grid.Column>
                <Grid.Column>

                    <Card
                    header={"Todos:"}
                    description={renderTasks}
                    />
                </Grid.Column>

            </Grid>

        </div>
        
        )
        
}

export default Profile;