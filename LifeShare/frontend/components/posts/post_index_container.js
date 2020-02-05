import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestPosts, fetchPost, createPost } from '../../actions/post_actions';

const mSTP = (state) => ({
    posts: Object.values(state.posts)
});

const mDTP = dispatch => ({
    requestPosts: () => dispatch(requestPosts()) // refers to the action
    // updatePost: post => dispatch(updatePost(post)),
    // deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(PostIndex);

