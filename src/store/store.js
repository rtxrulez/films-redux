import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { FILMS_REQUEST, NAME_SORT } from "./actions/fetchFilms/fetchFilmsType";
import {
  filmsSuccess,
  filmsFilure,
  replaceFilms,
  nameSort
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
        store.dispatch(nameSort());
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

const sorting = store => next => action => {
  const { nameSort, dateSort, episodList } = { ...store.getState().episods };

  if (action.type === NAME_SORT) {
    if (nameSort === "down") {
      episodList.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      store.dispatch(replaceFilms(episodList));
    }
    if (nameSort === "up") {
      episodList.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      store.dispatch(replaceFilms(episodList));
    }
  }
  return next(action);
};

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(fetchFilms, sorting, logger),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
