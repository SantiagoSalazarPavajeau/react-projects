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