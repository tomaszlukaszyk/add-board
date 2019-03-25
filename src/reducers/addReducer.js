import { CREATE_ADD, CREATE_ADD_ERROR } from "../actions/actionTypes";

const initialState = {
  ads: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_ADD:
      return state;
    case CREATE_ADD_ERROR:
      return state;

    default:
      return state;
  }
};
