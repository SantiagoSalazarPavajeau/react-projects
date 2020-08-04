import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
    render(){
        return(
            <div class="ui stackable menu">
                <div class="header item">
                    Projects Dashboard
                </div>
                    <Link to="/login" className="ui item">Login</Link>
                    <Link to="/signup" className="ui item" >Signup</Link>
                    <Link to="/profile" className="ui item" >Profile</Link>
                    <a class="ui item right"> Logout </a>

            </div>
            
        )
    }
}