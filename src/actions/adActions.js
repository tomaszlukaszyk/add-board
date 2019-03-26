import { CREATE_AD, CREATE_AD_ERROR } from "./actionTypes";

export const createAd = ad => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirestore()
      .collection("ads")
      .add({
        ...ad,
        authorId: getState().firebase.auth.uid,
        postedAt: new Date()
      })
      .then(() =>
        dispatch({
          type: CREATE_AD,
          payload: ad
        })
      )
      .catch(err =>
        dispatch({
          type: CREATE_AD_ERROR,
          payload: err
        })
      );
  };
};
