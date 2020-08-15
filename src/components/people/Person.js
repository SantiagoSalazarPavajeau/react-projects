import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

import Task from '../tasks/Task';
import { Link } from 'react-router-dom';


export default class Person extends Component{

    renderTasks = () => {
        const myTasks= this.props.tasks.filter(task => task.person_id === this.props.id) // filter out the tasks that don't belong to the person
        let project;
        const list = myTasks.map((task) => {
                        project = this.props.projects.find(project => project.id === task.project_id )
                        // console.log(project.title)
                        return <li key={task.id}> <Link to={`projects/${project.id}`}>{project.title} Project</Link>: {task.description}  {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}   </li>
                    })
        return <ul>{list}</ul>
    }

    render(){
        return(
            <div className="eight wide column" >
                {/* {console.log(this.props.tasks)}  */}
                {/* See if we are having access to the store and the tasks */}
                {/* {console.log(myTasks)} */}
                 <Card
                    image={this.props.image.src}
                    header={this.props.name}
                    meta='Software Engineer'
                    description={this.renderTasks}
                />
            </div>
        )
    }
}