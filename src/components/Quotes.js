import React, { Component } from 'react';
import './Calculator.css';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app1">
        <div className="header-home">
          <h4> Mathematics is not about numbers,equation,computation or algorithm: </h4>
          <h4> it is about understanding. William Paul Thurston</h4>
        </div>
      </div>
    );
  }
}
export default Quotes;
