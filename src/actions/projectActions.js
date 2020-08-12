import projects from "../reducers/projects"

export function fetchProjects(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'})
            fetch('http://localhost:4000/projects')
                .then(response => {return response.json()})
                .then(projects => {
                    // console.log(projects)
                    dispatch({type: 'LOAD_PROJECTS', projects}) // Have to access the data structure from the rails API correctly
                })
                .catch(error => console.log(error.message))
    }
}

export function saveProject(project){
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
            title: project.title,
            description: project.description
        })
      };
    return (dispatch) => {
        fetch('http://localhost:4000/projects', configObj)
            .then(response => {return response.json()})
            .then(projects => {
                dispatch({type: 'ADD_PROJECT', project}) // a project can have data that references tasks and tasks have data that references people
            })
    }
}