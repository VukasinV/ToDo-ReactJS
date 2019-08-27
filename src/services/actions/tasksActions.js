import { FETCH_TASKS } from './types';
import axios from 'axios';

export const fetchTasks = () => dispatch => {
  axios.get('/api/tasks').then(posts =>
    dispatch({
      type: FETCH_TASKS,
      payload: posts
    })
  );
};
