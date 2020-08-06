import cuid from 'cuid';
export const cuidFn = cuid;
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = date.getDate()
let started = `Started ${months[month]} ${day}, ${year}`

export default function projectsReducer(
    state = {
        projects: projects
    },
    action){
        switch(action.type){
            case 'ADD_PROJECT':
                const project = {
                    title: action.project.title,
                    started: started,
                    description: action.project.description,
                    id: cuid()
                }
                return{
                    ...state, projects: [...state.projects.concat(project)]
                }
            case 'DELETE_PROJECT':
                return{
                    ...state, projects: [...state.projects.filter(project => project.id !== action.id)]
                }
            case 'EDIT_PROJECT':
                let index = state.projects.findIndex(project => project.id === action.project.id)
                return{
                    ...state, projects: [...state.projects.slice(0, index), action.project, ...state.projects.slice(index + 1)]
                }
            case 'ADD_TASK':
                return{
                    ...state, tasks: [...state.tasks.concat(action.task)]
                }
            default:
                return state
        }

}

let projects = [{
    title: 'React-Redux',
    started: started,
    description: 'Build edit and show button by linking it to the tasks modal. These links will have to be to the nested routes',
    id: cuid()
}, {
    title: 'JavaScript-Rails', 
    started: started,
    description: 'Build with project requirements',
    id: cuid()
}, {
    title: 'Ruby on Rails', 
    started: started,
    description: 'Build with project requirements',
    id: cuid()
}, {
    title: 'Sinatra', 
    started: started,
    description: 'Build with project requirements',
    id: cuid()
}]


