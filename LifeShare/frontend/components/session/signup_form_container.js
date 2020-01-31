import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_actions';

const mSTP = ( { errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to='/login'>Log In</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mSTP, mDTP)(SignupForm);