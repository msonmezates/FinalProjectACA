import React, { Component }from 'react';
import '../styles/index.css';
import MemeDetailContainer from '../containers/MemeDetailContainer';
import MyMemesContainer from '../containers/MyMemesContainer';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class ListOfMemes extends Component {
  constructor() {
    super();

    this.state ={
      memeLimit: 10,
      text0: '', //top text
      text1: '', //bottom text,
      searchMeme: '' //search for a name
    };
  }

  handleMemeLimit = () => {
    this.setState(prevState => {
      return {
        memeLimit: prevState.memeLimit+10 //show 10 more items each item clicked
      }
    });
  }

  handleSearchBox = e => this.setState({searchMeme: e.target.value});

  render() {
    console.log(this.state.searchMeme);

    const memeDivs = this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
      return (
        <MemeDetailContainer
          key={index}
          meme={meme}
          text0={this.state.text0}
          text1={this.state.text1}
        />
      );
    });
    return (
      <div>
        <h4><i>Write Some Text...</i></h4>
        <MyMemesContainer />
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={e => this.setState({text0: e.target.value})}
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={e => this.setState({text1: e.target.value})}
            />
          </FormGroup>
        </Form>
        <input label="Type any name" onChange={this.handleSearchBox} />
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
