import { username, password } from './secrets';

function receiveMemes(json) {
  const { memes } = json.data;

  return {
    type: 'RECEIVE_MEMES',
    value: memes
  };
}

function  fetchMemesJson() { //access memes in json format
  return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

export function fetchMemes() { //this function avoids asynchronous behavior
  return function(dispatch) {
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}

function newMeme(meme) { //create your own meme
  return {
    type: 'NEW_MEME',
    value: meme
  };
}

function postMemeJson(params) {
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&');

  // console.log('bodyParams', bodyParams);

  return fetch('https://api.imgflip.com/caption_image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  })
    .then(response => response.json());
}

export function createMeme(new_meme_object) {
  return function(dispatch) {
    return postMemeJson(new_meme_object)
      .then(new_meme => dispatch(newMeme(new_meme)));
  }
}

export function deleteMeme(params) {
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&');

  return function(dispatch) {
    fetch('https://api.imgflip.com/caption_image' + params, {
      method: 'DELETE',
      body: bodyParams(params)
    })
      .then(response => response.json())
        .then(() => dispatch(createMeme()));
  }
}
