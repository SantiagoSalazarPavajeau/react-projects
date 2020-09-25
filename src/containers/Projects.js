import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'
import {saveProject, deleteProject, editProject} from '../actions/projectActions' //async actions imported from the actions file
import { addTask, deleteTask, editTask } from '../actions/tasksActions';

import { Input, Grid } from 'semantic-ui-react';


import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';




// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    state = {
        showFormModal: false,
        searchTerm: ''
    }

    renderProjects = () => {
        const searchedProjects = this.props.projects.filter(project => project.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return searchedProjects.map( project => <ProjectCard key={project.id} project={project} people={this.props.people} tasks={this.props.tasks} title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/> )
    }

    renderModal = () => {
        this.setState({
            showFormModal: true
        })
    }

    handleSearchProject = (event) => {
        this.setState({
            searchTerm: event.target.value
        })      
    }
    

    render(){
        return(
            <>
                    <div className="ui grid container">
                        <div className="eight wide column" >

                            <Input className="large" placeholder="Search" onChange={e => this.handleSearchProject(e)}/>
                            
                            <br></br>
                            <br></br>

                            <ProjectInput saveProject={this.props.saveProject}/>
                           
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    {/* <div className="ui grid container"> */}
                    <Grid stackable container columns={2} >

                        {/* <ProjectsList projects={this.props.projects} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> */}
                        {this.renderProjects()}
                        
                        {/* Ptoject Card can contain Tasks Modal in the code? */}
                    </Grid>


                    {/* </div> */}
                    <br></br>
                    <br></br>



            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        tasks: state.tasks,
        people: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProject: (project) => dispatch(saveProject(project)), // this changed from the local redux store to the redux thunk backend connection
        deleteProject: (id) => dispatch(deleteProject(id)),
        editProject: project => dispatch(editProject(project)),
        addTask: project_id => dispatch(addTask(project_id)),
        deleteTask: id => dispatch(deleteTask(id)),
        editTask: task => dispatch(editTask(task)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);