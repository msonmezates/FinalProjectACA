import React, { Component } from 'react';
import '../styles/index.css';

class MemeDetail extends Component{
  constructor() {
    super();

    this.state = {
      hover: false
    };
  }

  postMeme = () => console.log('this.props', this.props);

  render() {
    return (
      <div
        className="meme-item"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
      >
        <img
          className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />

      <p className={this.state.hovered ? "meme-text" : "meme-no-text"}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

export default MemeDetail;
