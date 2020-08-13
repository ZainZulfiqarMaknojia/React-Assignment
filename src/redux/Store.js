import { createStore, combineReducers, applyMiddleware } from "redux";
import { contact } from "./Contact";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
const initialContact = {
  name: "",
  phoneNumber: "",
  address: "",
  gender: "Male",
  shortBio: "",
  image: "",
};

export const Store = () => {
  const store = createStore(
    combineReducers({
      Contact: contact,
      ...createForms({
        contact: initialContact,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
