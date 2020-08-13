import React, {Component} from 'react';
import { connect } from 'react-redux';

import Person from '../components/people/Person'

class People extends Component{

    renderPeople = () => {
    return this.props.people.map(person => <Person key={person.id} name={person.key} image={person.image} tasks={this.props.tasks}></Person>)
    }

    render(){
        return (
            <div className="ui grid container">
                {/* {console.log(this.props.people[0])} */}
                {this.renderPeople()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addPerson: person => dispatch({type: 'ADD_PERSON', person})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);