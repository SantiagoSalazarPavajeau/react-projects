

export default function tasks(state = [], action){
    switch(action.type){
        case 'ADD_TASK':
                console.log(action.task)
                console.log(state)
                return[...state.concat(action.newTask)]
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

