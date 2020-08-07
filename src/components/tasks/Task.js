import React from 'react';
import { Input, Button, Dropdown, Label } from 'semantic-ui-react';

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/jenny@adorable.io.png' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/elliot@adorable.io.png' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/stevie@adorable.io.png' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/christian@adorable.io.png' },
    }
  ]

const Task = ({description, completed}) => {
    let toggle = completed
    const makeCompleted = () => {
        toggle = true
        console.log(toggle)
    }

    const makeInProgress = () => {
        toggle = false
        console.log(toggle)
    }
    
    const renderInProgress = () => {
        return (
            <>
            <br></br>
            <Button onClick={makeCompleted} icon="check circle"></Button>  <Input value={description} placeholder={description}></Input> 
            <Dropdown placeholder='Assign to...' search selection options={friendOptions} />
            <br></br>
            </>

        )
    }
     const renderCompleted = () => {
        return (
            <>
            <br></br>
            <Button onClick={makeInProgress} icon="check circle"></Button>   <Label color='green' image>{description}</Label>
            <br></br>
            </>
        )     
     }
    
    return  (
            <>
            {toggle ? renderCompleted() : renderInProgress()}
            </>
    )
}

export default Task