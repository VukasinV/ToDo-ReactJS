import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    taskDescription: ''
  };

  updateInputValue = e => {
    this.setState({ taskDescription: e.target.value });
  };

  render() {
    return (
      <div className="add-task">
        <input type="text" onChange={this.updateInputValue} />
        <button
          className="add-task__btn"
          onClick={() => this.props.addEvent(this.state.taskDescription)}
        >
          add task
        </button>
      </div>
    );
  }
}

export default AddTask;
