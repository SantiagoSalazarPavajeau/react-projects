import React, {Component} from 'react';
import { Header, Image, Modal, Form, Button } from 'semantic-ui-react'
import {  useRouteMatch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


const TasksModal = (props) => {
    const match = useRouteMatch()
    let index = props.projects.findIndex( project => project.id === match.params.id)
    let title = props.projects[index].title
    let description = props.projects[index].description

    return( 
            <>
            <div class="ui grid container">
                        <div class="eight wide column" >
                            <Modal dimmer={"blurring"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image>
                                    <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                                    <Modal.Description>
                                        <Header>{title}</Header>
                                        {description}
                                        <h3>Requested project ID: {match.params.id}</h3>
                                        <h3>Requested project ID: {index}</h3>
                                        

                                        <Button onClick={props.history.goBack} >Back</Button>                               
                                                {console.log(props)}
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                
            </>
        )
  }

export default withRouter(TasksModal)