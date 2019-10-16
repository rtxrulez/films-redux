import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const configStore = initialState => {
  const store = createStore(rootReducer, initialState);

  // горячая замена редюсера в webpack
  if (module.hot) {
    module.hot.accept("./reducers/rootReducer", () => {
      const nextRootReducer = require("./reducers/rootReducer");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configStore;
