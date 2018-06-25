import React from 'react';
import FillerText from './FillerText.js'

class Webpage extends React.Component{
  render() {
    return(
      <div>
        <FillerText />,
        <title>The world's coolest webpage </title>,
        <FillerText />
      </div>

    )
  }
}
export default Webpage
