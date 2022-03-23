import React from "react"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LandingContainer from './landing/landing_container'
import { Switch} from 'react-router-dom'
import { AuthRoute } from "../util/route_util";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
const App = () => (

    <div>
        <header>
            <div className='landing-top'>
                <span className='main-title'>CleverNote</span>
                <Link to="/login">Login</Link>
            </div>
            
            <LandingContainer/> 
        </header>
        
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
       
        </Switch>
       
       
        
    </div>
);

export default App;