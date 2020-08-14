export function fetchTasks(){
    return (dispatch) => {
            fetch('http://localhost:4000/tasks')
                .then(response => {return response.json()})
                .then(tasks => {
                    // console.log(projects)
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
            person_id: 1, 
            completed: false
        })
      };
    return (dispatch) => {
        fetch('http://localhost:4000/tasks', configObj)
            .then(response => {return response.json()})
            .then(task => {
                // console.log(project)
                const newTask = task.data.attributes // async response from server adds project
                console.log(task)
                dispatch({type: 'ADD_TASK', newTask}) // a project can have data that references tasks and tasks have data that references people
            })
    }
}