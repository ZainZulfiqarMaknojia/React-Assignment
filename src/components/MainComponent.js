import React from "react";
import Home from "./HomeComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};
function MainComponent(props) {
  return <Home contact={props.contact} />;
}
export default connect(mapStateToProps)(MainComponent);
