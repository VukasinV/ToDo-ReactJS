import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
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
      </div>
    );
  }
}

export default Task;
