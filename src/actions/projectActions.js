
export function fetchProjects(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'})
            fetch('https://secure-shelf-48338.herokuapp.com/projects')
                .then(response => {return response.json()})
                .then(projects => {
                    console.log(projects)
                    dispatch({type: 'LOAD_PROJECTS', projects})
                })
                .catch(error => console.log(error.message))
    }
}