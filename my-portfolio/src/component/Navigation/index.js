import React, {Component} from 'react';
import './styles.css';
import logo from './images/logo.PNG';

class Navigation extends Component {
  render() {
    return(
      <header>
        <nav role="navigation">
          <img src={logo} alt="LOGO" />
          <div className="navbar" id="mini-icon">
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
            <ul>
              <li>
                <a href="#PORTFOLIO">PORTFOLIO</a>
              </li>

              <li>
                <a href="#ABOUT"> ABOUT </a>
              </li>

              <li>
                <a href="#CONTACT"> CONTACT </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;