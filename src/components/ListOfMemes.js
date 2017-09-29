import React, { Component }from 'react';

class ListOfMemes extends Component {
  render() {
    const memeDivs = this.props.memes.map((meme, index) => {
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
}

export default ListOfMemes;
