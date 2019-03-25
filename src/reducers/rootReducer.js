import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

import addReducer from "./addReducer";

const rootReducer = combineReducers({
  addReducer,
  firestoreReducer
});

export default rootReducer;
