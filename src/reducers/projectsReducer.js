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
            default:
                return state
        }

}