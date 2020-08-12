import cuid from 'cuid';
export const cuidFn = cuid;
let date = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let started = `Started ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`


export default function projects(
    state = []
    ,
    action){
        switch(action.type){
            case 'ADD_PROJECT':
                const project = {
                    title: action.project.title,
                    started: started,
                    description: action.project.description,
                    id: cuid()
                }
                return [...state, project]
                
            case 'DELETE_PROJECT':
                return{
                    ...state, projects: [...state.projects.filter(project => project.id !== action.id)]
                }
            case 'EDIT_PROJECT':
                let projectIndex = state.projects.findIndex(project => project.id === action.project.id)
                return{
                    ...state, projects: [...state.projects.slice(0, projectIndex), action.project, ...state.projects.slice(projectIndex + 1)]
                }
            case 'LOAD_PROJECTS':
                // console.log(action.projects.data)
                let projects = action.projects.data.map(project => project.attributes)
                console.log(projects)
                return projects
            default:
                return state
        }

}





