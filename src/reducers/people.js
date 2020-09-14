export default function people(state = [], action){
    switch(action.type){
        case 'LOG_IN_USER':
                const currentUser = {
                        currentUser: action.userObj
                }
                return [...state, currentUser]
        case 'LOAD_PEOPLE':
                const people = action.people.data.map(person => person.attributes)
                return [...state.concat(people)]
        default:
                return state
    }
}