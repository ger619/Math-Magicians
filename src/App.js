import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Header from './components/Header';
import Quotes from './components/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
