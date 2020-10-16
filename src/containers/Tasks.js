import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';
import Task from '../components/tasks/Task';

import { editProject } from '../actions/projectActions';
import {addTask, deleteTask, editTask} from '../actions/tasksActions'



// nested route for tasks needs to be here

function Tasks(props){
    const tasks =  useSelector(state => state.tasks)
    const projects =  useSelector(state => state.projects)
    const people =  useSelector(state => state.people)

    const dispatch = useDispatch()

    const [project, setProject] = useState(props.project)
    const [projectTasks, setProjectTasks] = useState(null)
    const [edit, setEdit] = useState(false)
    const [percent, setPercent] = useState(0)

    useEffect(
        () => {
            setProjectTasks(tasks.filter(task => task.project_id === parseInt(props.project.id)))
        }, [project]
    )
    useEffect(
        () => {
           calculatePercent() 
        }, [projectTasks]
    )
    const calculatePercent = () => {
            if (projectTasks){
                let numberCompleted = 0
                let numberInProgress = 0
                for(let i=0; i<projectTasks.length;i++){
                    if(projectTasks[i].completed === true){
                        numberCompleted++
                    }else{
                        numberInProgress++
                    }
                    setPercent((numberCompleted / (numberInProgress + numberCompleted))*100)
                }
        }
    }

    const startEdit = () => {
        setEdit(true)
    }

    const cancelEdit = () => {
        setEdit(false)
    }

    const saveEdit = (event) => {
        event.preventDefault()
        dispatch(editProject(project))
        setEdit(false)
    }

    const handleOnChange = (event) => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        })
    }

    const handleAddTask = () => {
        dispatch(addTask(project.id))
    }

    const renderTasks = () => {// filter tasks for current project only
        const projectTasks = tasks.filter(task => task.project_id === props.project.id)
        return projectTasks.map(task => <Task key={task.id} task={task} people={props.people} deleteTask={deleteTask} project_id={project.id} editTask={editTask} id={task.id} description={task.description} completed={task.completed}/>)
    }

    return ( // the match params id is a string not an integer
        <>
        {props.showTasksModal ? 
        <TasksModal 
        project={props.project}
        tasks={tasks}
        projects={projects}
        people={people} 
        handleHideTasksModal={props.handleHideTasksModal}
        handleAddTask={handleAddTask}
        deleteTask={deleteTask}
        editTask={editTask}
        handleOnChange={handleOnChange}
        edit={edit}
        startEdit={startEdit}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
        renderTasks={renderTasks}
        percent={percent}/> 
        : 
        null}
        </>
    )

}

export default Tasks;