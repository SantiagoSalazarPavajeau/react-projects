import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css'

import {saveProject, deleteProject} from '../actions/projectActions' //async actions imported from the actions file

import { Input, Grid, Loader } from 'semantic-ui-react';


import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';





function Projects(){

    const [searchTerm, setSearchTerm] = useState('')

    const projects = useSelector(state => state.projects)

    const dispatch = useDispatch()

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
        return searchedProjects.map(project => <ProjectCard key={project.id} project={project} deleteProjectCallback={deleteProjectCallback}/> )
    }

    return(
        <>
            {(projects[0]) ? null : <Loader active>Loading</Loader>}

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

export default Projects;