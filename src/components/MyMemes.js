import React, { Component } from 'react';
import '../styles/index.css';

class MyMemes extends Component {

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
                  <a
                    className="download-btn"
                    href={meme.data.url}
                    download="google.png"
                  >
                    Download Your Meme
                  </a>
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
