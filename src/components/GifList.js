import React from 'react'

const GifList = (props) => {
  const gifEls = props.gifs.map( gif => <li><img src={gif.images.fixed_height.url} alt="" /></li> )
  return (
    <ul>{gifEls}</ul>
  )
}

export default GifList
