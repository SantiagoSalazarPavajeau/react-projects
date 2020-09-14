const URL ='https://secure-shelf-48338.herokuapp.com/'

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

