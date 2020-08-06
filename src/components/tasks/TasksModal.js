import React from 'react';
import { Header, Image, Modal, Form, Button } from 'semantic-ui-react'
import {  useRouteMatch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { render } from 'enzyme';


const TasksModal = (props) => {
    let match = useRouteMatch()
    const index = props.projects.findIndex( project => project.id === match.params.id)

    const state = {
        title: props.projects[index].title,
        description: props.projects[index].description,
        edit: false
    }

    const handleSubmit = (e) => {
        // props.editProject(e.target.value)
        // alert("This is your last warning you need to evacuate your house in 5 seconds")
    }

    const renderDescription = () => {
        return (
            <Modal.Description>
                <Header>{state.title}</Header>
                    <p>{state.description}</p>
                                            {/* <h3>Requested project ID: {match.params.id}</h3>
                                            <h3>Requested project ID: {index}</h3> */}

                    <Button onClick={e => handleSubmit(e)} >Edit</Button>                               
                    <Button onClick={props.history.goBack} >Back</Button>                               
                        {/* {console.log(props)} */}
            </Modal.Description>
        )
    }


    return( 
            <>
            <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal dimmer={"inverted"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image>
                                    <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                                    {renderDescription()}
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                
            </>
        )
  }

export default withRouter(TasksModal)