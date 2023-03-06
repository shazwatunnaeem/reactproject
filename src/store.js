import { createStore, combineReducers } from "redux";


const initalState = {
   deleteId: null,
   form: null,
   user: []
  };


function reducer(state = initalState, action) {
    switch (action.type) {
        case "delete":
            return { ...state, deleteId: action.payload };
        case "api-call":
            return { ...state, user: action.payload.users };
        default:
            return state;
    }
  }

  export const store = createStore(combineReducers ({reducer}));