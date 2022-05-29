import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/configureStore";
import App from "./App";

const initialState: any = {};
const store = configureStore(initialState);

ReactDOM.render(
  <App store={store}  />,
  document.getElementById("root")
);