import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

const action = 'ACTION'
const comedy = 'COMEDY'

class PrimeVideo extends Component {
  state = {
    actionMovies: [],
    comedyMovies: [],
  }

  componentDidMount() {
    this.renderMovies()
  }

  renderMovies = () => {
    const {moviesList} = this.props
    console.log(moviesList, 'lllllll')
    const actionMoviesList = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    this.setState({
      actionMovies: actionMoviesList,
      comedyMovies: comedyMoviesList,
    })
  }

  render() {
    const {actionMovies, comedyMovies} = this.state
    return (
      <div className="prime-video-container">
        <header>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-img"
          />
        </header>
        <div className="movies-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
