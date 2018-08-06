import { combineReducers } from 'redux';

function memes(state = [], action) {
  switch(action.type) {
    case 'MEMES_LOADED':
      return action.value;
    default:
      return state;
  }
}

function myOwnMemes(state = [], action) {
  switch(action.type) {
    case 'NEW_MEME':
      return  [...state, action.value]; //make a copy of it and assign value in the end
                                        //so that we won't mutate state directly
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes, myOwnMemes });

export default rootReducer;
