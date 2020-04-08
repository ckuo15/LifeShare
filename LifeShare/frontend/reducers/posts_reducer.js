import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import {RECEIVE_COMMENT} from '../actions/comment_actions';

const PostsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_POSTS:
            if (!action.payload.posts) return {};
            return action.payload.posts; //NO MERGING
        case RECEIVE_POST:
            return Object.assign({}, state, { [action.post.id]: action.post })
        case REMOVE_POST:
            newState = Object.assign({}, state);
            delete newState[action.postId]
            return newState;
        case RECEIVE_COMMENT:
            newState = Object.assign({}, state);
            newState[action.comment.post_id].comment_ids.push(action.comment.id)
            return newState;
        default:
            return state;
    }
};

export default PostsReducer;

