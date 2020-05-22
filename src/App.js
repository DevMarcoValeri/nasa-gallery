import React from 'react';

import Header from './components/header/header.component';
import Main from './components/main/main.component';

// Import images
import blackMoon from './images/blackMoon.jpg';
import yellowMoon from './images/yellowMoon.jpg';

import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header imageUrl={blackMoon} />
        <Main imageUrl={yellowMoon} />
      </div>
    )
  }

}

export default App;