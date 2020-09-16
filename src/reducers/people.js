export default function people(state = [], action){
    switch(action.type){
        case 'ADD_PERSON':
                const person = {
                        username: action.newPerson.username,
                        image: action.newPerson.image,
                        id: action.newPerson.id
                    }
                return [...state, person]
        case 'DELETE_PERSON':
                // console.log(action.id)
                let deletedPerson;
                state.map(person => person.id !== action.id ? deletedPerson = person : null)
                // console.log(deletedPerson)
                // console.log(state.filter(person => person.username !== deletedPerson.username))
                return [...state.filter(person => person.username !== deletedPerson.username)]
        case 'LOAD_PEOPLE':
                const people = action.people.data.map(person => person.attributes)
                return [...state.concat(people)]
        default:
                return state
    }
}