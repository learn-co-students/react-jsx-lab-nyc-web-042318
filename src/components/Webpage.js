import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
    render (){
        return (
            <p>
            <FillerText test />,

            <title>The world's coolest webpage</title>,
            <FillerText what/>
            </p>
        )
    }
}

export default Webpage;