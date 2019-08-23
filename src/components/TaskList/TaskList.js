import React, { Component } from "react";
import Task from "../Task/Task";
import "./TaskList.css";
import axios from "axios";

class TaskList extends Component {
  state = { value: "This is state value", tasks: [] };

  componentDidMount() {
    axios.get("/api/tasks").then(res => this.setState({ tasks: res.data }));
  }

  taskFinished = (id, finished) => {
    let newTasks = this.state.tasks;
    newTasks.find(x => x.id === id).finished = finished;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="task-list">
        <div className="task-list__header">
          <div className="task-list__navagation-button">
            <img src="./left-arrow.svg" alt="left-navigation" />
          </div>
          <p>10. january 2019.</p>
          <div className="task-list__navagation-button" alt="right-navigation">
            <img src="./right-arrow.svg" alt="right-navigation" />
          </div>
        </div>
        <div className="task-list__pool">
          {this.state.tasks.map((x, id) => {
            return <Task key={id} task={x} taskFinished={this.taskFinished} />;
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
