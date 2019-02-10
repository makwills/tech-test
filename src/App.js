import React, { Component } from 'react';

import UserLogin from "./components/UserLogin";
import ToggleElement from "./components/ToggleElement";

import styles from './css/index.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className="app--container">
          <div className="content--container">
            { (this.state.user) ? <ToggleElement user={this.state.user} /> : <UserLogin onSignIn={this.signIn.bind(this)} /> }
          </div>
        </div>
      </div>
    )
    
  }
  
}

export default App;