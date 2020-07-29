let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let started = `Started ${month} ${day}, ${year}`

export default function projectsReducer(
    state = {
        projects: [{
            title: 'React-Redux', 
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