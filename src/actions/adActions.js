import {
  CREATE_AD,
  CREATE_AD_ERROR,
  ADD_COMMENT,
  ADD_COMMENT_ERROR
} from "./actionTypes";

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

export const addComment = ({ comment, adId }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirestore()
      .collection("ads")
      .doc(adId)
      .update({
        comments: getFirebase().firestore.FieldValue.arrayUnion({
          ...comment,
          authorId: getState().firebase.auth.uid,
          postedAt: new Date()
        })
      })
      .then(() => {
        dispatch({
          type: ADD_COMMENT,
          payload: comment
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_COMMENT_ERROR,
          payload: err
        });
      });
  };
};
