import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'
import { Route } from "react-router-dom";

import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectsList from '../components/projects/ProjectsList';



// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    state = {
        showForm: false
    }

    renderProjects = () => {
        // console.log(this.props.match.url)
        // return this.props.projects.map( (project) => { <Route path={`${this.props.match.url}/:projectId`} render={routerProps => <ProjectCard {...routerProps} title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/>} />})
     
    }

    renderModal = () => {
        this.setState({
            showForm: true
        })
    }

    


    render(){
        return(
            <>
                    <div class="ui grid container">
                        <div class="eight wide column" >
                            <ProjectInput addProject={this.props.addProject}/>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div class="ui grid container">
                        <Route path={`${this.props.match.url}/:projectId`} render={routerProps => <ProjectCard {...routerProps} projects={this.props.projects}/>}/>
                        <ProjectsList projects={this.props.projects}/>
                    </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProject: (project) => dispatch({type: 'ADD_PROJECT', project}),
        deleteProject: (id) => dispatch({type: 'DELETE_PROJECT', id}),
        editProject: (project) => dispatch({type: 'EDIT_PROJECT'}, project)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);