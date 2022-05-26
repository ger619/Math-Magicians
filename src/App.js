import React from 'react';
import './App.css';
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
export default App;
