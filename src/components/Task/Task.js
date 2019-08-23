import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  render() {
    return (
      <div className="task">
        <p>{this.props.someProp}</p>
      </div>
    );
  }
}

export default Task;
