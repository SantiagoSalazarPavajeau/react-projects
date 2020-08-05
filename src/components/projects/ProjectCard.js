import React, {Component} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import {   useRouteMatch , Link } from 'react-router-dom';

// modal is to display tasks

export default class ProjectCard extends Component{
    state = {
      open: false,
      edit: false
    }

    handleDeleteClick = (event) => {
      this.setState({
        open: true
      })
    }

    handleCancel = () => {
      this.setState({
        open: false
      })
    }

    handleConfirm = () => {
      this.props.deleteProject(this.props.id)
      this.setState({
        open: false
      })
    }



    render(){
        return(
            <div className="eight wide column" >

            <div className="ui card">
              <div className="image">
                <i aria-hidden="true" className="file alternate icon left"></i>
              </div>
              <div className="content">
                  {/* <input value={this.props.title}/> */}
                      <Link className="header" to={`/projects/${this.props.id}`}>{this.props.title}</Link> 
                      {/* this link nests deeper with every click */}
                  <div className="meta">
                    <span className="date">{this.props.started}</span>
                  </div>
                  <div className="description">
                    {this.props.description}
                  </div>
                  <div className="ui right aligned grid">
              
                  <div className="sixteen wide column">
                                   
                  </div>
                  </div>
              </div>
              <div className="extra content">
                <div className="left floated right aligned six wide column">
                      <a>
                        <Button basic icon='pencil' onClick={event => this.handleDeleteClick(event)}/>
                        <Button basic icon='trash' onClick={event => this.handleDeleteClick(event)}>
                        {/* <i aria-hidden="true" className="trash alternate icon right"></i> */}
                      </Button>
                      <Confirm
                        open={this.state.open}
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                      />        
                      </a>
                  </div>
                
              </div>
            </div>
            </div>
        )
    }
}