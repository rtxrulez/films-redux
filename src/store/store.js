import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { FILMS_REQUEST } from "./actions/fetchFilms/fetchFilmsType";
import {
  filmsSuccess,
  filmsFilure
} from "./actions/fetchFilms/fetchFilmsActions";

const fetchFilms = store => next => action => {
  if (action.type === FILMS_REQUEST) {
    fetch("http://api.tvmaze.com/shows/1/episodes?specials=1", {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        return response.json();
      })
      .then(films => {
        const newArr = films.map((v, k) => {
          let path = "";
          if (v.image !== null && "medium" in v.image) {
            path = v.image["medium"];
          }
          return {
            name: v.name,
            date: v.airdate,
            desc: v.summary,
            pathImg: path
          };
        });
        store.dispatch(filmsSuccess(newArr));
      })
      .catch(error => {
        store.dispatch(filmsFilure(error));
      });
  }
  next(action);
};

const logger = store => next => action => {
  console.log("logger: ", action.type);
  return next(action);
};

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(fetchFilms, logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
