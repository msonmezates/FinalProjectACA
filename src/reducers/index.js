import { combineReducers } from 'redux';

function memes(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_MEMES':
      return action.value;
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes });

export default rootReducer;
