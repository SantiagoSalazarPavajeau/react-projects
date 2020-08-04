import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css'

import TasksModal from '../components/tasks/TasksModal';


// nested route for tasks needs to be here

class Tasks extends Component{
    render(){
        return (
            <Route path={`${this.props.match.url}/:project_id`} component={TasksModal}/>
            // <TasksModal/>
        )
    }
}
export default connect()(Tasks)