import { FETCH_TASKS } from "../actions/types";

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
    default:
      return state;
  }
};

export default tasksReducer;
