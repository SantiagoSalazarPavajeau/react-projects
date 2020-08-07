import React, { Component } from 'react';
import { Input, Button, Dropdown, Label } from 'semantic-ui-react';


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
    
    renderInProgress = () => {
        return (
            <>
            <br></br>
            <Button onClick={this.makeCompleted} icon="check circle"></Button>  <Input value={this.props.description} placeholder={this.props.description}></Input> 
            <Dropdown placeholder='Assign to...' search selection options={friendOptions} />
            <br></br>
            </>

        )
    }
    
    renderCompleted = () => {
        return (
            <>
            <br></br>
            <Button onClick={this.makeInProgress} icon="redo"></Button>   <Label color='green' image>{this.props.description}</Label>
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
