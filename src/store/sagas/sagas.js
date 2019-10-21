import {
  select,
  put,
  takeEvery,
  take,
  all,
  call,
  takeLatest
} from "@redux-saga/core/effects";
import {
  filmsRequest,
  filmsSuccess,
  filmsFilure
} from "../actions/fetchFilms/fetchFilmsActions";
import API from "../API/api";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Saga!", filmsRequest());
}

function* loadFilms(action) {
  try {
    const films = yield call(API.fetchFilms, action.payload);

    const newArr = films.map((v, k) => {
      let path = "";
      if (v.image !== null && "medium" in v.image) {
        path = v.image["medium"];
      }
      return {
        name: v.name,
        date: v.airdate,
        desc: v.summary,
        pathImg: path
      };
    });

    yield put(filmsSuccess(newArr));
  } catch (error) {
    yield put(filmsFilure(error));
  }
}

function* sortingCount() {
  for (let i = 1; i < 3; i++) {
    const action = take("REPLACE_");
  }
}

function* loadFilmsWatch() {
  yield takeLatest(filmsRequest, loadFilms);
}

export default function* rootSaga() {
  yield all([helloSaga(), loadFilmsWatch()]);
}
