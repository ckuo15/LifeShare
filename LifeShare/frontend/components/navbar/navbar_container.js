import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';
import { createPost } from '../../actions/post_actions'
import { searchUser } from '../../actions/search_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
        searchUser: state.searchUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: () => dispatch(logout()),
        createPost: post => dispatch(createPost(post)),
        searchUser: user => dispatch(searchUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);