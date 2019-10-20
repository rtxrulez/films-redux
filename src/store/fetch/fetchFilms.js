import { FILMS_REQUEST } from "../actions/fetchFilms/fetchFilmsType";
import {
  filmsSuccess,
  filmsFilure,
  nameSort
} from "../actions/fetchFilms/fetchFilmsActions";

export default store => next => action => {
  console.log(action.type === FILMS_REQUEST);
  if (action.type === FILMS_REQUEST) {
    console.log("ac", action);
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
        console.log("films");
      })
      .catch(error => {
        store.dispatch(filmsFilure(error));
      });
  }
  next(action);
};
