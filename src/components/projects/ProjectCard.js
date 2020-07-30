import React, {Component} from 'react';
import { Button, Confirm } from 'semantic-ui-react'


export default class ProjectCard extends Component{
    state = {
      open: false
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
            <div class="eight wide column" >

            <div class="ui card">
              <div class="image">
                <i aria-hidden="true" class="file alternate icon left"></i>
              </div>
              <div class="content">
                  <a data-testid="text-content" class="header">{this.props.title}</a>
                  <div class="meta">
                    <span class="date">{this.props.started}</span>
                  </div>
                  <div class="description">
                    {this.props.description}
                  </div>
                  <div class="ui right aligned grid">
              
                  <div class="sixteen wide column">
                      <Button basic color='grey' icon='trash' onClick={event => this.handleDeleteClick(event)}>
                        {/* <i aria-hidden="true" class="trash alternate icon right"></i> */}
                      </Button>
                      <Confirm
                        open={this.state.open}
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                      />                     
                  </div>
                  </div>
              </div>
              <div class="extra content">
                <div class="left floated right aligned six wide column">
                      <a>
                        <i class="tasks icon"></i>
                        Tasks
                      </a>
                  </div>
                
              </div>
            </div>
            </div>
        )
    }
}