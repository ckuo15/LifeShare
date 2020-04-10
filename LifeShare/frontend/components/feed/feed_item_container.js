import { connect } from 'react-redux';
import FeedIndexItem from './feed_item';
import { requestPost, updatePost, deletePost, requestPosts } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  currentUserId: state.session.id,
  comments: state.comments
});

const mDTP = dispatch => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId)),
  createComment: comment => dispatch(createComment(comment)),
});

export default withRouter(connect(mSTP, mDTP)(FeedIndexItem));