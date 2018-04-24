import React, {Component} from 'react';
import './styles.css';
import gridProject from './images/gridproject.PNG';
import javascriptProject from './images/javascriptproject.PNG';
import Masonry from './images/Masonry.PNG';
import nelsonMandela from './images/Nelson.PNG';
import cssProject from './images/sabc-logo.jpg';
import birdwatching from './images/birdwatching.PNG';

class Portfolio extends Component {
  render() {
    return(
      <div className="wrapper" id="PORTFOLIO">
        <img src={gridProject} alt="GRID PROJECT" />
        <img src={javascriptProject} alt="JAVSCRIPT PROJECT" />
        <img src={Masonry} alt="MASONRY" />
        <img src={nelsonMandela} alt="NELSON MANDELA" />
        <img src={cssProject} alt="CSS PROJECT" />
        <img src={birdwatching} alt="BIRDWATCHING" />
      </div>
    );
  }
}

export default Portfolio