import React from "react";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    contact: state.Contact,
  };
};
function MainComponent(props) {
  console.log(props.contact);
  /*return <Home contact={props.contact} />;*/
  return <Contact />;
}
export default connect(mapStateToProps)(MainComponent);
