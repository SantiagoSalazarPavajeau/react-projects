import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props)=>{
        return(
            <div className="ui stackable menu">
                <div className="header item">
                    Projects Dashboard
                </div>
                    {localStorage.token ? null : <Link to="/login" className="ui item">Login</Link>}
                    {localStorage.token ? null : <Link to="/signup" className="ui item" >Signup</Link>}
                    {localStorage.token ? <Link to="/profile" className="ui item" >Profile</Link> : null }
                    {localStorage.token ? <Link className="ui item right" onClick={e => props.handleLogout(e)}> Logout </Link> : null}

            </div>
            
        )
}

export default NavBar;