import React, {Component} from 'react';
import { Header, Image, Modal, Form, Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';


class TasksModal extends Component{
    // let index = this.props.projects.findIndex( project => project.id === this.props.match.params.id)
    state = {
        title: this.props.projects[this.props.index].title,
        started: this.props.projects[this.props.index].started,
        description: this.props.projects[this.props.index].description,
        id: this.props.projects[this.props.index].id,
        edit: false
    }
    


    startEdit = () => {
        this.setState({
            edit: true
        })
    }

    cancelEdit = () => {
        this.setState({
            edit: false
        })
    }

    saveEdit = (event) => {
        event.preventDefault()
        this.props.editProject({
            title: this.state.title,
            started: this.state.started,
            id: this.state.id,
            description: this.state.description
        })
        this.setState({
            edit: false
        })
        console.log(this.props.projects)
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderEdit = () => {
        return (
            <Modal.Description>
                <Form>
                        <Form.Input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title" placeholder={this.state.title}/>
                        <Form.TextArea type="textarea" onChange={event => this.handleOnChange(event)} value={this.state.description} name="description" placeholder={this.state.description}/>
                        <Button icon="save" onClick={(event) => this.saveEdit(event)}></Button>
                        <Button icon="close icon" onClick={this.cancelEdit}></Button>
                </Form>
            </Modal.Description>
        )
    }

    renderDescription = () => {
        return (
            <Modal.Description>
                <Header>{this.state.title}</Header>
                    <p>{this.state.description}</p>
                                            {/* <h3>Requested project ID: {match.params.id}</h3>
                                            <h3>Requested project ID: {index}</h3> */}

                    <Button icon="pencil" onClick={e => this.startEdit(e)} ></Button>                               
                    <Button icon="close icon" onClick={this.props.history.goBack} ></Button>                               
                        {/* {console.log(props)} */}
            </Modal.Description>
        )
    }

    render(){
        return( 
            <>
            <div className="ui grid container">
                        <div className="eight wide column" >
                            <Modal dimmer={"inverted"} open={true} >
                                <Modal.Header></Modal.Header>
                                    <Modal.Content image>
                                    <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                                    {this.state.edit ?  this.renderEdit() : this.renderDescription()}
                                </Modal.Content>
                            </Modal>
                        </div>
                    </div>
                
            </>
        )
}
    
  }

export default withRouter(TasksModal)