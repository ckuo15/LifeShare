import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';


const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    posts: postsReducer,
    users: usersReducer
});

export default rootReducer;

