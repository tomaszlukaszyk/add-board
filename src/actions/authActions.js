import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SECCESS,
  SIGN_UP_ERROR
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
        dispatch({ type: SIGN_IN_ERROR, payload: err });
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

export const signUp = ({ email, password, firstName, lastName }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        return getFirestore()
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName,
            lastName
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP_SECCESS });
      })
      .catch(err => {
        dispatch({ type: SIGN_UP_ERROR, payload: err });
      });
  };
};
