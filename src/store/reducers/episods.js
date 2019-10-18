import {
  FILMS_REQUEST,
  FILMS_SUCCESS,
  FILMS_FAILURE,
  NAME_SORT,
  DATE_SORT,
  REPLACE_FILMS
} from "../actions/fetchFilms/fetchFilmsType";

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
    case FILMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };

    case FILMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        episodList: [...action.payload]
      };

    case FILMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        error: action.error
      };

    case NAME_SORT:
      return {
        ...state,
        dateSort: false,
        nameSort: state.nameSort
          ? state.nameSort === "down"
            ? "up"
            : "down"
          : "up"
      };

    case DATE_SORT:
      return {
        ...state,
        nameSort: false,
        dateSort: state.dateSort
          ? state.dateSort === "down"
            ? "up"
            : "down"
          : "up"
      };

    case REPLACE_FILMS:
      console.log("aaaa", action);
      return {
        ...state,
        episodList: [...action.payload]
      };
  }
  return state;
};
