import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Dropdown, Label, TextArea, Button, Form } from 'semantic-ui-react';

import {deleteTask, editTask} from '../../actions/tasksActions'



const Task = (props) => {


    const [task, setTask] = useState(props.task)
    const [owner, setOwner] = useState(null)
    const [dropdown, setDropDown] = useState(null)

    const people = useSelector(state => state.people)

    const dispatch = useDispatch()

    useEffect(
        ()=> {
        let dropdownFormat = []
        people.map(person => dropdownFormat.push({id: person.id, key: person.username, text: person.username, value: person.username, image: { avatar: true, src: person.image } }))
        setDropDown(dropdownFormat)
        setOwner(dropdownFormat.find(person => person.id === task.person_id))
        
        },[]
    )

    

    const makeCompleted = () => {
        setTask({...task, completed: true})
    }

    const makeInProgress = () => {
        setTask({...task, completed: false})
    }

    const handleSave = () => {
        dispatch(editTask(task))
    }

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const assignTo = (e) => {
        const ownerIndex = people.findIndex(person => person.username === e.target.innerText)
        setTask({
            ...task,
            person_id: people[ownerIndex].id // use onchange for dropdowns/select and parentNode.id instead of value
        })
    }
    
    const renderInProgress = () => {
        
        return (
            
            <>
            <br></br>

                <Input  size="small" labelPosition='right' type='text' value={task.description} placeholder={task.description}>

                <TextArea onChange={event => setTask({...task, description: event.target.value})} value={task.description} rows="4" cols="70"/>

                <Button onClick={handleSave} icon="save"></Button>
                <Button onClick={makeCompleted} icon="check circle"></Button>
                <Button onClick={handleDelete} icon="trash"></Button>

                </Input>
            <br></br>

                Assigned to: <Dropdown button className='icon' placeholder={owner ? owner.key : 'Yet to be assigned'} onChange={e => assignTo(e)} floating labeled icon='users' options={dropdown} />
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            </>

        )
    }
    
    const renderCompleted = () => {
        return (
            <>
            <br></br>
            <Label color='green' image>
            <img alt="Profile Pic" src='https://api.adorable.io/avatars/77/stevie@adorable.io.png' />
                completed by {owner ? owner.key : 'Yet to be assigned'}
            <Label.Detail>{task.description}</Label.Detail>
            </Label>
            <Button onClick={handleSave} icon="save"></Button>
            <Button onClick={makeInProgress} icon="redo"></Button>
            <Button onClick={handleDelete} icon="trash"></Button>
            <br></br>
            </>
        )     
     }
    
    return (
        <>
        <Form> 
            {task.completed ? renderCompleted() : renderInProgress()}
        </Form>
        </>
    )
}

export default Task;


