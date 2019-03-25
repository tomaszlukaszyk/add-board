import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SECCESS,
  SIGN_UP_ERROR
} from "../actions/actionTypes";

const initialState = {
  authError: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      console.log("login success");
      return { ...state, authError: null };
    case SIGN_IN_ERROR:
      console.log("login error");
      return { ...state, authError: payload };
    case SIGN_OUT_SUCCESS:
      console.log("sign out success");
      return state;
    case SIGN_UP_SECCESS:
      return { ...state, authError: null };
    case SIGN_UP_ERROR:
      return { ...state, authError: payload };

    default:
      return state;
  }
};
