import { combineReducers } from "redux";

function memes(state = [], action) {
  switch (action.type) {
    case "RECEIVE_MEMES":
      return action.value;
    default:
      return state;
  }
}

function myOwnMemes(state = [], action) {
  switch (action.type) {
    case "NEW_MEME":
      state = [...state, action.value]; //make a copy of it and assign value in the end
      return state; //so that we won't mutate state directly
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes, myOwnMemes });

export default rootReducer;
