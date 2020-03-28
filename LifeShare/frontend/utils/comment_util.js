export const fetchComments = (commentId) => {
  return $.ajax({
    method: "GET",
    url: `api/posts/${commentId}`
  })
}

export const fetchComment = commentId => {
  return $.ajax({
    method: "GET",
    url: `api/comments/${commentId}`
  })
};

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  })
};

export const deletePost = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  })
};