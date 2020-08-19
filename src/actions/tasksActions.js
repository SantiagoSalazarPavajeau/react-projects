const URL ='https://secure-shelf-48338.herokuapp.com/'

export function fetchTasks(){
    return (dispatch) => {
            fetch(`${URL}/tasks`)
                .then(response => {return response.json()})
                .then(tasks => {
                    // console.log(tasks)
                    dispatch({type: 'LOAD_TASKS', tasks}) // Have to access the data structure from the rails API correctly
                })
                .catch(error => console.log(error.message))
    }
}

export function addTask(project_id){
    
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            description: "New task...",
            project_id: project_id,
            person_id: 1,  // person_id needed for ActiveRecord to commit task to database
            completed: false
        })
      };
    console.log('b')
    return (dispatch) => {
        console.log('c')
        fetch(`${URL}/tasks`, configObj)
            .then(response => {return response.json()})
            .then(task => {
                // console.log(project)
                console.log('d')
                const newTask = task.data.attributes 
                console.log(task)
                dispatch({type: 'ADD_TASK', newTask}) 
            })
        console.log('e')
    }
}

export function deleteTask(id){
    const configObj = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
    return (dispatch) => {
        fetch(`${URL}/tasks/${id}`, configObj)
            .then(response => {return response.json()})
            .then(() => {
                dispatch({type: 'DELETE_TASK', id})
            })
    }
}

export function editTask(task){
    const configObj = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            description: task.description,
            person_id: parseInt(task.person_id),
            project_id: task.project_id,
            completed: task.completed
        })
      };
    return (dispatch) => {
        fetch(`${URL}/tasks/${task.id}`, configObj)
            .then(response => {return response.json()})
            .then(editedTask => {
                console.log(editedTask)
                let task = editedTask.data.attributes
                dispatch({type: 'EDIT_TASK', task}) // a task can have data that references tasks and tasks have data that references people
            })
    }
}