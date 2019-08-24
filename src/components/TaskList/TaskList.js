import React, { Component } from "react";
import AddTask from "../AddTaks/AddTask";
import Task from "../Task/Task";
import "./TaskList.css";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

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

  handleAddEvent = eventDescription => {
    axios
      .post("/api/tasks", { description: eventDescription })
      .then(res => this.setState({ tasks: res.data }));
  };

  deleteTask = id => {
    console.log(id);
    axios
      .delete("/api/tasks/" + id)
      .then(res => this.setState({ tasks: res.data }));
  };

  render() {
    return (
      <div className="task-list">
        <div className="task-list__header">
          <div className="task-list__navagation-button">
            <img
              src="./left-arrow.svg"
              alt="left-navigation"
              height="40"
              width="40"
            />
          </div>
          <p>10. january 2019.</p>
          <div className="task-list__navagation-button" alt="right-navigation">
            <img
              src="./right-arrow.svg"
              alt="right-navigation"
              height="40"
              width="40"
            />
          </div>
        </div>
        <AddTask addEvent={this.handleAddEvent} />
        <div className="task-list__pool">
          {this.state.tasks.map((x, id) => {
            return (
              <CSSTransition key={id} timeout={500} classNames="task">
                <Task
                  key={id}
                  task={x}
                  taskFinished={this.taskFinished}
                  deleteTask={this.deleteTask}
                />
              </CSSTransition>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
