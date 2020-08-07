import React, { Component } from 'react';
import { Input, Button, Dropdown, Label, TextArea, Form } from 'semantic-ui-react';


class Task extends Component{

    state = {
        toggle: this.props.completed
    }

    makeCompleted = () => {
        this.setState({
            toggle: true
        })
    }

    makeInProgress = () => {
        this.setState({
            toggle: false
        })
    }

    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }
    
    renderInProgress = () => {
        return (
            <>
            <br></br>
            <Form> 
                <Input size="small" labelPosition='right' type='text' value={this.props.description} placeholder={this.props.description}>
                <Button onClick={this.makeCompleted} icon="check circle"></Button>
                <Dropdown placeholder='Assign to...' search selection options={friendOptions} />

                    <input />
                    <Button onClick={this.handleDelete} icon="trash"></Button>

                </Input>
            </Form>

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
            {this.state.toggle ? this.renderCompleted() : this.renderInProgress()}
            </>
        )
    }
}

export default Task

let friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/jenny@adorable.io.png' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/elliot@adorable.io.png' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/stevie@adorable.io.png' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/christian@adorable.io.png' },
    }
  ]
