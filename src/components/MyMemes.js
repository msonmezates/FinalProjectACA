import React, { Component } from 'react';
import '../styles/index.css';

class MyMemes extends Component {

  render() {
    return (
      <div>
        {
          this.props.myOwnMemes.map((meme, index) => {
            return (
              <img
                key={index}
                src={meme.data.url}
                alt="my-personal-meme"
                className="my-meme-img"
              />
            );
          })
        }
      </div>
    );
  }
}

export default MyMemes;
