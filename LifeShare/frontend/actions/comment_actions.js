import * as CommentAPIUtil from '../utils/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'; 

const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId =>  ({
  type: REMOVE_COMMENT,
  commentId
});

export const requestComments = (postId) => dispatch => (
  CommentAPIUtil.fetchComments(postId).then(comments => dispatch(receiveComments(comments)))
);

export const requestComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch(
  CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);