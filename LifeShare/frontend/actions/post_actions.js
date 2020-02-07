import * as PostAPIUtil from '../utils/post_api_util';


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});


export const requestPosts = (userId) => dispatch => (
    PostAPIUtil.fetchPosts(userId).then(posts => dispatch(receivePosts(posts)))
);

export const requestPost = postId => dispatch => (
    PostAPIUtil.fetchPost(postId).then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = postId => dispatch => (
    PostAPIUtil.deletePost(postId).then(() => dispatch(removePost(postId)))
);