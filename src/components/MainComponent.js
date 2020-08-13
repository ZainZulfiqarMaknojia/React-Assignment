import React, { useEffect } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { postContact, fetchContact } from "../redux/ActionCreaters";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("State: ", state.Contact);
  return {
    contact: state.Contact,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postContact: (name, phoneNumber, address, gender, shortBio, image) =>
    dispatch(postContact(name, phoneNumber, address, gender, shortBio, image)),
  fetchContact: () => {
    dispatch(fetchContact());
  },
});
function MainComponent(props) {
  console.log(props.contact.contact, "hello");
  useEffect(() => {
    props.fetchContact();
  }, []);
  return (
    <Home
      contact={props.contact}
      contactLoading={props.contact.isLoading}
      contactErrMess={props.contact.errMess}
    />
  );
  /*return <Contact postContact={props.postContact} />;*/
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
