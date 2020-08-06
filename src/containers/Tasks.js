import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';


// nested route for tasks needs to be here

class Tasks extends Component{
    state = {
        tasks: []
    }

    render(){
        return (
            <TasksModal editProject={this.props.editProject} addTask={this.props.addTask} projects={this.props.projects}/>
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