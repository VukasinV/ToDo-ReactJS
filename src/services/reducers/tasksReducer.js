import { FETCH_TASKS, POST_TASK } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        items: action.payload
      };
    case POST_TASK:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default tasksReducer;
