export default function people(state = [
    {
      key: 'Jenny Hess',
      value: 'Jenny Hess',
      text: 'Jenny Hess',

      id: '1',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/77' },
    },
    {
      key: 'Elliot Fu',
      value: 'Elliot Fu',
      text: 'Elliot Fu',
      id: '2',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/78' },
    },
    {
      key: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      id: '3',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/79' },
    },
    {
      key: 'Christian',
      value: 'Christian',
      text: 'Christian',
      id: '4',
      image: { avatar: true, src: 'https://api.adorable.io/avatars/80' },
    }
  ], action){
    switch(action.type){
        case 'ADD_PEOPLE':
                const person = {
                        name: 'Santi',
                        id: '1',
                        image: { avatar: true, src: 'https://api.adorable.io/avatars/70' },
                }
                return{
                    ...state, people: [...state, state.people.concat(person)]
                }
        default:
            return state
    }
}