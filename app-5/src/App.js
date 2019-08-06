import React, { Component } from "react"
import "./App.css";
import Image from'./img-component/Image'

class App extends Component {
  render() {
    return (
      <div>
        <Image image={'https://pics.me.me/nothing-to-see-here-just-two-legends-smiling-at-each-58267562.png'}/>
      </div>
    );
  }
}

export default App;
