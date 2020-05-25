import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Gallery from './pages/gallery/gallery.component';
import Video from './pages/video/video.component';

import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/video" component={Video} />
      </Switch>
    )
  }

}

export default App;