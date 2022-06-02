import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0, next: null, operation: null,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="app1">

          <div className="header-calc">
            <h1>Lets do some math</h1>
          </div>
          <div className="calculator">
            <div className="display">
              { total}
              {operation}
              {next}

            </div>
            <div className="operators">
              <button onClick={this.clickEvent} name="÷" type="button" color="primary" value="">&#247;</button>
              <button onClick={this.clickEvent} name="x" type="button" color="primary" value="">&times;</button>
              <button onClick={this.clickEvent} name="-" type="button" color="primary" value="">-</button>
              <button onClick={this.clickEvent} name="+" type="button" color="primary" value="">+</button>
              <button onClick={this.clickEvent} name="=" type="button" color="primary" value="">=</button>
            </div>

            <div className="numbers">
              <button onClick={this.clickEvent} type="button" color="primary" name="AC">AC</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="">+/-</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="">%</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="2">2</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="3">3</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="4">4</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="5">5</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="6">6</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="7">7</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="8">8</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="9">9</button>
              <button onClick={this.clickEvent} type="button" color="primary" name="0">0</button>
              <button onClick={this.clickEvent} type="button" color="primary" name=".">.</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
