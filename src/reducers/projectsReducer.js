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
        projects: projects,
        tasks: tasks
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
                console.log(state.tasks)
                let task = {
                    description: "New task...", 
                    projectId: action.projectId, 
                    peopleId: null, 
                    completed: false
                }
                return{
                    ...state, tasks: [...state.tasks.concat(task)]
                }
            default:
                return state
        }

}

let projects = [{
    title: 'React-Redux',
    started: started,
    description: 'Build edit and show button by linking it to the tasks modal. These links will have to be to the nested routes',
    id: '1'
}, {
    title: 'JavaScript-Rails', 
    started: started,
    description: 'Build with project requirements',
    id: '2'
}, {
    title: 'Ruby on Rails', 
    started: started,
    description: 'Build with project requirements',
    id: '3'
}, {
    title: 'Sinatra', 
    started: started,
    description: 'Build with project requirements',
    id: '4'
}]


let tasks = [{ 
    description: "Add tasks functionality", 
    projectId: '1', 
    peopleId: '1', 
    completed: false
}]