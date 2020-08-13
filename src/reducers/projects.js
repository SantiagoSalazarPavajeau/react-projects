import cuid from 'cuid';
export const cuidFn = cuid;


export default function projects(
    state = []
    ,
    action){
        switch(action.type){
            case 'ADD_PROJECT':
                const project = {
                    title: action.newProject.title,
                    started: '',
                    description: action.newProject.description,
                    id: action.newProject.id
                }
                return [...state, project]
            case 'DELETE_PROJECT':
                return [...state.filter(project => project.id !== action.id)]
            case 'EDIT_PROJECT':
                let projectIndex = state.findIndex(project => project.id === action.project.id) //state is empty if load projects does not include state
                return [...state.slice(0, projectIndex), action.project, ...state.slice(projectIndex + 1)]
            case 'LOAD_PROJECTS':
                // console.log(action.projects.data)
                let projects = action.projects.data.map(project => project.attributes)
                // console.log(...state, projects)
                return [...state.concat(projects)] // this sets state to include the projects. if we only return the projects object, state will be empty on other actions
            case 'LOADING_PROJECTS':
                return [...state]
            default:
                return state
        }

}





