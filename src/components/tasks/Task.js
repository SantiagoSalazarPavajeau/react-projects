import React, { Component } from 'react';
import { Input, Button, Dropdown, Label, TextArea, Form } from 'semantic-ui-react';


class Task extends Component{

    state = {
        description: this.props.description,
        id: this.props.id,
        projectId: this.props.projectId,
        completed: this.props.completed,
        people: this.props.people,
        peopleId: this.props.peopleId
    }

    makeCompleted = () => {
        this.setState({
            completed: true
        })
    }

    makeInProgress = () => {
        this.setState({
            completed: false
        })
    }

    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }

    handleEdit = (e) => {
        this.setState({
            description: e.target.innerText // use onchange for dropdowns/select and innertext instead of value
        }) // needs to send all the task in the state to set on edit in reducer in one shot
    }

    assignTo = (e) => {
        this.setState({
            peopleId: e.target.innerText // use onchange for dropdowns/select and innertext instead of value
        })

    }
    
    renderInProgress = () => {
        return (
            <>
            <br></br>
                <Input  onBlur={ e => this.handleEdit(e)} size="small" labelPosition='right' type='text' value={this.props.description} placeholder={this.props.description}>
                <Button onClick={this.makeCompleted} icon="check circle"></Button>
                {/* {console.log(this.state.completed)} */}
                <Dropdown placeholder='Assign to...' onChange={e => this.assignTo(e)} value={this.props.peopleId} search selection options={this.props.people} />

                    <input onChange={event => this.setState({description: event.target.value})} value={this.state.description}/>
                    <Button onClick={this.handleDelete} icon="trash"></Button>

                </Input>

                {/* <Input size="large" label={<Button onClick={this.makeCompleted} icon="check circle"></Button>} labelPosition='left' value={this.props.description} placeholder={this.props.description}/>  */}
            {/* <Dropdown placeholder='Assign to...' search selection options={friendOptions} /> */}
            <br></br>
            </>

        )
    }
    
    renderCompleted = () => {
        return (
            <>
            <br></br>
            <Button onClick={this.makeInProgress} icon="redo"></Button>   
            <Label color='green' image>
            {console.log(this.state.completed)}

            <img src='https://api.adorable.io/avatars/77/stevie@adorable.io.png' />
                completed by Jenny
            <Label.Detail>{this.props.description}</Label.Detail>

            </Label>
            <br></br>
            </>
        )     
     }
    
    render(){
        return (
            <>
            <Form onClick={this.handleEdit}> 
            {this.state.completed ? this.renderCompleted() : this.renderInProgress()}
            </Form>

            </>
        )
    }
}

export default Task


