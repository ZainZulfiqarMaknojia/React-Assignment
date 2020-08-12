import React from "react";
import Main from "./components/MainComponent";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import "./App.css";
const reduxStore = Store();

function App() {
  return (
    <Provider store={reduxStore}>
      <Main />
    </Provider>
  );
}
export default App;
