export default function people(state = [
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