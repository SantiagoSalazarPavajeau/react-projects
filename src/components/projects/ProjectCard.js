import React, {useState} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import TasksModal from '../tasks/TasksModal';




const ProjectCard = (props) => {
    // state = {
    //   open: false,
    //   edit: false,
    //   percent: 50,
    //   showTasksModal: false
    // }

    const [open, setOpen] = useState(false)
    const [showTasksModal, setShowTasksModal] = useState(false)



    const handleDeleteClick = () => {
      setOpen(true)
    }

    const handleCancel = () => {
      setOpen(false)
    }

    const handleConfirm = () => {
      props.deleteProjectCallback(props.id)
      setOpen(false)
    }

    const handleShowTasksModal = () => {
      setShowTasksModal(true)
    }

    const handleHideTasksModal = () => {
      setShowTasksModal(false)
    }

    return(
      <>
        
      {showTasksModal ? <TasksModal handleHideTasksModal={handleHideTasksModal} project_id={props.project.id} /> : null}
        
        <div className="eight wide column" >
          <div className="ui card">
            <div className="content">
                <a className="header" onClick={e => handleShowTasksModal(e)}>{props.title}</a>
              <div className="meta">
                <span className="date">{props.started}</span>
              </div>
              <div className="description">
                {props.description}
              </div>
            </div>
          
            <div className="extra content">
              <div className="left floated right aligned six wide column">                      
                <Button basic icon='pencil' onClick={e => handleShowTasksModal(e)}/>
                <Button basic icon='trash' onClick={event => handleDeleteClick(event)}/>
                <Confirm
                  open={open}
                  onCancel={handleCancel}
                  onConfirm={handleConfirm}
                />
              </div>          
            </div>
          </div>
        </div>
      </>
    )
}

export default ProjectCard;