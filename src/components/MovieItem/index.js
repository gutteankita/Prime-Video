import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import './index.css'

class MovieItem extends Component {
  render() {
    const {movieDetails} = this.props

    const {thumbnailUrl, videoUrl} = movieDetails

    return (
      <div>
        <Popup
          className="popup-content"
          modal
          trigger={
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          }
        >
          {close => (
            <div className="modal-container">
              <button
                className="close-btn"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="icon" size={24} />
              </button>

              <div className="movie-player-container">
                <ReactPlayer
                  url={videoUrl}
                  className="movie-player-container"
                />
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default MovieItem
