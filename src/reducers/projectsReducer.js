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
        tasks: tasks,
        people: people
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
                let projectIndex = state.projects.findIndex(project => project.id === action.project.id)
                return{
                    ...state, projects: [...state.projects.slice(0, projectIndex), action.project, ...state.projects.slice(projectIndex + 1)]
                }
            case 'ADD_TASK':
                // console.log(state.tasks)
                const task = {
                    description: "New task...",
                    id: cuid(),
                    projectId: action.projectId, 
                    peopleId: null, 
                    completed: null
                }
                // console.log(task)
                return{
                    ...state, tasks: [...state.tasks.concat(task)]
                }
            case 'DELETE_TASK':
                return{
                    ...state, tasks: [...state.tasks.filter(task => task.id !== action.id)]
                }
            case 'EDIT_TASK':
                let taskIndex = state.tasks.findIndex(task => task.id === action.task.id)
                console.log(action.task)
                return{
                    ...state, tasks: [...state.tasks.slice(0, taskIndex), action.task, ...state.tasks.slice(taskIndex + 1)]
                }
            case 'ADD_PEOPLE':
                return{
                    ...state, people: [...state, state.people.concat(person)]
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
    description: "Save edits on tasks through event listeners",
    id: '1',
    projectId: '1', 
    peopleId: '1', 
    completed: null
},{ 
    description: "Fix the event mess from the tasks input area", 
    id: '2',
    projectId: '1', 
    peopleId: '2', 
    completed: false
},{ 
    description: "I dont belong in project 1",
    id: '3',
    projectId: '2', 
    peopleId: '3', 
    completed: false
}]

let people = [
    {
      name: 'Jenny Hess',
      id: '1',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/jenny@adorable.io.png' },
    },
    {
      key: 'Elliot Fu',
      id: '2',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/elliot@adorable.io.png' },
    },
    {
      key: 'Stevie Feliciano',
      id: '3',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/stevie@adorable.io.png' },
    },
    {
      key: 'Christian',
      id: '4',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77/christian@adorable.io.png' },
    }
  ]