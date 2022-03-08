import React from "react";
import { Provider } from "react-redux";
import store from "./store";

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const StudentProvider = ({ children }) => {
  // The value prop expects an initial state object
  return (
    <Provider store={store}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </Provider>
  );
};
