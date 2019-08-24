import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  handleRemoveTask() {
    console.log("I removed taks");
  }
  render() {
    return (
      <div className="task">
        <input
          type="checkbox"
          onClick={event =>
            this.props.taskFinished(this.props.task.id, event.target.checked)
          }
          defaultChecked={this.props.task.finished}
        />
        <p
          style={
            this.props.task.finished
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {this.props.task.description}
        </p>
        <div
          className="task__exit-btn"
          onClick={event => this.props.deleteTask(this.props.task.id)}
        >
          <img
            src="./remove-button.svg"
            alt="remove task"
            height="25"
            width="25"
          />
        </div>
      </div>
    );
  }
}

export default Task;
