import React, {Component, useState} from 'react';
// import ProjectCard from './ProjectCard';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import CloseModal from './CloseModal';
import TitleInput from './TitleInput';
import DescriptionInput from './DescriptionInput'



const ProjectInput = (props) => {
    // state = {
    //     title: '',
    //     description: '',
    //     showModal: false
    // }

    const [project, setProject] = useState({title: '', description: ''})
    const [showModal, setShowModal] = useState(false)

    const handleOnChange = (event) => {
        setProject({
            ...project, 
            [event.target.name]: event.target.value})
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        props.createNewProject(project)
        setProject({
            title: '',
            description: '',
        })
        setShowModal(false)
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }



    const renderForm = () => {
        return (
            <>
            <Button onClick={openModal}> <i className="add icon center"></i></Button>
            <Modal dimmer={"inverted"} open={showModal} >
                <Modal.Header>
                    Add a project:
                </Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size='medium' alt="Workbench and tools" src='https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' />
                        <Modal.Description>
                            <Form>
                            <Header>Title:</Header>
                                    <TitleInput handleOnChange={handleOnChange} title={project.title}/>
                            <Header>Description:</Header>
                                    <DescriptionInput handleOnChange={handleOnChange} description={project.description}/>

                                    <Form.Button onClick={(event) => handleOnSubmit(event)} type="submit" >Submit</Form.Button>
                                    <CloseModal closeModal={closeModal}/>
                            </Form>                        
                        </Modal.Description>
                    </Modal.Content>
            </Modal>
            </>
        )
    }
    return(
        <>
            {renderForm()}
        </>
    )
}

export default ProjectInput;