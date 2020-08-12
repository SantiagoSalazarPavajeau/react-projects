import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';
import { editProject } from '../actions/projectActions';


// nested route for tasks needs to be here

class Tasks extends Component{

    render(){
        return ( // the match params id is a string not an integer
            <>
            {console.log(this.props)}
            <TasksModal tasks={this.props.tasks} people={this.props.people}  match={this.props.match} index={this.props.projects.findIndex( project => project.id.toString() === this.props.match.params.id)} editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask} projects={this.props.projects}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        tasks: state.tasks,
        projects: state.projects,
        people: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addTask: projectId => dispatch({type: 'ADD_TASK', projectId}),
        deleteTask: id => dispatch({type: 'DELETE_TASK', id}),
        editTask: task => dispatch({type: 'EDIT_TASK', task}),
        editProject: project => dispatch(editProject(project))

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Tasks)