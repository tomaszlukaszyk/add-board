import {
  CREATE_AD,
  CREATE_AD_ERROR,
  UPDATE_AD_SUCESS,
  UPDATE_AD_ERROR,
  DELETE_AD_SUCCESS,
  DELETE_AD_ERROR,
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
    case UPDATE_AD_SUCESS:
      return state;
    case UPDATE_AD_ERROR:
      console.log(payload);
      return state;
    case DELETE_AD_SUCCESS:
      console.log("ad deleted");
      return state;
    case DELETE_AD_ERROR:
      console.log(payload);
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
