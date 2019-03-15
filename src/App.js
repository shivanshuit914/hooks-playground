import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import DataDisplay from './DataDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Learn React Hooks
            <Button />
            <DataDisplay />
        </header>
      </div>
    );
  }
}

export default App;
