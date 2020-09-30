import React, {Component} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Person from '../components/people/Person'

import { editProject } from '../actions/projectActions' //async actions imported from the actions file
import { addTask, deleteTask, editTask } from '../actions/tasksActions';

import { Grid } from 'semantic-ui-react'


function People(){

    const people = useSelector(state => state.people)
    const projects = useSelector(state => state.projects)
    const tasks = useSelector(state => state.tasks)

    const renderPeople = () => {
        return people.map(person => <Person key={person.id} id={person.id} username={person.username} image={person.image} tasks={tasks} projects={projects}></Person>)
    }



    return (
            <>
            {/* <div className="ui grid container"> */}

                <Grid stackable container columns={2} >
                {renderPeople()}
                </Grid>
                                {/* </div> */}

            </>
    )
}

// const mapStateToProps = state => {
//     return {
//         people: state.people,
//         tasks: state.tasks,
//         projects: state.projects
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         addPerson: person => dispatch({type: 'ADD_PERSON', person}),
//         editProject: project => dispatch(editProject(project)),
//         addTask: project_id => dispatch(addTask(project_id)),
//         deleteTask: id => dispatch(deleteTask(id)),
//         editTask: task => dispatch(editTask(task))
//     }
// }

export default People;