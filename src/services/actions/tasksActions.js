import { FETCH_TASKS, POST_TASK } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
  axios.get("/api/tasks").then(result =>
    dispatch({
      type: FETCH_TASKS,
      payload: result.data
    })
  );
};

export const createTask = task => dispatch => {
  axios.post("/api/tasks").then(result =>
    dispatch({
      type: POST_TASK,
      payload: result.data
    })
  );
};
