import cuid from 'cuid';


export default function tasks(state = [], action){
    switch(action.type){
        case 'ADD_TASK':
                // console.log(state.tasks)
                const task = {
                    description: "New task...",
                    id: cuid(),
                    project_id: action.project_id,
                    people_id: null, 
                    completed: false
                }
                // console.log(task)
                return[
                    ...state.concat(task)
                ]
            case 'DELETE_TASK':
                return{
                    ...state, tasks: [...state.tasks.filter(task => task.id !== action.id)]
                }
            case 'EDIT_TASK':
                let taskIndex = state.findIndex(task => task.id === action.task.id)
                console.log(action.task)
                return[...state.slice(0, taskIndex), action.task, ...state.slice(taskIndex + 1)]
            case 'LOAD_TASKS':
                const tasks = action.tasks.data.map(task => task.attributes)
                return [...state.concat(tasks)]
            default:
                return state;
    }
}

