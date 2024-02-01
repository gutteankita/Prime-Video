import {Component} from 'react'
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    console.log(moviesList, 'll')
    const settings = {
      dots: true,
      slidesToScroll: 1,
      slidesToShow: 4,
    }

    return (
      <div className="action-slider">
        <Slider {...settings}>
          {moviesList.map(eachMovie => (
            <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default MoviesSlider
