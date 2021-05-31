import { Fragment } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import Router from "./Route";
import ApiContextProvider from "./useContext";
import "./App.css";

function App() {
  return (
    <Fragment>
      <ApiContextProvider>
        <BrowserRouter>
          <Router />
          <Redirect to="/search" />
        </BrowserRouter>
      </ApiContextProvider>
    </Fragment>
  );
}

export default App;
