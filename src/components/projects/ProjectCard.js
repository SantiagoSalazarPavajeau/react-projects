import React, {Component} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import TasksModal from '../tasks/TasksModal';



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

    handleHideTasksModal = () => {
      this.setState({
        showTasksModal: false
      })
    }



    render(){
      // const project = this.props.projects.find(project => project.id.toString() === this.props.id)
      // console.log(this.props.project)
      // add event listener to exit button on tasks modal to set showTasksModal to false again
        return(
          <>
            
            {this.state.showTasksModal ? <TasksModal handleHideTasksModal={this.handleHideTasksModal} project={this.props.project} tasks={this.props.tasks} people={this.props.people} editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/> : null}
            <div className="eight wide column" >
            <div className="ui card">
              <div className="image">
              </div>
              <div className="content">
                  {/* <input value={this.props.title}/> */}
                      {/* <Link className="header" to={`/project-${this.props.id}`}>{this.props.title}</Link>  */}
                      {/* make this link set show tasks modal to true. gotta change link to event listener and it has to go to task modal */}
                      {/* move tasks modal code to here */}
                      <Link className="header" onClick={e => this.handleShowTasksModal(e)}>{this.props.title}</Link>
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
                        
                        <Link className="header" onClick={e => this.handleShowTasksModal(e)}>
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
          </>
        )
    }
}