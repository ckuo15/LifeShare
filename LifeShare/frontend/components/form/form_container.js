import { connect } from 'react-redux';
import React from 'react';
import Form from './form';
import { fetchUser, updateUser } from '../../actions/user_actions';


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    sessionId: state.session.id
});

const mDTP = dispatch => ({
    updateUser: (formData, sessionId) => dispatch(updateUser(formData, sessionId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mSTP,mDTP)(Form);