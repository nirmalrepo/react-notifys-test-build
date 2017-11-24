import React, { Component } from 'react';
import './App.css';
import Notifys from 'react-notifys';

class App extends Component {
    doSomething = e =>{
        alert("Hey! You can do more.");
    };

    render() {
    return (
      <div className="container">
          <h1>React Notifys</h1>
          <p className="discription">Notifys is a React component which provides notifications with many configuration possibilities.</p>
          <Notifys className="notifys notifys-success fade" ><strong>Success!</strong> notify a successful or positive action.</Notifys>
          <Notifys className="notifys notifys-info fade"><strong>Info!</strong> notify a neutral informative change or action.</Notifys>
          <Notifys className="notifys notifys-warning fade"><strong>Warning!</strong> notify a warning that might need attention.</Notifys>
          <Notifys className="notifys notifys-danger fade" onClose={this.doSomething}><strong>Danger!</strong> notify a unsuccessful change or action.</Notifys>
      </div>
    );
  }
}

export default App;
