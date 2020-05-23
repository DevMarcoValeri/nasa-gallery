import React from 'react';

import './main.styles.scss';

const Main = (props) => (
    <main>
        <section className="main-container">
            <h2 id="main" className>Discover the space</h2>
            <div className="main-container-media">
                <h2>Space photos</h2>
                <img src={props.imageUrlOne} alt="moon" />
            </div>
            <div className="main-container-media">
                <h2>Space videos</h2>
                <img src={props.imageUrlTwo} alt="logo" />
            </div>
        </section>
    </main>
)

export default Main;