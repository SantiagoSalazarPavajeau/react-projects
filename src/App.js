import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";
import { connect } from 'react-redux';


import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Projects from './containers/Projects';
import Profile from './components/Profile';
import Tasks from './containers/Tasks';
import People from './containers/People';

import {fetchProjects} from './actions/projectActions'
import {fetchPeople} from './actions/peopleActions'





class App extends Component{

  componentDidMount(){
    this.props.fetchProjects()
    this.props.fetchPeople()
  }
  
  render(){
    return (
      <>
        <Router>
          <div className="flexbox">
              <SideBar/>

              <div className="main">
              <NavBar/>


                <div className="ui container">

                    {/* <Switch> */}
                      <Route exact path="/" render={()=> <Profile/>}>
                      </Route>
                      <Route exact path="/login">
                        <p>Login</p>
                      </Route>

                      <Route exact path="/projects" render={routerProps => <Projects {...routerProps} projects={this.props.projects}/>}/> 
                      {/* I sent router props to have acces to match */}

                      <Route exact path={`/projects/:id`} render={routerProps => <Tasks {...routerProps}/>} >
                        {/* <Tasks/> */}
                      </Route>

                      <Route exact path={`/people`}>
                        <People people={this.props.people} />
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
    people: state.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchProjects: () => dispatch(fetchProjects()),
      fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
