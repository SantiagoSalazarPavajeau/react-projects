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
        projects: [{
            title: 'React-Redux', 
            started: started,
            description: 'Build with project requirements',
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
            default:
                return state
        }

}