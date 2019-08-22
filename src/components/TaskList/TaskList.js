import React, { Component } from "react";
import Task from "../Task/Task";

class TaskList extends Component {
  state = {
    value: "This is state value"
  };

  render() {
    return (
      <div>
        <p>this is taks list component</p>
        <p>{this.state.value}</p>
        <Task someProp="This is passed value" />
      </div>
    );
  }
}

export default TaskList;
