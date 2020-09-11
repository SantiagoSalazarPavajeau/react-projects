import React, {Component} from 'react';
import { connect } from 'react-redux';

import Person from '../components/people/Person'

import { editProject } from '../actions/projectActions' //async actions imported from the actions file
import { addTask, deleteTask, editTask } from '../actions/tasksActions';

import { Grid } from 'semantic-ui-react'


class People extends Component{


    renderPeople = () => {
        return this.props.people.map(person => <Person editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask} people={this.props.people} projects={this.props.projects} key={person.id} id={person.id} name={person.key} image={person.image} tasks={this.props.tasks}></Person>)
    }



    render(){
        return (
                <>
                {/* <div className="ui grid container"> */}

                    <Grid stackable container columns={2} >
                    {this.renderPeople()}
                    </Grid>
                                 {/* </div> */}

                </>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        tasks: state.tasks,
        projects: state.projects
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addPerson: person => dispatch({type: 'ADD_PERSON', person}),
        editProject: project => dispatch(editProject(project)),
        addTask: project_id => dispatch(addTask(project_id)),
        deleteTask: id => dispatch(deleteTask(id)),
        editTask: task => dispatch(editTask(task))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);