import React, { Component } from "react";

class Image extends Component {
    render() {
      return (
        <div>
          <img src={this.props.image}></img>
        </div>
      );
    }
  }
  
  export default Image;