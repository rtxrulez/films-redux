import { createAction } from "redux-actions";

export const filmsRequest = createAction("FILMS_REQUEST");

export const filmsSuccess = createAction("FILMS_SUCCESS");
export const filmsFilure = createAction("FILMS_FAILURE");

export const nameSort = createAction("NAME_SORT");
export const dateSort = createAction("DATE_SORT");

export const replaceFilms = createAction("REPLACE_FILMS");
