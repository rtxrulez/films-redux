import { DATE_SORT, NAME_SORT } from "../actions/fetchFilms/fetchFilmsType";
import { replaceFilms } from "../actions/fetchFilms/fetchFilmsActions";

export default store => next => action => {
  const { nameSort, dateSort, episodList } = { ...store.getState().episods };

  if (action.type === NAME_SORT) {
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
    if (nameSort === "up") {
      episodList.reverse();
    }
    store.dispatch(replaceFilms(episodList));
  }

  if (action.type === DATE_SORT) {
    episodList.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    if (dateSort === "up") {
      episodList.reverse();
    }
    store.dispatch(replaceFilms(episodList));
  }

  return next(action);
};
