import { RECEIVE_SEARCH_USER } from '../actions/search_actions';

const SearchReducer = (state=[], action) => {
  switch(action.type){
    case RECEIVE_SEARCH_USER:
      return action.user;
    default:
      return state;
  }
};

export default SearchReducer;