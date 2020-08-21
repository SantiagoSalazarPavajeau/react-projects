import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import { connect } from 'react-redux';


import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';

import Projects from './containers/Projects';
// import Profile from './components/Profile';
import Tasks from './containers/Tasks';
import People from './containers/People';

import {fetchProjects} from './actions/projectActions'
import {fetchPeople} from './actions/peopleActions'
import {fetchTasks} from './actions/tasksActions'





class App extends Component{

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchPeople()
    this.props.fetchTasks()
  }
  
  render(){
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="flexbox">
              <SideBar/>
              <div className="main">
              <NavBar/>
                <div className="ui container">

                    {/* <Switch> */}
                      <Route exact path="/">
                      <div className="ui grid container">
                        <div className="twelve wide column" >
                        <h1>Welcome to your team's Projects Dashboard </h1>
                        </div>
                      </div>
                      </Route>
                      <Route exact path="/login">
                        <p>Login</p>
                      </Route>

                      <Route exact path="/projects" render={routerProps => <Projects {...routerProps}/>}/> 
                      {/* I sent router props to have acces to match */}

                      <Route exact path={`/${"project"}-:id`} render={routerProps => <Tasks {...routerProps} />} >
                        {/* {console.log(this.props.tasks)} */}
                      </Route>

                      <Route exact path={`/people`}>
                        <People />
                      </Route>
                      
                    {/* </Switch>  */}
                </div>                                            
              </div>
          </div> 
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return{
    projects: state.projects,
    people: state.people,
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchProjects: () => dispatch(fetchProjects()),
      fetchPeople: () => dispatch(fetchPeople()),
      fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
