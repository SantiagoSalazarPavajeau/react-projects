export function fetchPeople(){
    return (dispatch) => {
            fetch('http://localhost:4000/people')
                .then(response => {return response.json()})
                .then(people => {
                    // console.log(projects)
                    dispatch({type: 'LOAD_PEOPLE', people}) // Have to access the data structure from the rails API correctly
                })
                .catch(error => console.log(error.message))
    }
}