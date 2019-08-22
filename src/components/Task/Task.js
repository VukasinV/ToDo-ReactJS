import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div>
        <p>this is task komponent</p>
        <p>{this.props.someProp}</p>
      </div>
    );
  }
}

export default Task;
