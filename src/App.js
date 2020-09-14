import React, { Component } from 'react';
import {
  HashRouter as Router,
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
import {fetchPeople, loginUser} from './actions/peopleActions'
import {fetchTasks} from './actions/tasksActions'
import Signup from './components/people/Signup';
import Login from './components/people/Login';





class App extends Component{

  state = { auth: { currentUser: {} } };

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchPeople()
    this.props.fetchTasks()

    const token = localStorage.getItem("token");

    if (token) {
      this.props.loginUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }

  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };
  
  render(){
    return (
      <>
      {console.log(this.state)}
        <Router >
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

                      <Route exact path="/projects" render={routerProps => <Projects {...routerProps}/>}/> 
                      {/* I sent router props to have acces to match */}

                      <Route exact path={`/${"project"}-:id`} render={routerProps => <Tasks {...routerProps} />} >
                        {/* move this to the projects view and don't create a new route */}
                      </Route>

                      <Route exact path={`/people`}>
                        <People />
                      </Route>
                      <Route exact path={`/signup`}>
                        <Signup/>
                      </Route>
                      <Route exact path={`/login`} 
                       render={(routerProps) => {
                        return (
                          <Login {...routerProps} handleLogin={this.handleLogin} />
                        );
                      }}/>
                      
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
      fetchTasks: () => dispatch(fetchTasks()),
      loginUser: () => dispatch(loginUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
