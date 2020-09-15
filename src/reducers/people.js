export default function people(state = [], action){
    switch(action.type){
        case 'ADD_PERSON':
                const person = {
                        username: action.newPerson.username,
                        image: action.newPerson.image,
                        id: action.newPerson.id
                    }
                return [...state, person]
        case 'LOAD_PEOPLE':
                const people = action.people.data.map(person => person.attributes)
                return [...state.concat(people)]
        default:
                return state
    }
}