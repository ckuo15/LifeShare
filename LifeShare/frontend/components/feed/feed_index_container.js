import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestFeedPosts} from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  posts: Object.values(state.posts)
});

const mDTP = dispatch => ({
  requestFeedPosts: () => dispatch(requestFeedPosts())
});

export default withRouter(connect(mSTP, mDTP)(FeedIndex));

//different ajax request. doing index.