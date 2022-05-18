import { createStore } from "redux";
import Reducer from "./reducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};
const persistedStore = loadState();
const store = createStore(Reducer, persistedStore,
  );

store.subscribe(() => {
  saveState(store.getState());
});

export default store;