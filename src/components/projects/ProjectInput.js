import React, {Component} from 'react';
import ProjectCard from './ProjectCard';

export default class ProjectInput extends Component{
    state = {
        title: ''        
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
            title: ''
        })
    }

    render(){
        return(
            <>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text"onChange={event => this.handleOnChange(event)} value={this.state.title}/>
                <input type="submit"/>
            </form>
            </>
        )
    }
}