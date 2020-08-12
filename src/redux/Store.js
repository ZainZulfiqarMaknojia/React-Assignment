import { createStore } from "redux";
import { contact, initialState } from "./Contact";

export const Store = () => {
  const store = createStore(contact, initialState);
  return store;
};
