import React, { Component } from 'react';
import Navigation from './component/Navigation';
import Hero from './component/Hero';
import Portfolio from './component/Portfolio';

class App extends Component {
  render() {
    return (
      <div className='Container'>
        <Navigation/>
        <Hero />
        <Portfolio />
      </div>
    );
  }
}

export default App;
