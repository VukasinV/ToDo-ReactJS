import React, { Component } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

class TaskList extends Component {
  state = {
    value: "This is state value",
    tasks: [
      {
        text: "this is spome taks"
      },
      {
        text: "this is spome taks"
      },
      {
        text: "this is spome taks"
      },
      {
        text: "this is spome taks"
      },
      {
        text: "this is spome taks"
      }
    ]
  };

  render() {
    return (
      <div className="task-list">
        <div className="task-list__header">
          <div className="task-list__navagation">
            <img src="./left-arrow.svg" alt="left-navigation" />
          </div>
          <p>10. january 2019.</p>
          <div className="task-list__navagation" alt="right-navigation">
            <img src="./right-arrow.svg" alt="right-navigation" />
          </div>
        </div>
        {this.state.tasks.map((x, id) => {
          return <Task key={id} someProp={x.text} />;
        })}
      </div>
    );
  }
}

export default TaskList;
