import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'
import {saveProject, deleteProject, editProject} from '../actions/projectActions' //async actions imported from the actions file
import { addTask, deleteTask, editTask } from '../actions/tasksActions';

import { Input, Grid } from 'semantic-ui-react';


import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';




// content changes here with router
// need Many of these
// will become a container component

function Projects(){

    // state = {
    //     showFormModal: false,
    //     searchTerm: ''
    // }

    const [showFormModal, setShowFormModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const projects = useSelector(state => state.projects)
    const people = useSelector(state => state.people)
    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()



    const renderModal = () => {
        setShowFormModal(true)
    }

    const handleSearchProject = (event) => {
        setSearchTerm(event.target.value)     
    }

    const createNewProject = (project) => {
        dispatch(saveProject(project))
    }

    const deleteProjectCallback = (id) => {
        dispatch(deleteProject(id))
    }

    const renderProjects = () => {
        const searchedProjects = projects.filter(project => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
        return searchedProjects.map( project => <ProjectCard key={project.id} project={project} people={people} tasks={tasks} title={project.title} started={project.started} description={project.description} id={project.id} editProject={editProject} deleteProjectCallback={deleteProjectCallback} addTask={addTask} deleteTask={deleteTask} editTask={editTask}/> )
    }

    return(
        <>
            <div className="ui grid container">
                <div className="eight wide column" >

                    <Input className="large" placeholder="Search" onChange={e => handleSearchProject(e)}/>
                    
                    <br></br>
                    <br></br>

                    <ProjectInput createNewProject={createNewProject}/>
                    
                </div>
            </div>

            <br></br>
            <br></br>

            <Grid stackable container columns={2} >

                {renderProjects()}
                
            </Grid>


            <br></br>
            <br></br>



        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         projects: state.projects,
//         tasks: state.tasks,
//         people: state.people
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         saveProject: (project) => dispatch(saveProject(project)), // this changed from the local redux store to the redux thunk backend connection
//         deleteProject: (id) => dispatch(deleteProject(id)),
//         editProject: project => dispatch(editProject(project)),
//         addTask: project_id => dispatch(addTask(project_id)),
//         deleteTask: id => dispatch(deleteTask(id)),
//         editTask: task => dispatch(editTask(task)),
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Projects);

export default Projects;