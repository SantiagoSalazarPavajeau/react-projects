import React, { useState} from 'react';
import { Card, Grid, Button, Loader } from 'semantic-ui-react'




import Tasks from '../../containers/Tasks';
import { useSelector } from 'react-redux';



const Profile = (props) => {

    const [showTasksModal, setShowTasksModal] = useState(false)
    const [project, setProject] = useState(null)

    const people = useSelector(state => state.people)
    const projects = useSelector(state => state.projects)
    const tasks = useSelector(state => state.tasks)

    const handleShowTasksModal = (e) => {
        setProject(projects.find(project => project.id === e.target.id))
        setShowTasksModal(true)
      }
  
    const handleHideTasksModal = () => {
        setShowTasksModal(false)
      }

    const handleDeletePerson = (e) => {
        // console.log(e.target.id)
        props.deletePersonCallback(e.target.id)
        // localStorage.removeItem("token");
        props.handleLogout()
        props.history.push('/signup')
    }


    const renderTasks = () => {
        const myTasks= tasks.filter(task => task.person_id === props.currentUser.id) //still send current user as a prop
        let project;
        const list = myTasks.map((task) => {
                        project = projects.find(project => project.id === task.project_id )
                        return (
                            <li key={task.id}> 
                                <a onClick={e => handleShowTasksModal(e)} id={project}>{project.title} Project</a>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}
                            </li>
                            
                        )
                    })
        return <><ul>{list}</ul></>

    }
    
    const person = people.find(person => person.username === props.currentUser.username) // find person that logged in

    return (
        <div>
            {(tasks[0]) ? null : <Loader active>Loading</Loader>}
            {project ? <Tasks project={project} showTasksModal={showTasksModal} handleHideTasksModal={handleHideTasksModal}/> : null}
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