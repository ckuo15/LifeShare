import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar.jsx';


const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);