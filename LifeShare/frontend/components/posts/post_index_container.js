import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts, fetchPost, createPost } from '../../actions/post_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    posts: Object.values(state.posts)

});

const mDTP = dispatch => ({
    requestPosts: (userId) => dispatch(requestPosts(userId)) // refers to the action
    // updatePost: post => dispatch(updatePost(post)),
    // deletePost: postId => dispatch(deletePost(postId))
});

export default withRouter(connect(mSTP, mDTP)(PostIndex));


// state.entities.users[ownProps.match.params.userId].posts
// make a selector that takes in post ids that would return an array of post objects that
// are sorted by created_at being first, oldest being last.

