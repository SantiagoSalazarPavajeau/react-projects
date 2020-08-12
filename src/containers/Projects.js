import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'
import {fetchProjects, saveProject} from '../actions/projectActions' //async actions imported from the actions file

import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';




// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    state = {
        showFormModal: false
    }

    renderProjects = () => {
        // console.log(this.props.match.url)
        return this.props.projects.map( project => <ProjectCard key={project.id} title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> )
     
    }

    renderModal = () => {
        this.setState({
            showFormModal: true
        })
    }

    componentDidMount = () => {
        this.props.fetchProjects()
    }

    render(){
        return(
            <>
                    <div className="ui grid container">
                        <div className="eight wide column" >
                            <ProjectInput saveProject={this.props.saveProject}/>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="ui grid container">
                        {/* <ProjectsList projects={this.props.projects} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> */}
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
        saveProject: (project) => dispatch(saveProject(project)), // this changed from the local redux store to the redux thunk backend connection
        deleteProject: (id) => dispatch({type: 'DELETE_PROJECT', id}),
        fetchProjects: () => dispatch(fetchProjects())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);