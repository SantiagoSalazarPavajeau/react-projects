import React, {useState} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import Tasks from '../../containers/Tasks';





const ProjectCard = (props) => {

    const [open, setOpen] = useState(false)
    const [showTasksModal, setShowTasksModal] = useState(false)

    const handleDeleteClick = () => {
      setOpen(true)
    }

    const handleCancel = () => {
      setOpen(false)
    }

    const handleConfirm = () => {
      props.deleteProjectCallback(props.project.id)
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
      <Tasks 
      project={props.project} 
      showTasksModal={showTasksModal} 
      handleHideTasksModal={handleHideTasksModal}
      />

        <div className="eight wide column" >
          <div className="ui card">
            <div className="content">
                <a className="header" onClick={e => handleShowTasksModal(e)}>{props.project.title}</a>
              <div className="meta">
                <span className="date">{props.project.started}</span>
              </div>
              <div className="description">
                {props.project.description}
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