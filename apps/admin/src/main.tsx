import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import RootRoute from "./routes/RootRoute";
import { persistor, store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootRoute />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
