import {
  FILMS_REQUEST,
  FILMS_SUCCESS,
  FILMS_FAILURE
} from "../actions/fetchFilms/fetchFilmsType";

export const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
  episodList: [
    // {
    //   name: "Название",
    //   pathImg: {
    //     medium:
    //       "http://static.tvmaze.com/uploads/images/medium_landscape/1/4394.jpg",
    //     original:
    //       "http://static.tvmaze.com/uploads/images/original_untouched/1/4394.jpg"
    //   },
    //   desc: "Описание",
    //   date: "7"
    // }
  ]
};

export default (state = initialState, action) => {
  console.log("acc", action);
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
  }
  return state;
};
