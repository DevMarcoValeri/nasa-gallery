import React from 'react';

import NavBar from '../../components/navbar/navbar.component';
import Search from '../../components/search/search.component';
import Button from '../../components/button/button.component';

import './gallery.styles.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }

    nasaGallery = () => {
        fetch("https://images-api.nasa.gov/search?q=apollo&media_type=image")
        .then(response => response.json())
        .then(jsonResponse => {
            //console.log(jsonResponse.collection.items[0].links[0].href);
            const images = jsonResponse.collection.items.map(image => image);
            console.log(images);
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleClick = () => {
        this.nasaGallery();
    }

    render() {
        return (
            <div>
                <NavBar />
                <section className="gallery-container">
                    <div className="gallery-title">
                        <h2>Discover the most beautiful NASA's pictures</h2>
                    </div>
                    <div className="gallery-search">
                        <Search value={this.state.value} onChange={this.handleChange} />
                        <Button onClick={this.handleClick} />
                        <p>Test: {this.state.value}</p>
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                    <div className="gallery-picture">
                        <img src="https://www.devmarco.com/images/js-logo.png" alt="" />
                    </div>
                </section>
            </div>
        )
    }

}

export default Gallery;