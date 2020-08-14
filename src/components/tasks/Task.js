import React, { Component } from 'react';
import { Input, Dropdown, Label, TextArea, Button, Form } from 'semantic-ui-react';


class Task extends Component{

    state = {
        description: this.props.description,
        id: this.props.id,
        person_id: this.props.person_id,
        completed: this.props.completed,
        project_id: this.props.project_id
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

    handleSave = () => {
        console.log(this.state.person_id)
        this.props.editTask(this.state)
    }

    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }

    assignTo = (e) => {
        const ownerIndex = this.props.people.findIndex(person => person.key === e.target.innerText)
        this.setState({
            person_id: this.props.people[ownerIndex].id // use onchange for dropdowns/select and parentNode.id instead of value
        })
    }
    
    renderInProgress = () => {
        let owner = this.props.people.find(person => person.id === this.state.person_id) // person_id is a propery of the task and we can find the owner in the people state
        return (
            
            <>
            <br></br>

            {/* {console.log(owner)}
            {console.log(this.props.people)}
            {console.log(this.state.person_id)} */}
                <Input  size="small" labelPosition='right' type='text' value={this.state.description} placeholder={this.state.description}>

                <TextArea onChange={event => this.setState({description: event.target.value})} value={this.state.description} rows="4" cols="70"/>
                <Button onClick={this.handleSave} icon="save"></Button>
                <Button onClick={this.makeCompleted} icon="check circle"></Button>
                <Button onClick={this.handleDelete} icon="trash"></Button>

                </Input>
            <br></br>

                Assigned to: <Dropdown button className='icon' placeholder={owner ? owner.key : 'Yet to be assigned'} onChange={e => this.assignTo(e)} floating labeled icon='users' options={this.props.people} />
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            </>

        )
    }
    
    renderCompleted = () => {
        let owner = this.props.people.find(person => person.id === this.state.person_id)
        return (
            <>
            <br></br>
            <Label color='green' image>
            <img alt="Profile Pic" src='https://api.adorable.io/avatars/77/stevie@adorable.io.png' />
                completed by {owner ? owner.key : 'Yet to be assigned'}
            <Label.Detail>{this.props.description}</Label.Detail>

            </Label>
            <Button onClick={this.handleSave} icon="save"></Button>
            <Button onClick={this.makeInProgress} icon="redo"></Button>   
            <Button onClick={this.handleDelete} icon="trash"></Button>

            <br></br>
            </>
        )     
     }
    
    render(){
        return (
            <>
            <Form> 
            {this.state.completed ? this.renderCompleted() : this.renderInProgress()}
            </Form>
            {/* {console.log(this.state)} */}
            </>
        )
    }
}

export default Task


