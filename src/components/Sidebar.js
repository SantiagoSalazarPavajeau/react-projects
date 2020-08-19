import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


// fix import
const SideBar = () => {
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
                <Link to="/people" className="item" >
                        <i aria-hidden="true" className="users icon"></i>
                        People
                </Link>
            </div>
        </div>
        )
}

export default SideBar;