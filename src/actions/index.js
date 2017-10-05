// import { username, password } from './secrets';

export function loadMemes() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_MEMES"
    });
    fetch("/memes")
    .then(response => {
      return response.json();
    })
    .then(memes => {
      dispatch(memesLoaded(memes));
    });
  }
}
export function memesLoaded(memes) {
  return {
    type: "MEMES_LOADED",
    value: memes
  };
}

function newMeme(meme) { //create your own meme
  return {
    type: 'NEW_MEME',
    value: meme
  };
}

export function createMeme(meme) {
  return function(dispatch) {
    fetch("/memes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meme)
    })
    .then(meme => dispatch(newMeme(meme)));
  }
}


//
// function postMemeJson(params) {
//   params["username"] = username;
//   params["password"] = password;
//
//   const bodyParams = Object.keys(params).map(key => {
//     return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
//   }).join('&');
//
//   // console.log('bodyParams', bodyParams);
//
//   return fetch('https://api.imgflip.com/caption_image', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: bodyParams
//   })
//     .then(response => response.json());
// }
//
// export function createMeme(new_meme_object) {
//   return function(dispatch) {
//     return postMemeJson(new_meme_object)
//       .then(new_meme => dispatch(newMeme(new_meme)));
//   }
// }

export function deleteMeme(params) {
  console.log(params);


}
