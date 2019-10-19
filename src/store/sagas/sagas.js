import { put, takeEvery, all } from "@redux-saga/core/effects";
import { filmsRequest } from "../actions/fetchFilms/fetchFilmsActions";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Saga!", filmsRequest());
}

export function* loadFilms() {
  console.log("load");
  yield delay(1000);
  yield put(filmsRequest());
}

export default function* rootSaga() {
  yield all([helloSaga(), loadFilms()]);
}
