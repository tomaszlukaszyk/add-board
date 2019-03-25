import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS
} from "./actionTypes";

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGN_IN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGN_IN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT_SUCCESS });
      });
  };
};
