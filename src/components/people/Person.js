import { render } from 'enzyme';
import React, {useEffect, useState} from 'react';
import { Grid, Loader, Dimmer } from 'semantic-ui-react'

import Tasks from '../../containers/Tasks';




const Person = (props) => {

    const [showTasksModal, setShowTasksModal] = useState(false)
    const [myProjects, setMyProjects] = useState([])

    useEffect(()=>{
        let foundProjects = []
        props.myTasks.map((task) => {
            for(let project of props.projects){
                if(project.id === task.project_id){
                    foundProjects.push(project)
                }
            }
        })
        const uniqProjects = [ ...new Set(foundProjects) ]
        console.log(foundProjects)
        setMyProjects(uniqProjects)
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
                <div className="ui card">
                    <div className="content">
                        <p className="header">{props.person.username}</p>
                    <div className="meta">
                        <span className="date">{"Projects:"}</span>
                    </div>
                    <div className="description">
                        {myProjects[0] ? 
                        myProjects.map(project => { 
                            return(
                                <li key={project.id}> 
                                    <Tasks 
                                    project={project} 
                                    showTasksModal={showTasksModal}
                                    handleHideTasksModal={handleHideTasksModal}
                                    />
                                    {project.title}
                                </li>
                            ) 
                        })
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