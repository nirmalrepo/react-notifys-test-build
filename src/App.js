import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notifys from 'react-notifys';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h1>React Notifys</h1>
          <p className="discription">Notifys is a React component which provides notifications with many configuration possibilities.</p>
        <p>
          <Notifys className="notifys notifys-success fade"><strong>Success!</strong> Indicates a successful or positive action.</Notifys>
        </p>
          <p>
              <Notifys className="notifys notifys-info fade"><strong>Info!</strong> Indicates a neutral informative change or action.</Notifys>
        </p><p>
          <Notifys className="notifys notifys-warning fade"><strong>Warning!</strong> Indicates a neutral informative change or action.</Notifys>
        </p>

          <p>
              <Notifys className="notifys notifys-danger fade"><strong>Danger!</strong> Indicates a neutral informative change or action.</Notifys>
          </p>
      </div>
    );
  }
}

export default App;
