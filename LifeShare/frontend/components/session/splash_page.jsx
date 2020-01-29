import SignupForm from './signup_form_container';
import React from 'react';


class Splash extends React.Component {
    render (){
        return (
            <div className='splash-container'>
                <img className='splash-image' src={window.splashURL}/>
                <SignupForm location = {this.props.location}/>
            </div>
        )
    }
};

export default Splash;