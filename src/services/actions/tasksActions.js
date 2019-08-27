import { FETCH_TASKS } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
  console.log("fetching");
  axios.get("/api/tasks").then(result =>
    dispatch({
      type: FETCH_TASKS,
      payload: result.data
    })
  );
};
