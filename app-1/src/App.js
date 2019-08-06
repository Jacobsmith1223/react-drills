import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state={
      words: ' '
    }
  }

  words= (event) => {
    this.setState({words: event.target.value})
  }


  render() {
    return (
     <div className='App'>
       <input type='text' onChange={this.words} />
       <h1>{this.state.words}</h1>
     </div>
    );
  }
}

export default App;
