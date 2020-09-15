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

import {fetchProjects, editProject} from './actions/projectActions'
import {fetchPeople, loginUser, deletePerson} from './actions/peopleActions'
import {fetchTasks, addTask, deleteTask, editTask} from './actions/tasksActions'

import Signup from './components/people/Signup';
import Login from './components/people/Login';
import Profile from './components/people/Profile';






class App extends Component{

  state = { auth: { currentUser: {} }, showTasksModal: false };

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
    // localStorage.setItem("token", user.token);

    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };


  handleHideTasksModal = () => {
    this.setState({ showTasksModal: false})
  }
  
  render(){
    return (
      <>
      {/* {console.log(this.state)} */}
        <Router >
          <div className="flexbox">
              <SideBar/>
              <div className="main">
              <NavBar currentUser={this.state.auth.currentUser} handleLogout={this.handleLogout}/> 
              {/* send the current user to navbar to show or hide navbar buttons */}
                <div className="ui container">

                    {/* <Switch> */}
                      <Route exact path="/" render={(routerProps) => {
                        return (
                          this.state.auth.currentUser.username ?  <Profile {...routerProps} people={this.props.people} tasks={this.props.tasks} projects={this.props.projects} deletePerson={this.props.deletePerson}currentUser={this.state.auth.currentUser}editProject={this.props.editProject} addTask={this.props.addTask} deleteTask={this.props.deleteTask} editTask={this.props.editTask}/> : <Login {...routerProps} handleLogin={this.handleLogin} />
                        );
                      }}/>

                      <Route exact path="/projects" 
                       render={routerProps => {
                         return (
                       <Projects {...routerProps}/>)
                      }}/> 
                      
                      {/* I sent router props to have acces to match */}

                      <Route exact path={`/${"project"}-:id`} 
                       render={routerProps => {
                        return (
                       <Tasks {...routerProps} />)
                       }} >
                        {/* move this to the projects view and don't create a new route */}
                      </Route>

                      <Route exact path={`/people`}>
                        <People />
                      </Route>

                      <Route exact path={`/signup`}
                       render={(routerProps) => {
                        return (
                          <Signup {...routerProps} />
                        );
                      }}/>

                      <Route exact path={`/login`} 
                       render={(routerProps) => {
                        return (
                          <Login {...routerProps} handleLogin={this.handleLogin} />
                        );
                      }}/>

                      <Route exact path={`/profile`} 
                       render={(routerProps) => {
                        return (
                          <Profile {...routerProps} 
                          people={this.props.people}
                          tasks={this.props.tasks}
                          projects={this.props.projects}
                          deletePerson={this.props.deletePerson}
                          currentUser={this.state.auth.currentUser}
                          editProject={this.props.editProject} 
                          addTask={this.props.addTask} 
                          deleteTask={this.props.deleteTask} 
                          editTask={this.props.editTask}
                          />
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
      loginUser: () => dispatch(loginUser()),
      deletePerson: () => dispatch(deletePerson()),
      editProject: project => dispatch(editProject(project)),
      addTask: project_id => dispatch(addTask(project_id)),
      deleteTask: id => dispatch(deleteTask(id)),
      editTask: task => dispatch(editTask(task))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
