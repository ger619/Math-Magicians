import React, { Component } from 'react';
import './Calculator.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="header-display">
        <h1 className="header-title">Math Magician</h1>
        <ul className="header-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Calculator">Calculator</Link></li>
          <li><Link to="/Quotes">Quote</Link></li>
        </ul>
      </div>

    );
  }
}
export default Header;
