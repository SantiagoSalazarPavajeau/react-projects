export function fetchProjects(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'})
            fetch('localhost:3000/projects')
    }
}