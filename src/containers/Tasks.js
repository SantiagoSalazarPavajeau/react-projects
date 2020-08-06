import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';


// nested route for tasks needs to be here

class Tasks extends Component{
    state = {
        tasks: ["first", "", "", "", "", "", "", "", "", "", "", ""]
    }

    render(){
        return (
            <>
            {console.log(this.props.match)}
            <TasksModal tasks={this.state.tasks} match={this.props.match} index={this.props.projects.findIndex( project => project.id === this.props.match.params.id)} editProject={this.props.editProject} addTask={this.props.addTask} projects={this.props.projects}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        tasks: state.tasks,
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTask: task => dispatch({type: 'ADD_TASK', task}),
        editProject: (project) => dispatch({type: 'EDIT_PROJECT', project})

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Tasks)