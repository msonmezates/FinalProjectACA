import { username, password } from './secrets';

export function receiveMemes(json) {
  const { memes } = json.data;

  return {
    type: 'RECEIVE_MEMES',
    value: memes
  };
}

export function  fetchMemesJson() { //access memes in json format
  return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMemes() { //this function avoids asynchronous behavior
  return function(dispatch) {
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}

export function newMeme(meme) { //create your own meme
  return {
    type: 'NEW_MEME',
    value: meme
  };
}

export function postMemeJson(params) {

}
