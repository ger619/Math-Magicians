import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: 0,
      next: null,
      operation: null,

    },
  });

  const clickEvent = (name) => setState(({ obj }) => ({ obj: calculate(obj, name) }));

  return (

    <div className="app1">
      <div className="calculator">
        <div className="display">
          { state.obj.total }
          { state.obj.operation }
          { state.obj.next }

        </div>
        <div className="operators">
          <button onClick={clickEvent} name="÷" type="button" color="primary" value="">&#247;</button>
          <button onClick={clickEvent} name="x" type="button" color="primary" value="">&times;</button>
          <button onClick={clickEvent} name="-" type="button" color="primary" value="">-</button>
          <button onClick={clickEvent} name="+" type="button" color="primary" value="">+</button>
          <button onClick={clickEvent} name="=" type="button" color="primary" value="">=</button>
        </div>

        <div className="numbers">
          <button onClick={clickEvent} type="button" color="primary" name="AC">AC</button>
          <button onClick={clickEvent} type="button" color="primary" name="">+/-</button>
          <button onClick={clickEvent} type="button" color="primary" name="%">%</button>
          <button onClick={clickEvent} type="button" color="primary" name="1">1</button>
          <button onClick={clickEvent} type="button" color="primary" name="2">2</button>
          <button onClick={clickEvent} type="button" color="primary" name="3">3</button>
          <button onClick={clickEvent} type="button" color="primary" name="4">4</button>
          <button onClick={clickEvent} type="button" color="primary" name="5">5</button>
          <button onClick={clickEvent} type="button" color="primary" name="6">6</button>
          <button onClick={clickEvent} type="button" color="primary" name="7">7</button>
          <button onClick={clickEvent} type="button" color="primary" name="8">8</button>
          <button onClick={clickEvent} type="button" color="primary" name="9">9</button>
          <button onClick={clickEvent} type="button" color="primary" name="0">0</button>
          <button onClick={clickEvent} type="button" color="primary" name=".">.</button>
        </div>
      </div>
    </div>

  );
}
export default Calculator;
