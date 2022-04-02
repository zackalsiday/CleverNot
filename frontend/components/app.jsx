import React from "react"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import LandingContainer from './landing/landing_container'
import { Switch} from 'react-router-dom'
import { AuthRoute } from "../util/route_util";
import {Route, ProtectedRoute} from 'react-router-dom'
const App = () => (

    <div>
        <Switch>
            <Route exact path="/" component={LandingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>

);

export default App;