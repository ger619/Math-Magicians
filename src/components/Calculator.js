import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="app1">
          <div className="calculator">

            <div className="display">
              <span>0</span>
            </div>
            <div className="operators">
              <button type="button" color="primary" value="">&#247;</button>
              <button type="button" color="primary" value="">&times;</button>
              <button type="button" color="primary" value="">-</button>
              <button type="button" color="primary" value="">+</button>
              <button type="button" color="primary" value="">=</button>

            </div>

            <div className="numbers">
              <button type="button" color="primary" value="">AC</button>
              <button type="button" color="primary" value="">+/-</button>
              <button type="button" color="primary" value="">%</button>
              <button type="button" color="primary" value="1">1</button>
              <button type="button" color="primary" value="2">2</button>
              <button type="button" color="primary" value="3">3</button>
              <button type="button" color="primary" value="4">4</button>
              <button type="button" color="primary" value="5">5</button>
              <button type="button" color="primary" value="6">6</button>
              <button type="button" color="primary" value="7">7</button>
              <button type="button" color="primary" value="8">8</button>
              <button type="button" color="primary" value="9">9</button>
              <button type="button" color="primary" value="0">0</button>
              <button type="button" color="primary" value="0">.</button>
            </div>
          </div>
        </div>

      </>
    );
  }
}
export default Calculator;
