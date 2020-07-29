import React, {Component} from 'react';

export default class NavBar extends Component{
    render(){
        return(
            <div class="ui menu">
                <div class="header item">Project Manager</div>
                <a class="item">Login</a>
                <a class="item">Signup</a>
                <a class="item">Profile</a>
            </div>
        )
    }
}