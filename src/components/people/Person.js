import React, {Component} from 'react';
import { Card, Grid } from 'semantic-ui-react'

// import Task from '../tasks/Task';
import { Link } from 'react-router-dom';



import TasksModal from '../tasks/TasksModal';



export default class Person extends Component{

    state = {
        showTasksModal: false
    }

    renderTasks = () => {
        const myTasks= this.props.tasks.filter(task => task.person_id === this.props.id) // filter out the tasks that don't belong to the person
        let project;
        const list = myTasks.map((task) => {
                        project = this.props.projects.find(project => project.id === task.project_id )
                        // console.log(project.title)
                        // return <li key={task.id}> <Link to={`project-${project.id}`}>{project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}   </li>
                        return <li key={task.id}> <Link onClick={this.handleShowTasksModal}>{project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}   </li>
                    })
        return <ul>{list}</ul>
    }

    handleShowTasksModal = () => {
        this.setState({
          showTasksModal: true
        })
      }
  
    handleHideTasksModal = () => {
        this.setState({
          showTasksModal: false
        })
      }

    render(){
        const myTasks= this.props.tasks.filter(task => task.person_id === this.props.id) // filter out the tasks that don't belong to the person
        let project;
        myTasks.map((task) => { return project = this.props.projects.find(project => project.id === task.project_id )})
        return(
            <>
            {this.state.showTasksModal ? <TasksModal handleHideTasksModal={this.handleHideTasksModal} project={project} tasks={this.props.tasks} people={this.props.people} editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/> : null}

            {/* <div className="ui stackable eight wide column" > */}
                {/* {console.log(this.props.tasks)}  */}
                {/* See if we are having access to the store and the tasks */}
                {/* {console.log(myTasks)} */}
                    <Grid.Column>
                        <Card
                        image={this.props.image}
                        header={this.props.username}
                        // meta='Software Engineer'
                        description={this.renderTasks}
                        />
                    </Grid.Column>

            {/* </div> */}
            </>
        )
    }
}