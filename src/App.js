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




class App extends Component{

  componentDidMount(){
    this.props.fetchProjects()
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
                        <People/>
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
    projects: state.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchProjects: () => dispatch(fetchProjects())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
