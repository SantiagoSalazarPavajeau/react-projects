import React, {Component} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';
import { editProject } from '../actions/projectActions';
import { addTask, deleteTask, editTask } from '../actions/tasksActions';



// nested route for tasks needs to be here

function Tasks(props){
    const tasks =  useSelector(state => state.tasks)
    const projects =  useSelector(state => state.projects)
    const people =  useSelector(state => state.people)

    const dispatch = useDispatch()

    return ( // the match params id is a string not an integer
        <>
        <TasksModal handleHideTasksModal={props.handleHideTasksModal} project_id={props.project_id} tasks={tasks} people={people} projects={projects} />
        {/* {console.log(this.props)} */}
        </>
    )

}

export default Tasks;