import React, { Component } from 'react';
import '../styles/index.css';
import { Button } from 'react-bootstrap';

class MyMemes extends Component {

  render() {
    return (
      <div>
        {
          this.props.myOwnMemes.map((meme, index) => {
            return (
              <div style={{display: 'inline-block'}}>
                <img
                  key={index}
                  src={meme.data.url}
                  alt="my-personal-meme"
                  className="my-meme-img"
                />
              <div>
                  <Button className="delete-btn">DELETE</Button>
                </div>
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default MyMemes;
