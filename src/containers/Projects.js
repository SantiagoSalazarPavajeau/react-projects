import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'
import { Route } from "react-router-dom";
// import {   useRouteMatch } from 'react-router-dom';



import ProjectInput from '../components/projects/ProjectInput';
import ProjectCard from '../components/projects/ProjectCard';
import TasksModal from '../components/tasks/TasksModal';




// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    state = {
        showForm: false
    }

    renderProjects = () => {
        // console.log(this.props.match.url)
        return this.props.projects.map( project => <ProjectCard key={project.id} title={project.title} started={project.started} description={project.description} id={project.id} editProject={this.props.editProject} deleteProject={this.props.deleteProject}/> )
     
    }

    renderModal = () => {
        this.setState({
            showForm: true
        })
    }

    componentDidMount = () => {
        
    }

    render(){
        return(
            <>
                    <div className="ui grid container">
                        <div className="eight wide column" >
                            <ProjectInput addProject={this.props.addProject}/>
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
        addProject: (project) => dispatch({type: 'ADD_PROJECT', project}),
        deleteProject: (id) => dispatch({type: 'DELETE_PROJECT', id})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);