import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';


// nested route for tasks needs to be here

class Tasks extends Component{


    render(){
        return (
            <TasksModal projects={this.props.projects}/>
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
        addTask: dispatch({type: 'ADD_TASK'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Tasks)