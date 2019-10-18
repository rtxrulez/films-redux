import { DATE_SORT, NAME_SORT } from "../actions/fetchFilms/fetchFilmsType";
import { replaceFilms } from "../actions/fetchFilms/fetchFilmsActions";

export default store => next => action => {
  const { nameSort, dateSort, episodList } = { ...store.getState().episods };

  console.log("type", action.type, nameSort, dateSort);
  if (action.type === NAME_SORT) {
    if (nameSort === "down") {
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
      store.dispatch(replaceFilms(episodList));
    }
    if (nameSort === "up") {
      episodList.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      store.dispatch(replaceFilms(episodList));
    }
  }

  if (action.type === DATE_SORT) {
    if (dateSort === "down") {
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
      store.dispatch(replaceFilms(episodList));
    }
    if (dateSort === "up") {
      episodList.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      });
      store.dispatch(replaceFilms(episodList));
    }
  }

  return next(action);
};
