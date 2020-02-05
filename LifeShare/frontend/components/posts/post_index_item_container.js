import { connect } from 'react-redux';
import PostIndexItem from './post_index';
import { fetchPosts, requestPost, updatePost, deletePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId],
});

const mDTP = dispatch => ({
    requestPost: postId => dispatch(requestPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mSTP, mDTP)(PostIndexItem);