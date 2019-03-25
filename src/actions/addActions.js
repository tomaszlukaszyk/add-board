import { CREATE_ADD, CREATE_ADD_ERROR } from "./actionTypes";

export const createAdd = add => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirestore()
      .collection("ads")
      .add({
        ...add,
        author: "Test author",
        postedAt: new Date()
      })
      .then(() =>
        dispatch({
          type: CREATE_ADD,
          payload: add
        })
      )
      .catch(err =>
        dispatch({
          type: CREATE_ADD_ERROR,
          payload: err
        })
      );
  };
};
