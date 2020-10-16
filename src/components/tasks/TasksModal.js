import React from 'react';
import { Header, Image, Modal, Form, Button, Divider, Grid } from 'semantic-ui-react'

import ProjectInfo from '../projects/ProjectInfo';
import EditProject from '../projects/EditProject';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



const TasksModal = (props) => {



    return( 
        <>
                {console.log(props.project)}
            <div className="ui grid container">
                <div className="eight wide column" >
                    <Modal size={"large"} dimmer={"inverted"} open={true} >
                        <Modal.Header></Modal.Header>
                            <Modal.Content image scrolling>
                                <Image size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' wrapped/>
                                <Modal.Description>

                                    {
                                    props.edit ? 
                                    <EditProject
                                    project={props.project}
                                    saveEdit={props.saveEdit}
                                    handleOnChange={props.handleOnChange}
                                    cancelEdit={props.cancelEdit}
                                    /> : 
                                    <ProjectInfo 
                                    project={props.project} 
                                    startEdit={props.startEdit} 
                                    handleHideTasksModal={props.handleHideTasksModal}
                                    /> 
                                    }

                                    <Progress type="circle" width={30} percent={props.percent} status="success" />

                                    <Divider horizontal>Tasks</Divider>

                                    <Button basic secondary onClick={props.handleAddTask}>Add Task</Button>

                                    <br></br>

                                    {props.renderTasks()}


                                </Modal.Description>
                        </Modal.Content>


                    </Modal>
                </div>
            </div>
                
        </>
    )
    
  }

export default TasksModal;