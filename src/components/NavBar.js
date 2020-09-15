import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props)=>{
        return(
            <div className="ui stackable menu">
                <div className="header item">
                    Projects Dashboard
                </div>
                    {console.log(props.currentUser)}
                    {props.currentUser.error ? <Link to="/login" className="ui item">Login</Link> : null}
                    {props.currentUser.error ? <Link to="/signup" className="ui item" >Signup</Link> : null}
                    {props.currentUser.error ? null : <Link to="/profile" className="ui item" >Profile</Link>  }
                    {props.currentUser.error ? null : <Link to="/logout" className="ui item right"> Logout </Link>}

            </div>
            
        )
}

export default NavBar;