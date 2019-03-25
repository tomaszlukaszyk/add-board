import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import addReducer from "./addReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  add: addReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
