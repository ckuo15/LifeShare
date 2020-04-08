import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { fetchPosts, requestPost, updatePost, deletePost } from '../../actions/post_actions';
import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    requestPost: postId => dispatch(requestPost(postId)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    createComment: comment => dispatch(createComment(comment)) // dispatch sent to middleware
});

export default withRouter(connect(mSTP, mDTP)(PostIndexItem));

//withRouter gives you params