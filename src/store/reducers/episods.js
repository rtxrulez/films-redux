import {
  FILMS_REQUEST,
  FILMS_SUCCESS,
  FILMS_FAILURE,
  NAME_SORT,
  DATE_SORT,
  REPLACE_FILMS
} from "../actions/fetchFilms/fetchFilmsType";

import {
  filmsRequest,
  filmsSuccess,
  filmsFilure,
  dateSort,
  nameSort,
  replaceFilms
} from "../actions/fetchFilms/fetchFilmsActions";

export const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  nameSort: "up", // "down" or "up"
  dateSort: false, // "down" or "up"
  episodList: [
    // {
    //   name: "Название",
    //   pathImg:
    //       "http://static.tvmaze.com/uploads/images/medium_landscape/1/4394.jpg",
    //   desc: "Описание",
    //   date: "7"
    // }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case filmsRequest().type:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case filmsSuccess().type:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        episodList: [...action.payload]
      };

    case filmsFilure().type:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.error
      };

    case nameSort().type:
      return {
        ...state,
        dateSort: false,
        nameSort: state.nameSort
          ? state.nameSort === "down"
            ? "up"
            : "down"
          : "up"
      };

    case dateSort().type:
      return {
        ...state,
        nameSort: false,
        dateSort: state.dateSort
          ? state.dateSort === "down"
            ? "up"
            : "down"
          : "up"
      };

    case replaceFilms().type:
      console.log("aaaa", action);
      return {
        ...state,
        episodList: [...action.payload]
      };

    default:
      return state;
  }
};
