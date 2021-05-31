import React, { useReducer } from "react";

export const ApiContext = React.createContext({});
ApiContext.displayName = "ApiContext";

const initialState = {
  loading: true,
  error: "",
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

const ApiContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
