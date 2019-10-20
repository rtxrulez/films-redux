import { select, put, takeEvery, all, call } from "@redux-saga/core/effects";
import { filmsRequest } from "../actions/fetchFilms/fetchFilmsActions";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Saga!", filmsRequest());
}

// export function* loadFilms() {
//   console.log("load");
//   yield call(
//     fetch("http://api.tvmaze.com/shows/1/episodes?specials=1", {
//       method: "GET",
//       mode: "cors"
//     })
//   );
//   yield put(filmsRequest());
// }

// // logger
// export function* watchLogger() {
//   yield takeEvery("*", function* logger(action) {
//     const state = yield select();

//     console.log("Saga Action: ", action);
//   });
// }

export default function* rootSaga() {
  yield all([helloSaga()]);
}
