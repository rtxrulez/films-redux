import { createStore, compose, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";

// import rootSaga from "./sagas/sagas";
import sorting from "./middlewares/sorting";
import fetchFilms from "./fetch/fetchFilms";

const logger = store => next => action => {
  console.log("logger: ", action.type);
  return next(action);
};

// const sagaMiddleware = createSagaMiddleware();

const newStore = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(fetchFilms, sorting, logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

// sagaMiddleware.run(rootSaga);

export default newStore;
