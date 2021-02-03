import { render } from 'enzyme';
import React, {useEffect, useState} from 'react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react'

import Tasks from '../../containers/Tasks';
import {priorityTasks, PriorityQueue} from '../../services/priorityHeap';
import Task from '../tasks/Task';




const Person = ({myTasks, person}) => {

    const [showTasksModal, setShowTasksModal] = useState(false)
    const [myProjects, setMyProjects] = useState([])
    const [urgentTodo, setUrgentTodo] = useState()

    useEffect(()=>{
        let todo = priorityTasks(myTasks).dequeue().val
        setUrgentTodo(todo)
        // console.log(priorityTasks(myTasks))
        // let priorities = priorityTasks(myTasks)
        // for(let task of priorityTasks(myTasks).values){
        //     console.log(priorities.dequeue().val)
        // }

        // myTasks.map((task) => {
        //     for(let project of projects){
        //         if(project.id === task.project_id){
        //             foundProjects.push(project)
        //         }
        //     }
        // })

        // const uniqProjects = [ ...new Set(foundProjects) ]
        // setMyProjects(uniqProjects)

    }, [showTasksModal])


    const handleShowTasksModal = (e) => {
        e.preventDefault()
        setShowTasksModal(true)
    }

    const handleHideTasksModal = () => {
        setShowTasksModal(false)
      }



    return(
        <>
                <Grid.Column>
                <div className="ui card" style={{width:'90%'}}>
                    <div className="content">
                        <p className="header">{person.username}</p>
                    <div className="meta">
                        <span className="date">Most important tasks:</span>
                    </div>
                    <div className="description">
                        {console.log(urgentTodo)}
                        {urgentTodo ? 
                        // urgentTodos.slice(0,3).map(task => { 
                            // return(
                                <div key={urgentTodo.id}> 
                                    <Task 
                                    task={urgentTodo} 
                                    />
                                </div>
                            // ) 
                        // })
                        : 
                        "Loading..."
                        }

                    </div>
                    </div>
                
                    <div className="extra content">
                
                    </div>
                </div>
                    
                </Grid.Column>

        </>
    )
    
}

export default Person;