import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../App.css";



export default class SideBar extends Component{
    render(){
        return(
        <div className="sidebar">
            <div className="ui left vertical inverted icon visible sidebar menu">
                <Link to="/" className="item">
                        <i aria-hidden="true" className="home icon"></i>
                        Home
                </Link>
                <Link to="/projects" className="item" >
                        <i aria-hidden="true" className="sitemap icon"></i>
                        Projects
                </Link>
                <Link to="/calendar" className="item" >
                        <i aria-hidden="true" className="calendar icon"></i>
                        Calendar
                </Link>
            </div>
        </div>
        )
    }
}