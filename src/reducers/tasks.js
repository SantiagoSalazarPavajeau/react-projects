import cuid from 'cuid';


export default function tasks(state = [{ 
    description: "Apply Redux Thunk for async connection to backend",
    id: '1',
    projectId: '1', 
    peopleId: 'Jenny Hess', 
    completed: true
},{ 
    description: "Add difficulty attribute, and other dashboard widgets", 
    id: '2',
    projectId: '1', 
    peopleId: 'Elliot Fu', 
    completed: false
},{ 
    description: "I dont belong in project 1",
    id: '3',
    projectId: '2', 
    peopleId: '3', 
    completed: false
}], action){
    switch(action.type){
        case 'ADD_TASK':
                // console.log(state.tasks)
                const task = {
                    description: "New task...",
                    id: cuid(),
                    projectId: action.projectId,
                    peopleId: 'Someone', 
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
            default:
                return state;
    }
}

