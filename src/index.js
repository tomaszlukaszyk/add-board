import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducer";
import fbConfig from "./config/fbConfig";

const rrfbConfig = {
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  userProfile: "users"
};

const enchancers = compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reactReduxFirebase(fbConfig, rrfbConfig),
  reduxFirestore(fbConfig)
);

const store = createStore(rootReducer, enchancers);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
