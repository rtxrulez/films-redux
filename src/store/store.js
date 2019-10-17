import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { FILMS_REQUEST } from "./actions/fetchFilms/fetchFilmsType";
import { filmsSuccess } from "./actions/fetchFilms/fetchFilmsActions";

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
        console.log("fff", films);
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
      });
  }
  next(action);
};

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(fetchFilms),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
