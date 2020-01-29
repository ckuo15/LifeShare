import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';


const rootReducer = combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
    entities: entitiesReducer
});

export default rootReducer;

