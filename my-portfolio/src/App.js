import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Hero from './component/Hero';
import Portfolio from './component/Portfolio';
import About from './component/About';

class App extends Component {
  render() {
    return (
      <div className='Container'>
        <Navigation/>
        <Hero />
        <Portfolio />
        <About />
      </div>
    );
  }
}

export default App;
