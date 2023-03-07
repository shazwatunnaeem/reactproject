import { createStore, combineReducers } from "redux";
import { appReducer } from "./app.reducer";
import contactFormReducer from "./components/ContactForm/contactform.reducer";




  export const store = createStore(combineReducers ({appReducer, contactFormReducer}));
  console.log(store.getState());