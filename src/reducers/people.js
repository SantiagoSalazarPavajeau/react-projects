export default function people(state = [
    {
      name: 'Jenny Hess',
      id: '1',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77' },
    },
    {
      name: 'Elliot Fu',
      id: '2',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/78' },
    },
    {
      name: 'Stevie Feliciano',
      id: '3',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/79' },
    },
    {
      name: 'Christian',
      id: '4',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/80' },
    }
  ], action){
    switch(action.type){
        case 'ADD_PEOPLE':
                const person = {
                        name: 'Santi',
                        id: '1',
                        image: { avatar: true, src: 'https://api.adorable.io/avatars/77/jenny@adorable.io.png' },
                }
                return{
                    ...state, people: [...state, state.people.concat(person)]
                }
        default:
            return state
    }
}