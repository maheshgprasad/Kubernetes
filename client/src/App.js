import React, { Component } from 'react';
// import logo from './logo.svg';
import favicon from './favicon.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={favicon} className="App-logo" alt="logo" />
            <h1 className="App-title">Fibonacci Calculator on Kubernetes</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/otherpage">Description</Link>
          </header>
          <br />
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
