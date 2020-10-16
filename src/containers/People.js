import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import Person from '../components/people/Person'

import { Grid, Loader } from 'semantic-ui-react'


function People(){


    const people = useSelector(state => state.people)
    const projects = useSelector(state => state.projects)
    const tasks = useSelector(state => state.tasks)

    
  


    const renderPeople = () => {


        // let myTasks = [];
        // for(let i; i < people.length; i++){
        //     for(let j; j < tasks.length; j++){
        //         if (people[i].id === tasks[j].person_id){
        //             myTasks.push(tasks[j])
        //         }
        //     }
        // }

        // let myProjects = []
        // for(let i; i < myTasks.length; i++){
        //     for(let j; j < projects.length; j++){
        //         if (myTasks[i].person_id === projects[j].id){
        //             myProjects.push(projects[j])
        //         }
        //     }
        // }

        return people.map(person => {
                    return(
                        <Person 
                        key={person.id} 
                        person={person}
                        myTasks={tasks.filter(task => task.person_id === person.id)}
                        projects={projects} 
                        />
                    )
                }
            )
    }



    return (
            <>

                <Grid stackable container columns={2} >
                {(people[0]) ? null : <Loader active>Loading</Loader>}
                
                {renderPeople()}
                </Grid>

            </>
    )
}

export default People;