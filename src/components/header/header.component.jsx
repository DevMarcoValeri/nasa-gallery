import React from 'react';

import './header.styles.scss';

const Header = (props) => (
    <header
        style={{
            backgroundImage: `url(${props.imageUrl})`
        }}
    >
        <nav>
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>Video</li>
            </ul>
        </nav>
        <section className="header-container">
            <h1 className="header-container-title">NASA Gallery</h1>
        </section>
    </header>
)

export default Header;