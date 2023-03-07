const initalState = {
    deleteId: null,
    form: null,
    user: []
   };
 
 
 export function appReducer(state = initalState, action) {
     switch (action.type) {
         case "delete":
             return { ...state, deleteId: action.payload };
         case "api-call":
             return { ...state, user: action.payload };
        case "delete":
            console.log("deleted reducer");
             return {  ...state, user: state.user.filter(user => user.id === action.payload)};
        case "add-contact":
            console.log("add state");
            console.log(state);
            return { ...state, user: action.payload };
         default:
             return state;
     }
   }