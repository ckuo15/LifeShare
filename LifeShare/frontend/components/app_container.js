import { connect } from 'react-redux';
import App from './app';

const mSTP = (state) => ({
    currentUser: state.session.id
});

export default connect(mSTP)(App);
