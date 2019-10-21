import { DATE_SORT, NAME_SORT } from "../actions/fetchFilms/fetchFilmsType";
import { replaceFilms } from "../actions/fetchFilms/fetchFilmsActions";

export default store => next => action => {
  const { nameSort, dateSort, episodList } = { ...store.getState().episods };

  if (action.type === NAME_SORT) {
    episodList.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      let result = 0;
      if (nameA < nameB) {
        result = -1;
      }
      if (nameA > nameB) {
        result = 1;
      }
      if (nameSort === "up") {
        result = result * -1;
      }

      return result;
    });
    store.dispatch(replaceFilms(episodList));
  }

  if (action.type === DATE_SORT) {
    episodList.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      let result = 0;

      if (dateA < dateB) {
        result = -1;
      }
      if (dateA > dateB) {
        result = 1;
      }

      if (dateSort === "up") {
        result = result * -1;
      }
      return result;
    });
    store.dispatch(replaceFilms(episodList));
  }

  return next(action);
};
