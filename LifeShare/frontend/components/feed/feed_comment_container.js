import { connect } from 'react-redux';
import FeedComment from './feed-comment';
import { requestComments, requestComment, createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  comments: state.comments
});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(FeedComment));