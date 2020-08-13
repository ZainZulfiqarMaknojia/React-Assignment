import React from "react";
import Main from "./components/MainComponent";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
const reduxStore = Store();

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
