import {
  FILMS_REQUEST,
  FILMS_SUCCESS,
  FILMS_FAILURE,
  NAME_SORT
} from "./fetchFilmsType";

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

export const nameSort = () => {
  return {
    type: NAME_SORT
  };
};
