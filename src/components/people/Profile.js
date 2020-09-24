import React, {Component} from 'react';
import { Card, Grid, Button } from 'semantic-ui-react'

// import Task from '../tasks/Task';
import { Link } from 'react-router-dom';



import TasksModal from '../tasks/TasksModal';



export default class Profile extends Component{

    state = {
        showTasksModal: false,

    }

    renderTasks = () => {
        const myTasks= this.props.tasks.filter(task => task.person_id === this.props.currentUser.id) 
        // console.log(myTasks)
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
    handleDeletePerson = (e) => {
        // console.log(e.target.id)
        this.props.deletePerson(e.target.id)
        // localStorage.removeItem("token");
        this.props.handleLogout()
        this.props.history.push('/signup')
    }

    renderProfile = () => {
        if(this.props.currentUser.username){
            const person = this.props.people.find(person => person.username === this.props.currentUser.username) // find person that logged in
            const myTasks= this.props.tasks.filter(task => task.person_id === this.props.currentUser.id) // filter out the tasks that don't belong to the person
            let project;
            myTasks.map((task) => { return project = this.props.projects.find(project => project.id === task.project_id )})
            // console.log(project)
            return (
                <div>

                {this.state.showTasksModal ? <TasksModal handleHideTasksModal={this.handleHideTasksModal} project={project} tasks={this.props.tasks} people={this.props.people} editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/> : null}
                    <Grid stackable container columns={2} >

                        <Grid.Column>
                            {/* {console.log(person)} */}
                            <Card
                            image={person.image}
                            header={person.username}
                            // meta='Software Engineer'
                            />
                            <Button id={person.id} onClick={e => this.handleDeletePerson(e)}>Delete my Account</Button>
                        </Grid.Column>
                        <Grid.Column>

                            <Card
                            header={"Tasks"}
                            // meta='Software Engineer'
                            description={this.renderTasks}
                            />
                        </Grid.Column>

                    </Grid>
    
                </div>
                
            )
        }
    }

    render(){    
        return(
            <>
            {/* {console.log(this.props.currentUser)} */}
           {this.renderProfile()}
           </>
        )
    }
}