import React, { Component } from 'react';
import './Nav.css';
import arrow from './long_arrow.svg'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <a className="Nav-link Nav-prev">
            <img src={arrow} alt="go back" className="Nav-prev-svg"></img>
        </a>
        <p className="Nav-title">
          Political Figure
        </p>
        <a className="Nav-link Nav-next">
            <img src={arrow} alt="go next" className="Nav-next-svg"></img>
        </a>
      </div>
    );
  }
}

export default Nav;
