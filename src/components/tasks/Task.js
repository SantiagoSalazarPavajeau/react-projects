import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]

const Task = ({description, completed}) => {
    const handleComplete = () => {
        completed = !completed
    }
    
    const renderInProgress = () => {
        return (
            <br></br>
            <Button onClick={handleComplete} icon="check circle"></Button>  <Input value={description} placeholder={description}></Input> 
            <Dropdown placeholder='People' search selection options={friendOptions} />
            <br></br>
        )
    }
     const renderCompleted = () => {
         
     }
    
    return  (
            <div>
                {completed ? renderCompleted : renderInProgress}
            </div>
    )
}

export default Task