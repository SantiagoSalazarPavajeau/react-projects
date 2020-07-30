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
            description: 'Build with project requirements'
        }, {
            title: 'JavaScript-Rails', 
            started: started,
            description: 'Build with project requirements'
        }, {
            title: 'Ruby on Rails', 
            started: started,
            description: 'Build with project requirements'
        }, {
            title: 'Sinatra', 
            started: started,
            description: 'Build with project requirements'
        }]
    }, 
    action){
        switch(action.type){
            case 'ADD_PROJECT':
                const project = {
                    title: action.title,
                    started: started,
                    description: 'cool description'
                }
                return{
                    ...state, projects: [...state.projects.concat(project)]
                }
            default:
                return state
        }

}