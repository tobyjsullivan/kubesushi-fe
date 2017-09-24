import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

import './TitleBar.css';

class TitleBar extends Component {
  state = {
    mouseOverLogo: false
  }

  _handleMouseOverLogo = () => this.setState({mouseOverLogo: true});

  _handleMouseLeaveLogo = () => this.setState({mouseOverLogo: false});

  render() {
    return (
      <nav className="title-bar">
        <ul className="title-bar__global-menu">
          <li className="title-bar__menu-item title-bar__logo-box">
            <Link to="/">
              <button
                className="title-bar__button"
                onMouseOver={this._handleMouseOverLogo}
                onMouseLeave={this._handleMouseLeaveLogo}>
                <Logo inverted={this.state.mouseOverLogo} />
              </button>
            </Link>
          </li>
          <li className="title-bar__menu-item">
            <Link to="/dashboard">
              <button className="title-bar__button">Dashboard</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TitleBar;
