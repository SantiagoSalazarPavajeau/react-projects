import { combineReducers } from 'redux'
import projects from './projects'
import tasks from './tasks'
import people from './people'

export default combineReducers({
    projects,
    tasks,
    people
})

