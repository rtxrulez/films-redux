import { combineReducers } from "redux";
import episodsReducer from "./episods";
import settingsReducer from "./settings";

export default combineReducers({
  episods: episodsReducer,
  settings: settingsReducer
});
