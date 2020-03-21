import * as CommentAPIUtil from '../utils/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId =>  ({
  type: REMOVE_COMMENT,
  commentId
});

export const requestComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = commentId => dispatch(
  CommentAPIUtil.deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);