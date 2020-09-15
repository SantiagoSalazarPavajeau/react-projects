// const URL ='https://secure-shelf-48338.herokuapp.com/'
const URL ='http://localhost:3001'

export function fetchPeople(){
    return (dispatch) => {
            fetch(`${URL}/people`)
                .then(response => {return response.json()})
                .then(people => {
                    // console.log(projects)
                    dispatch({type: 'LOAD_PEOPLE', people}) // Have to access the data structure from the rails API correctly
                })
                .catch(error => console.log(error.message))
    }
}

export const createUser = user => {
    return dispatch => {
      return fetch(`${URL}/people`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        .then((person) => {
          const newPerson = person.data.attributes
          dispatch({type: "ADD_PERSON", newPerson})
        })

    }
  }

  export const loginUser = user => {
    return dispatch => {
      return fetch(`${URL}/auth`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
        .then(resp => resp.json())
        // .then(data => {
        //   console.log(data)
        //   if (data.message) {
        //     console.log(data.message)
        //     // Here you should have logic to handle invalid creation of a user.
        //     // This assumes your Rails API will return a JSON object with a key of
        //     // 'message' if there is an error with creating the user, i.e. invalid username
        //   } else {
        //     // localStorage.setItem("token", data.token)
        //     // dispatch({type: 'LOGIN_USER', userObj: data.payload})
        //   }
        // })
    }
  }


}