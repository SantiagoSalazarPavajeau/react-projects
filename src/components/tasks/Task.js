import React, { Component } from 'react';
import { Input, Dropdown, Label, TextArea, Button, Form } from 'semantic-ui-react';


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


                <Input  size="small" labelPosition='right' type='text' value={this.state.description} placeholder={this.state.description}>

                <TextArea onChange={event => this.setState({description: event.target.value})} value={this.state.description} rows="4" cols="70"/>
                <Button onClick={this.makeCompleted} icon="save"></Button>
                <Button onClick={this.makeCompleted} icon="check circle"></Button>
                <Button onClick={this.handleDelete} icon="trash"></Button>

                </Input>
            <br></br>

                Assigned to: <Dropdown value={this.state.peopleId} onChange={e => this.assignTo(e)}  selection options={this.state.people} />
            <br></br>

                {/* <Input size="large" label={<Button onClick={this.makeCompleted} icon="check circle"></Button>} labelPosition='left' value={this.props.description} placeholder={this.props.description}/>  */}
            {/* <Dropdown placeholder='Assign to...' search selection options={friendOptions} /> */}
            <br></br>
            <br></br>
            <br></br>
            </>

        )
    }
    
    renderCompleted = () => {
        return (
            <>
            <br></br>
            <Label color='green' image>
            <img src='https://api.adorable.io/avatars/77/stevie@adorable.io.png' />
                completed by {this.state.peopleId}
            <Label.Detail>{this.props.description}</Label.Detail>

            </Label>
            <Button onClick={this.makeInProgress} icon="redo"></Button>   
            <Button onClick={this.handleDelete} icon="trash"></Button>

            <br></br>
            </>
        )     
     }
    
    render(){
        return (
            <>
            {/* <Form>  */}
            {this.state.completed ? this.renderCompleted() : this.renderInProgress()}
            {/* </Form> */}
            {console.log(this.state.completed)}
            </>
        )
    }
}

export default Task


