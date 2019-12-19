import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

// const middlewares = [logger];
const middlewares = [];

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
