import React from 'react';
import { Link } from 'react-router-dom';



const Landing = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="landing-page-info">
            {/* <Link to="/login">Login</Link>
            &nbsp;or&nbsp; */}
          
            <Link className='signup-form-link' to="/signup"><div id='signup-form-link'>Sign up for free</div> </Link> 
                
               
          
                
            
            
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Landing;