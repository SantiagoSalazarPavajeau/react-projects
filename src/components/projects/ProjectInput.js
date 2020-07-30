import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import { Button } from 'semantic-ui-react'


export default class ProjectInput extends Component{
    state = {
        title: '',
        showForm: false
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addProject(this.state.title)
        this.setState({
            title: '',
            showForm: false
        })
    }

    showForm = () => {
        this.setState({
            showForm: true
        })

    }

    renderForm = () => {
        return (
            // <form onSubmit={(event) => this.handleOnSubmit(event)}>
            //     <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title}/>
            //     <input type="submit"/>
            // </form>
            <form class="ui form">
                <div class="field">
                    <label>Project Title:</label>
                    <input type="text" onChange={event => this.handleOnChange(event)} value={this.state.title} name="title" placeholder="Title"/>
                </div>
                <button class="ui button" onClick={(event) => this.handleOnSubmit(event)} type="submit">Submit</button>
            </form>
        )
    }
    render(){
        return(
            <>
            {this.state.showForm ? this.renderForm() : <Button onClick={this.showForm}> Add project </Button>}  
            
            </>
        )
    }
}