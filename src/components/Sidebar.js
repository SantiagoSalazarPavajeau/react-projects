import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";



export default class SideBar extends Component{
    render(){
        return(
        <div class="sidebar">
            <div class="ui left vertical inverted icon visible sidebar menu">
                <Link to="/" >
                    <a class="item">
                        <i aria-hidden="true" class="home icon"></i>
                        Home
                    </a>
                </Link>
                <Link to="/projects" >
                    <a class="item">
                        <i aria-hidden="true" class="sitemap icon"></i>
                        Projects
                    </a>
                </Link>
                <Link to="/calendar" >
                    <a class="item">
                        <i aria-hidden="true" class="calendar icon"></i>
                        Calendar
                    </a>
                </Link>
            </div>
        </div>
        )
    }
}