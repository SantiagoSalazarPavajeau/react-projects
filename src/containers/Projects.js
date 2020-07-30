import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import '../App.css'

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
        return this.props.projects.map( project => <ProjectCard title={project.title} started={project.started} description={project.description}/> )
    }

    renderForm = () => {
        this.setState({
            showForm: true
        })
    }


    render(){
        return(
            <>
                    <div class="ui grid container">
                        <div class="eight wide column" >
                        {this.state.showForm ? <ProjectInput addProject={this.props.addProject}/> : <Button onClick={this.renderForm}> Add project </Button>}
                        

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
        addProject: (title) => dispatch({type: 'ADD_PROJECT', title})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);