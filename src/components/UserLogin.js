import React, { Component } from 'react';

import styles from './../css/index.css';

class UserLogin extends Component {

  handleSubmit(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Member Login</h1>
        <input className="form--input" type="text" ref="username" placeholder="Username" name="username" /><br /> 
        <input className="form--input" type="password" ref="password" placeholder="Password" name="password" /><br />
        <input className="form--submit" type="submit" value="Login" />
      </form>
    )
  }
}

export default UserLogin;


