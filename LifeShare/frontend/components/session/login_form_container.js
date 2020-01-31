import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { clearSessionErrors } from '../../actions/session_actions';


const mapStateToProps = ( { errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>  
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);