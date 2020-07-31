import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import { Button } from 'semantic-ui-react'

import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';


// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    state = {
        showForm: false
    }

    renderProjects = () => {
        return this.props.projects.map( project => <ProjectCard title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> )
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
                            {/* {this.state.showForm ? <ProjectInput addProject={this.props.addProject}/> : null} */}
                            <ProjectInput addProject={this.props.addProject}/>
                            {/* <Button onClick={this.renderModal}> <i class="add icon center"></i></Button> */}
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div class="ui grid container">
                        {this.renderProjects()}
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