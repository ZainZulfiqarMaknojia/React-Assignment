import { createStore } from "redux";
import { contact, initialState } from "./reducer";

export const store = () => {
  const Store = createStore(contact, initialState);
  return Store;
};
