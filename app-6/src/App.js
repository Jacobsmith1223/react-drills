import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo'

class App extends Component {
constructor(){
  super()

  this.state = {
    userInput: ' ',
    list:[]
  }
}

userInput = (event) => {
  this.setState({userInput: event.target.value})
}

list = () => {
  this.setState({list:[...this.state.list,this.state.userInput]})
}

  render(
     listItems = this.state.list.map((element)=> {
      return <Todo event={element} />
    })
  ) {
    return (
      <div className='App'>
      <h1 >My To-Do List:</h1>
      <input onChange={this.userInput}/>
      <button onClick={this.list}>Add</button>
      <p>{listItems}</p>
      
      </div>
    );
  }
}

export default App;
