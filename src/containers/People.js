import React, {Component} from 'react';
import { connect } from 'react-redux';

class People extends Component{
    render(){
        return (<h1>People</h1>)
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addPerson: person => dispatch({type: 'ADD_PERSON', person})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);