import { FILMS_REQUEST, FILMS_SUCCESS, FILMS_FAILURE } from "./fetchFilmsType";

export const filmsRequest = () => {
  return {
    type: FILMS_REQUEST
  };
};

export const filmsSuccess = payload => {
  return {
    type: FILMS_SUCCESS,
    payload
  };
};

export const filmsFilure = error => {
  return {
    type: FILMS_FAILURE,
    error
  };
};
