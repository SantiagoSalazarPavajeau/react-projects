import React, {Component} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



// modal is to display tasks

export default class ProjectCard extends Component{
    state = {
      open: false,
      edit: false,
      percent: 50,
      showTasksModal: false
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

    setPercent = () =>{
      console.log(this.props)
      // const projectTasks = this.props.tasks.filter(task => task.project_id === this.state.id)
      let percent = 0
      this.setState({
        percent: percent
      })
    }

    handleShowTasksModal = () => {
      this.setState({
        showTasksModal: true
      })
    }



    render(){
        return(
            <div className="eight wide column" >

            <div className="ui card">
              <div className="image">
              </div>
              <div className="content">
                  {/* <input value={this.props.title}/> */}
                      {/* <Link className="header" to={`/project-${this.props.id}`}>{this.props.title}</Link>  */}
                      {/* make this link set show tasks modal to true. gotta change link to event listener and it has to go to task modal */}
                      {/* move tasks modal code to here */}
                      <Button onClick={e => this.handleShowTasksModal(e)}>{this.props.title}</Button>
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
                        
                        <Link className="header" to={`/projects/${this.props.id}`}>
                          <Button basic icon='pencil'/>
                        </Link> 
                        <Button basic icon='trash' onClick={event => this.handleDeleteClick(event)}>
                        {/* <i aria-hidden="true" className="trash alternate icon right"></i> */}
                      </Button>
                      <Confirm
                        open={this.state.open}
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                      />        
                  </div>
                
              </div>
            </div>
            </div>
        )
    }
}