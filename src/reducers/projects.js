import cuid from 'cuid';
export const cuidFn = cuid;
let date = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let started = `Started ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`


export default function projects(
    state = [{
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
                return{
                    ...state, projects: [...state.projects.concat(project)]
                }
            case 'DELETE_PROJECT':
                return{
                    ...state, projects: [...state.projects.filter(project => project.id !== action.id)]
                }
            case 'EDIT_PROJECT':
                let projectIndex = state.projects.findIndex(project => project.id === action.project.id)
                return{
                    ...state, projects: [...state.projects.slice(0, projectIndex), action.project, ...state.projects.slice(projectIndex + 1)]
                }
            default:
                return state
        }

}




