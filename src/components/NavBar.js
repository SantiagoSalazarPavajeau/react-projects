import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
    render(){
        return(
            <div class="ui labeled icon menu">
                <div class="header item">Project Manager</div>
                    <Link to="/login" ><a class="ui item">Login</a></Link>
                    <Link to="/signup" ><a class="ui item">Signup</a></Link>
                    <Link to="/profile" ><a class="ui item">Profile</a></Link>         
            </div>
            
        )
    }
}