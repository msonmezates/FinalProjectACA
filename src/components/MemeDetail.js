import React, { Component } from 'react';
import '../styles/index.css';

class MemeDetail extends Component{
  constructor() {
    super();

    this.state = {
      hover: false
    };
  }

  postMeme = () => { //display your own meme
    const { text0, text1 } = this.props;

    const memeObj = { //create new meme
      text0,
      text1,
      template_id: this.props.meme.id
    };

    this.props.newMeme(memeObj); //pass it in to trigger action
  }

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
