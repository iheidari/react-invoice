import React, { Component } from "react";
import "./App.css";
import Invoice from "./containers/Invoice";
import { initApp } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    props.dispatch(initApp());
  }
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">React Invoice</h1>
        </header>
        <div className="App-intro">
          <Invoice />
        </div>
      </div>
    );
  }
}

export default connect()(App);
