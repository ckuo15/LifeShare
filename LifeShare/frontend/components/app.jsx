import React from "react";
import LogInFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Splash from './session/splash_page';
import {AuthRoute} from '../utils/route_util';
import navBar from './navbar/navbar';

const App = (props) => {
    if (props.currentUser){
        // <ProtectedRoute exact path='/' component={feed}/>
    } else {
        // render splash
        return (
            <div>
                <Route exact path='/' component={Splash}/>
                <AuthRoute exact path='/signup' component={SignupFormContainer}/>
                <AuthRoute exact path='/login' component={LogInFormContainer} />
                <Route path='/testing' component={navBar}/>
            </div>
        )
    }
}

export default App;

// '/' is sign up

// if current user, then make the feed component the /
// if not make the sign up the /