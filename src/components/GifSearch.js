import React from 'react'

class GifSearch extends React.Component {

  state = {
    searchTerm: "",
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.props.handleSearch} >
        <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleChange} />
      </form>
    )
  }
}

export default GifSearch
