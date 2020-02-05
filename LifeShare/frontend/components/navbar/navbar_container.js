import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';
import { createPost } from '../../actions/post_actions'


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: () => dispatch(logout()),
        createPost: post => dispatch(createPost(post))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);