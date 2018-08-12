import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleSearch = (event) => {
    event.preventDefault()
    console.log(this.state.gifs)
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.search.value}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then( resp => resp.json() )
      .then( gifs => this.setState({
                        gifs: gifs.data.slice(0, 3)
                      })
      )
  }

  render() {
    return (
      <React.Fragment>
        <GifSearch handleSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </React.Fragment>
    )
  }
}

export default GifListContainer
