import React, {Component} from 'react';
import './styles.css';
import background from './images/background wallpaper.jpg';

class Hero extends Component {
  render(){
    return(
      <div className='hero'>
        <img src={background} alt="HERO IMAGE" />
      </div>
    )
  }
}

export default Hero;