import { CONTACT } from "../shared/contact";
import * as ActionTypes from "./ActionTypes";
export const initialState = {
  contact: CONTACT,
};
export const contact = (
  state = { isLoading: true, errMess: null, contact: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CONTACT:
      var contacts = action.payload;
      return { ...state, contact: state.contact.concat(contacts) };
    case ActionTypes.ADD_CONTACTS:
      console.log("I am Called", action.payload);
      return {
        ...state,
        isLoading: false,
        errMess: null,
        contact: action.payload,
      };

    case ActionTypes.CONTACT_LOADING:
      return { ...state, isLoading: true, errMess: null, contact: [] };

    case ActionTypes.CONTACT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
