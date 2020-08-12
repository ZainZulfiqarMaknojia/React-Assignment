import { createStore, combineReducers } from "redux";
import { contact, initialState } from "./Contact";
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
    })
  );

  return store;
};
