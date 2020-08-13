export default function people(state = [], action){
    switch(action.type){
        case 'ADD_PEOPLE':
                const person = {
                        name: 'Santi',
                        id: '1',
                        image: { avatar: true, src: 'https://api.adorable.io/avatars/70' },
                }
                return [...state, person]
        case 'LOAD_PEOPLE':
          const people = action.people.data.map(person => person.attributes)
          return [...state.concat(people)]
        default:
            return state
    }
}