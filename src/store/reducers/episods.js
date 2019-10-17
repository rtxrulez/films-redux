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
    {
      name: "Название",
      pathImg:
        "http://static.tvmaze.com/uploads/images/original_untouched/124/311841.jpg",
      desc: "Описание",
      rating: "7"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FILMS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    }
  }
  return state;
};
