import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state={
      userName: " ",
      pass: " "
    }
  }

  userName = (event) => {
    this.setState({userName: event.target.value})
    
  }
  pass = (event) => {
    this.setState({pass: event.target.value})
  }

  last = (event) => {
    alert(`username: ${this.state.userName} password: ${this.state.pass}`)
  }

  render() {
    return (
      <div>
        <input placeholder="username" onChange={this.userName} />
        <input placeholder="password" onChange={this.pass}/>
        <button onClick={this.last}>Login</button>

      </div>
    );
  }
}

export default App;
