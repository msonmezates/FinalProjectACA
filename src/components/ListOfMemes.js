import React, { Component }from 'react';
import '../styles/index.css';
import MemeDetail from './MemeDetail';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class ListOfMemes extends Component {
  constructor() {
    super();

    this.state ={
      memeLimit: 10,
      text0: '', //top text
      text1: '' //bottom text
    };
  }

  handleMemeLimit = () => {
    this.setState(prevState => {
      return {
        memeLimit: prevState.memeLimit+10 //show 10 more items each item clicked
      }
    });
  }

  render() {
    console.log(this.state.text0); //testing setState
    console.log(this.state.text1);

    const memeDivs = this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
      return (
        <MemeDetail key={index} meme={meme} />
      );
    });
    return (
      <div>
        <h4><i>Write Some Text...</i></h4>
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
