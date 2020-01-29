import SignupForm from './signup_form_container';
import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
    render (){
        return (
            <div>
                <img src="/assets/image1.png"/>
                <SignupForm location = {this.props.location}/>
            </div>
        )
    }
};

export default Splash;