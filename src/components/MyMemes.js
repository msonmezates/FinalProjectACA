import React, { Component } from 'react';
import '../styles/index.css';
import { Button } from 'react-bootstrap';

class MyMemes extends Component {

  handleDeleteBtn = meme => {
    if (this.props.deleteMeme) {
      this.props.deleteMeme(meme);
    }
  }

  render() {
    return (
      <div>
        {
          this.props.myOwnMemes.map((meme, index) => {
            return (
              <div
                style={{display: 'inline-block'}}
                key={index}
              >
                <img

                  src={meme.data.url}
                  alt="my-personal-meme"
                  className="my-meme-img"
                />
              <div>
                  <Button
                    className="btn btn-danger delete-btn"
                    onClick={this.handleDeleteBtn(meme)}
                  >
                    DELETE
                  </Button>
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
