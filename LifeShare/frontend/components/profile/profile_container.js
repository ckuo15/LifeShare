import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mSTP = (state,ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mSTP,mDTP)(Profile);
