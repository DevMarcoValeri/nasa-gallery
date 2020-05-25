import React from 'react';

import './video.styles.scss';

class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            video: []
        }
    }

    nasaVideo = () => {
        fetch(`https://images-api.nasa.gov/captions/172_ISS-Slosh`)
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse));
    }

    render() {
        return (
            <div>
                {this.nasaVideo()}
            </div>
        )
    }

}

export default Video;