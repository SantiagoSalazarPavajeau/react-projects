import React, {useState} from 'react';
import { Card, Grid } from 'semantic-ui-react'

import { Link } from 'react-router-dom';



import TasksModal from '../tasks/TasksModal';



const Person = (props) => {

    const [showTasksModal, setShowTasksModal] = useState(false)
    const [projectId, setProjectId] = useState(null)

    const renderTasks = () => {
        const myTasks= props.tasks.filter(task => task.person_id === props.id) // filter out the tasks that don't belong to the person
        let project;
        const list = myTasks.map((task) => {
                        project = props.projects.find(project => project.id === task.project_id )
                        return <li key={task.id} > <Link id={project.id} onClick={(e) => handleShowTasksModal(e)}> {project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}   </li>
                    })
        return <ul>{list}</ul>
    }

    const handleShowTasksModal = (e) => {
        setProjectId(e.target.id)
        setShowTasksModal(true)
        }
  
    const handleHideTasksModal = () => {
        setShowTasksModal(false)
      }

    
    const myTasks= props.tasks.filter(task => task.person_id === props.id) // filter out the tasks that don't belong to the person
    let project;
    myTasks.map((task) => { return project = props.projects.find(project => project.id === task.project_id )})

    return(
        <>
        {showTasksModal ? <TasksModal handleHideTasksModal={handleHideTasksModal} project_id={projectId} /> : null}

                <Grid.Column>
                    <Card
                    image={props.image}
                    header={props.username}
                    description={renderTasks}
                    />
                </Grid.Column>

        </>
    )
    
}

export default Person;