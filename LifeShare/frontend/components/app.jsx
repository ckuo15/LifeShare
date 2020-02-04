import React from "react";
import LogInFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';
import Splash from './session/splash_page';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import Mainpage from './mainpage';
import ProfileContainer from './profile/profile_container';

const App = (props) => {
    let renderedComponent;
    if (props.currentUser){
        renderedComponent = Mainpage;
    } else {
        renderedComponent = Splash;
    };

    return (
        <div>
            <Route exact path='/' component={renderedComponent}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <AuthRoute exact path='/login' component={LogInFormContainer} />
            <ProtectedRoute exact path='/testing' component={ProfileContainer}/>
            <ProtectedRoute path='/user/:userId'component={ProfileContainer}/>
        </div>
    )
}

export default App;

// '/' is sign up

// if current user, then make the feed component the /
// if not make the sign up the /