import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Route";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
