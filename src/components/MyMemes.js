import React, { Component } from 'react';

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
              />
            );
          })
        }
      </div>
    );
  }
}

export default MyMemes;
