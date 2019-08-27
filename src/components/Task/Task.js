import React, { Component } from "react";
import "./Task.css";
import removeBtn from "../../static/remove-button.svg";

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
        <div
          className="task__exit-btn"
          onClick={event => this.props.deleteTask(this.props.task.id)}
        >
          <img src={removeBtn} alt="remove task" height="25" width="25" />
        </div>
      </div>
    );
  }
}

export default Task;
