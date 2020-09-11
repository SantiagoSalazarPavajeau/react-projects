import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'
import {saveProject, deleteProject} from '../actions/projectActions' //async actions imported from the actions file
import { Input } from 'semantic-ui-react';


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
        const searchedProjects = this.props.projects.filter(project => project.title.includes(this.state.searchTerm))
        return searchedProjects.map( project => <ProjectCard key={project.id} tasks={this.props.tasks} title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> )
    }

    renderModal = () => {
        this.setState({
            showFormModal: true
        })
    }

    setSearchState = () => {

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
                        <Input className="large"placeholder="Search" onChange={e => this.handleSearchProject(e)}/>
                            {/* Search input */}<br></br><br></br>

                            <ProjectInput saveProject={this.props.saveProject}/>
                            {/* {console.log(this.state.searchTerm)}
                            {console.log(this.state.searchedProjects)} */}
                            {/* {console.log(this.props.projects.filter(project => project.title.includes(this.state.searchTerm)))} */}

                            {/* search button */}
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="ui grid container">
                        {/* <ProjectsList projects={this.props.projects} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> */}
                        {this.renderProjects()}
                        
                        {/* Ptoject Card can contain Tasks Modal in the code? */}


                    </div>
                    <br></br>
                    <br></br>



            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        taks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveProject: (project) => dispatch(saveProject(project)), // this changed from the local redux store to the redux thunk backend connection
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);