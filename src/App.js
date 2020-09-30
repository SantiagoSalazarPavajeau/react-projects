import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';


import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';

import Projects from './containers/Projects';
// import Profile from './components/Profile';
// import Tasks from './containers/Tasks';
import People from './containers/People';

import {fetchProjects} from './actions/projectActions'
import {deletePerson, fetchPeople, loginUser} from './actions/peopleActions'
import {fetchTasks} from './actions/tasksActions'

import Signup from './components/people/Signup';
import Login from './components/people/Login';
import Profile from './components/people/Profile';






const App = () => {
  const [state, setState] = useState({ auth: { currentUser: {} }, loggedIn: false, loading: true })
  // state = { auth: { currentUser: {} }, showTasksModal: false, loggedIn: false, loading: true };

  const dispatch = useDispatch()

  const props = useSelector(state => state)

  useEffect( 
    () => {
      dispatch(fetchProjects())
      dispatch(fetchPeople())
      dispatch(fetchTasks())


      const token = localStorage.getItem("token");
      
      if (token) {
        dispatch(loginUser()).then((user) => {
          const currentUser = { currentUser: user };

          setState({...state,  auth: currentUser });
        });
      }
    }, []
  )

  const handleLogin = (user) => {
    const currentUser = { currentUser: user };
    // localStorage.setItem("token", user.token);

    setState({ ...state, auth: currentUser, loggedIn: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setState({...state, auth: { currentUser: {} }, loggedIn: false });
  };

  const deletePersonCallback = (id) => {
    dispatch(deletePerson(id))
  }

  
    return (
      <>
        <Router >
          <div className="flexbox">

              <SideBar/>

              <div className="main">

                <NavBar currentUser={state.auth.currentUser} handleLogout={handleLogout} loggedIn={state.loggedIn}/> 
              {/* send the current user and loggedin state to navbar to show or hide navbar buttons */}
                <div className="ui container">

                      <Route exact path="/" render={(routerProps) => {
                        return (
                          state.loggedIn ?  <Profile {...routerProps} people={props.people} tasks={props.tasks} projects={props.projects} deletePerson={props.deletePerson}currentUser={state.auth.currentUser}editProject={props.editProject} addTask={props.addTask} deleteTask={props.deleteTask} editTask={props.editTask}/> : <Login {...routerProps} handleLogin={handleLogin} />
                        );
                      }}/>

                      <Route exact path="/projects" 
                       render={routerProps => {
                         return (
                       <Projects {...routerProps}/>)
                      }}/> 
                  

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
                          <Login {...routerProps} handleLogin={handleLogin} />
                        );
                      }}/>

                      <Route exact path={`/profile`} 
                       render={(routerProps) => {
                          if(state.loggedIn){
                            return (                        
                              <Profile {...routerProps} 
                              // people={props.people}
                              // tasks={props.tasks}
                              // projects={props.projects}
                              deletePersonCallback={deletePersonCallback}
                              currentUser={state.auth.currentUser}
                              editProject={props.editProject} 
                              addTask={props.addTask} 
                              deleteTask={props.deleteTask} 
                              editTask={props.editTask}
                              handleLogout={handleLogout}
                              />
                            )
                          } else{
                            return (
                              <Login {...routerProps} handleLogin={handleLogin} />
                              )
                          }
                      }}/>


                      
                    {/* </Switch>  */}
                </div>                                            
              </div>
          </div> 
        </Router>
      </>
    );
}

// const mapStateToProps = state => {
//   return{
//     projects: state.projects,
//     people: state.people,
//     tasks: state.tasks
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//       fetchProjects: () => dispatch(fetchProjects()),
//       fetchPeople: () => dispatch(fetchPeople()),
//       fetchTasks: () => dispatch(fetchTasks()),
//       loginUser: () => dispatch(loginUser()),
//       deletePerson: (id) => dispatch(deletePerson(id)),
//       editProject: project => dispatch(editProject(project)),
//       addTask: project_id => dispatch(addTask(project_id)),
//       deleteTask: id => dispatch(deleteTask(id)),
//       editTask: task => dispatch(editTask(task))
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);

export default App;
