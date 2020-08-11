
export function fetchProjects(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'})
            fetch('http://localhost:4000/projects')
                .then(response => {return response.json()})
                .then(projects => {
                    console.log(projects)
                    dispatch({type: 'LOAD_PROJECTS', projects})
                })
                .catch(error => console.log(error.message))
    }
}