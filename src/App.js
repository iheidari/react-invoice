import React, { Component } from 'react';
import './App.css';
import InvoiceList from './containers/InvoiceList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Invoice</h1>
        </header>
        <p className="App-intro">
          <InvoiceList />
        </p>
      </div>
    );
  }
}

export default App;
