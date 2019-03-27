import {
  CREATE_AD,
  CREATE_AD_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_ERROR
} from "../actions/actionTypes";

const initialState = {
  ads: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_AD:
      return state;
    case CREATE_AD_ERROR:
      return state;
    case ADD_COMMENT:
      return state;
    case ADD_COMMENT_ERROR:
      console.log(payload);
      return state;

    default:
      return state;
  }
};
