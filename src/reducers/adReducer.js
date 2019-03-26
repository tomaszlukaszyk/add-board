import { CREATE_AD, CREATE_AD_ERROR } from "../actions/actionTypes";

const initialState = {
  ads: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_AD:
      return state;
    case CREATE_AD_ERROR:
      return state;

    default:
      return state;
  }
};
