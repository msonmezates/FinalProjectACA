import React, { Component }from 'react';
import styles from '../styles/index.css';
import MemeDetail from './MemeDetail';

class ListOfMemes extends Component {
  constructor() {
    super();

    this.state ={
      memeLimit: 10
    };
  }

  handleMemeLimit = () => {
    this.setState(prevState => {
      return {
        memeLimit: prevState.memeLimit+10
      }
    });
  }
  render() {
    const memeDivs = this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
      return (
        <MemeDetail key={index} meme={meme} />
      );
    });
    return (
      <div>
        <div>
          {memeDivs}
        </div>
        <div
          className="meme-button"
          onClick={this.handleMemeLimit}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

export default ListOfMemes;
