import { URL } from '../index.js'

export function fetchProjects(){
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'})
            fetch(`${URL}/projects`)
                .then(response => {return response.json()})
                .then(projects => {
                    // console.log(projects)
                    dispatch({type: 'LOAD_PROJECTS', projects}) // Have to access the data structure from the rails API correctly
                })
                .catch(error => console.log(error))
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
        fetch(`${URL}/projects`, configObj)
            .then(response => {return response.json()})
            .then(project => {
                // console.log(project)
                const newProject = project.data.attributes // async response from server adds project
                dispatch({type: 'ADD_PROJECT', newProject}) // a project can have data that references tasks and tasks have data that references people
            })
    }
}

export function deleteProject(id){
    const configObj = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      };
    return (dispatch) => {
        fetch(`${URL}/projects/${id}`, configObj)
            .then(response => {return response.json()})
            .then(() => {
                dispatch({type: 'DELETE_PROJECT', id}) // a project can have data that references tasks and tasks have data that references people
            })
    }
}

export function editProject(project){
    const configObj = {
        method: "PATCH",
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
        fetch(`${URL}/projects/${project.id}`, configObj)
            .then(response => {return response.json()})
            .then(editedProject => {
                // console.log(editedProject)
                let project = editedProject.data.attributes
                dispatch({type: 'EDIT_PROJECT', project}) // a project can have data that references tasks and tasks have data that references people
            })
    }
}