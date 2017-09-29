import React from 'react';

function ListOfMemes(props) {
  const memeDivs = props.memes.map((meme, index) => {
    return (
      <h4 key={index}>{meme.name}</h4>
    );
  });
  return (
    <div>
      {memeDivs}
    </div>
  );
}

export default ListOfMemes;
