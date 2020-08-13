import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'


export default class Person extends Component{

    render(){
        const myTasks= this.props.tasks.filter(task => task.peopleId === this.props.name) // filter out the tasks that don't belong to the person
        return(
            <div className="four wide column" >
                {/* {console.log(this.props.tasks)}  */}
                {/* See if we are having access to the store and the tasks */}
                {/* {console.log(myTasks)} */}
                 <Card
                    image={this.props.image.src}
                    header={this.props.name}
                    meta='Software Engineer'
                    description={<ul>{myTasks.map(task => <li key={task.id}> {task.description} {task.completed ? <p>(Completed)</p> : <p>(InProgress)</p>}</li>)}</ul>}
                />
            </div>
        )
    }
}