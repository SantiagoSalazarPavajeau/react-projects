import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import ProjectCard from '../components/ProjectCard';
import { connect } from 'react-redux';
import '../App.css'

// content changes here with router
// need Many of these
// will become a container component

class Projects extends Component{

    renderProjects = () => {
        return this.props.projects.map( project => <ProjectCard title={project.title} started={project.started} description={project.description}/> )
    }

    render(){
        return(
            <>
                    <div class="ui grid container">
                        <div class="eight wide column" >

                        <Button> Add project </Button>

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
        addProject: () => dispatch({type: 'ADD_PROJECT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Projects);