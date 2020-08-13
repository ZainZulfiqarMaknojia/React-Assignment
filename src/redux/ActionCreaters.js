import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addContact = (contact) => ({
  type: ActionTypes.ADD_CONTACT,
  payload: contact,
});
export const postContact = (
  name,
  phoneNumber,
  address,
  gender,
  shortBio,
  image
) => (dispatch) => {
  const newContact = {
    name: name,
    phoneNumber: phoneNumber,
    address: address,
    gender: gender,
    shortBio: shortBio,
    image: image,
  };
  return fetch(baseUrl + "contact", {
    method: "POST",
    body: JSON.stringify(newContact),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addContact(response)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};
export const fetchContact = () => (dispatch) => {
  dispatch(contactLoading(true));
  return fetch(baseUrl + "contact")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((contact) => dispatch(addContacts(contact)))
    .catch((error) => dispatch(contactFailed(error.message)));
};
export const contactLoading = () => ({
  type: ActionTypes.CONTACT_LOADING,
});

export const contactFailed = (errmess) => ({
  type: ActionTypes.CONTACT_FAILED,
  payload: errmess,
});

export const addContacts = (contact) => ({
  type: ActionTypes.ADD_CONTACTS,
  payload: contact,
});
