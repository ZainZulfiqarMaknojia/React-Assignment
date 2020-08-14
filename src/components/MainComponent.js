import React, { useEffect } from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { postContact, fetchContact } from "../redux/ActionCreaters";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { actions } from "react-redux-form";

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
  resetContactForm: () => {
    dispatch(actions.reset("contact"));
  },
});
function MainComponent(props) {
  console.log(props.contact.contact, "hello");
  useEffect(() => {
    props.fetchContact();
  }, []);
  return (
    /*<Home
      contact={props.contact}
      contactLoading={props.contact.isLoading}
      contactErrMess={props.contact.errMess}
    />
  );*/
    /*return <Contact postContact={props.postContact} />;*/
    <div>
      <Header />
      <Switch>
        <Route
          path="/home"
          component={() => (
            <Home
              contact={props.contact}
              contactLoading={props.contact.isLoading}
              contactErrMess={props.contact.errMess}
            />
          )}
        />
        <Route
          path="/contact"
          component={() => (
            <Contact
              postContact={props.postContact}
              resetContactForm={props.resetContactForm}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
