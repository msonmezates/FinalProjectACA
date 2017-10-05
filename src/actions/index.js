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

export function deleteMeme(params) {
  console.log(params);
}
