import React, { Component } from 'react';

import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'Johnny'
  }

  nameChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserInput nameChange={this.nameChangeHandler} value={this.state.username} />
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
